import { categories, homeCategories } from "data/categories"
import { resources } from "data/external"
import jsdom from "jsdom"
import Levenshtein from "levenshtein"

const allCategories = categories.concat(homeCategories)

function slugify(text) {
  if (typeof text == "string") {
    text = Object.entries({
      "[åä]": "a",
      ö: "o",
      "\\W+": "-",
    }).reduce(
      (accumulator, [regex, repl]) => accumulator.replace(new RegExp(regex, "gi"), repl),
      text
    )
    return encodeURIComponent(text.toLowerCase().trim())
  }
  return ""
}

function searchCategory(text) {
  if (typeof text == "string")
    text = Object.entries({
      restavfall: "brännbart",
      pappersförpackning: "kartong",
      wellpapp: "kartong",
    }).reduce(
      (accumulator, [regex, repl]) => accumulator.replace(new RegExp(regex, "gi"), repl),
      text
    )
  for (const cat of allCategories) {
    if (text.toLowerCase().includes(cat.name.toLowerCase())) {
      return { name: cat.name, slug: cat.slug }
    }
  }
  return {}
}

async function fetchRambo(query) {
  const toEntry = (inst) => {
    let cat =
      searchCategory(inst.category) ||
      searchCategory(inst.title) ||
      searchCategory(inst.description)
    cat =
      cat?.name && cat?.slug
        ? { slug: cat.slug, text: `Sorteras som ${cat.name}` }
        : { slug: "", text: inst.category }
    return {
      name: inst.title,
      slug: slugify(inst.title),
      category: cat,
      text: inst.description,
      link: `https://www.rambo.se/?s=${encodeURIComponent(inst.title)}`,
      service: resources.find((e) => e.name == "Rambo.se"),
    }
  }

  const response = await fetch("https://www.rambo.se/wp-admin/admin-ajax.php", {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0",
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en,en-US;q=0.8,sv-SE;q=0.5,sv;q=0.3",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
    },
    referrer: "https://www.rambo.se/privat/sorteringsguide/",
    body: `action=get_garbage&s=${encodeURIComponent(query)}`,
    method: "POST",
    mode: "cors",
  })
  const rawdata = await response.json()
  let data = rawdata.data

  return data.map(toEntry)
}

async function fetchSopor(query) {
  const response = await fetch(
    `https://www.sopor.nu/haer-aatervinner-du/soek/?q=${encodeURIComponent(query)}`,
    {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en,en-US;q=0.8,sv-SE;q=0.5,sv;q=0.3",
        "Upgrade-Insecure-Requests": "1",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
      referrer: `https://www.sopor.nu/haer-aatervinner-du/soek/?q=${encodeURIComponent(query)}`,
      method: "GET",
      mode: "cors",
    }
  )
  const htmlText = await response.text()
  const dom = new jsdom.JSDOM(htmlText)
  const htmlDoc = dom.window.document

  return Array.from(htmlDoc.querySelectorAll("span"))
    .filter((el) => el.textContent.trim() === "Menade du:")
    .map((hit) => {
      const catNode = hit?.parentElement?.parentElement?.nextElementSibling
      const [catTitle, catText] = Array.from(
        catNode.firstElementChild.querySelectorAll("span")
      ).map((e) => e.textContent)
      const name = hit.nextElementSibling.textContent
      let cat = searchCategory(catTitle)
      cat =
        cat?.name && cat?.slug
          ? { slug: cat.slug, text: `Sorteras som ${cat.name}` }
          : { slug: "", text: `Sorteras som ${catTitle}` }

      const table = Array.from(catNode.childNodes).filter((e) => e.tagName)
      const where = table[1].querySelector("span").textContent
      const recycling = table[2].querySelectorAll("span")[1].textContent

      return {
        name: name,
        slug: slugify(name),
        category: cat,
        text: `${catText}\nVar: ${where}\nBehandling: ${recycling}`,
        link: `https://www.sopor.nu/haer-aatervinner-du/soek/?q=${encodeURIComponent(name)}`,
        service: resources.find((e) => e.name == "Sopor.nu"),
      }
    })
}

async function fetchSopkoll(query) {
  const response = await fetch(
    `https://sopkollen.se/index.php?sida=sok&q=${encodeURIComponent(query)}`,
    {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en,en-US;q=0.8,sv-SE;q=0.5,sv;q=0.3",
        "Upgrade-Insecure-Requests": "1",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
      referrer: "https://sopkollen.se/",
      method: "GET",
      mode: "cors",
    }
  )
  const htmlText = await response.text()
  const dom = new jsdom.JSDOM(htmlText)
  const htmlDoc = dom.window.document

  return Array.from(htmlDoc.querySelector(".sok > .list-group")?.childNodes || []).map((hit) => {
    const name = hit.querySelector("h4").textContent
    const catTitle = hit.querySelector("p").textContent
    let cat = searchCategory(catTitle)
    cat =
      cat?.name && cat?.slug
        ? { slug: cat.slug, text: `Sorteras som ${cat.name}` }
        : { slug: "", text: catTitle }
    const service = resources.find((e) => e.name == "Sopkollen")
    return {
      name: name,
      slug: slugify(name),
      category: cat,
      text: "",
      link: new URL(hit.href, service.link),
      service: service,
    }
  })
}

async function fetchFTI(query) {
  const response = await fetch("https://sortguide.ftiab.se/", {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en,en-US;q=0.8,sv-SE;q=0.5,sv;q=0.3",
      "Upgrade-Insecure-Requests": "1",
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
    },
    method: "GET",
    mode: "cors",
  })
  const htmlText = await response.text()
  const dom = new jsdom.JSDOM(htmlText, { runScripts: "dangerously" })
  let db = dom.window.sortingItems?.items ?? []

  return db
    .filter(
      (elem) =>
        elem.title.toLowerCase().includes(query.toLowerCase()) ||
        (elem.synonyms?.length ? elem.synonyms.join(" ").toLowerCase().includes(query) : false)
    )
    .map((elem) => {
      let cat = searchCategory(elem.type ?? "") || searchCategory(elem.title ?? "")
      cat =
        cat?.name && cat?.slug
          ? { slug: cat.slug, text: `Sorteras som ${cat.name}` }
          : { slug: "", text: `Sorteras som ${elem.type}` }

      return {
        name: elem.title,
        slug: slugify(elem.title),
        category: cat,
        text: elem.description ?? "",
        link: "https://sortguide.ftiab.se/",
        service: resources.find((e) => e.name == "Förpacknings & tidnings insamlingen"),
      }
    })
}

export default async function handler(req, res) {
  console.log(`Request: ${req.method} ${req.url}`)

  const query = new URLSearchParams(req.query).get("q") ?? ""
  console.log(`Search query: ${query}`)

  const ramboData = await fetchRambo(query)
  const soporData = await fetchSopor(query)
  const sopkollData = await fetchSopkoll(query)
  const FTIData = await fetchFTI(query)

  let data = ramboData.concat(soporData).concat(sopkollData).concat(FTIData)
  data.sort((a, b) => {
    let included
    if (a.name.toLowerCase().includes(query) || b.name.toLowerCase().includes(query)) included = 1
    const aDist = new Levenshtein(a.name.toLowerCase(), query)
    const bDist = new Levenshtein(b.name.toLowerCase(), query)
    return aDist - bDist + included
  })

  res.status(200).json(data)
}
