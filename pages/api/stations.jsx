export default async function handler(req, res) {
  console.log(`Request: ${req.method} ${req.url}`)

  const id = new URLSearchParams(req.query).get("id") ?? ""

  // fetch("https://webapp.ftiab.se/Code/Ajax/StationHandler.aspx/GetStationsByMunicipality", {
  //   method: "POST",
  //   body: JSON.stringify({ municipalityId: id.toString() }),
  // })
  const response = await fetch(
    "https://webapp.ftiab.se/Code/Ajax/StationHandler.aspx/GetStationsByMunicipality",
    {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en,en-US;q=0.8,sv-SE;q=0.5,sv;q=0.3",
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
      referrer: "https://webapp.ftiab.se/Find/Stations.aspx",
      body: JSON.stringify({ municipalityId: id.toString() }),
      method: "POST",
      mode: "cors",
    }
  )
  const data = await response.json()
  const stations = JSON.parse(data["d"])

  // console.log(stations)
  await res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
  await res.status(200).json(stations)
}
