import { categories, homeCategories } from "data/categories"

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
function searchLink(category) {
  return ""
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
    const link = searchLink(cat)
    return {
      name: inst.title,
      slug: slugify(inst.title),
      category: cat,
      text: inst.description,
      link: `https://www.rambo.se/privat/sorteringsguide/${link}`,
      service: { title: "Rambo.se", link: "https://www.rambo.se", image: "" },
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

export default async function handler(req, res) {
  console.log(`Request: ${req.method} ${req.url}`)

  const query = new URLSearchParams(req.query).get("q") ?? ""
  console.log(`Search query: ${query}`)

  const data = await fetchRambo(query)

  res.status(200).json(data)

  // let filtered = sorting.filter((entry) => entry.name.toLowerCase().includes(query.toLowerCase()))
  // res.status(200).json(filtered)
}
