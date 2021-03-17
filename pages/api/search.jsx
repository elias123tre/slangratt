// Test data:
const sorting = [
  { name: "Pappersbit", slug: "pappersbit" },
  { name: "Pappersförpackning", slug: "pappersforpackning" },
  { name: "Kartongpapper", slug: "kartongpapper" },
  { name: "Skräp", slug: "skrap" },
]

export default function handler(req, res) {
  console.log(`Request: ${req.method} ${req.url}`)

  const query = new URLSearchParams().get("q") ?? ""
  console.log(`Search query: ${query}`)

  let filtered = sorting.filter((entry) => entry.name.toLowerCase().includes(query.toLowerCase()))

  res.status(200).json(filtered)
}
