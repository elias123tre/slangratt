import React, { useState } from "react"
import Layout from "components/Layout"
import Station from "components/Station"
import { municipalities } from "data/stations"
import { categories } from "data/categories"

const icons = {}
for (const cat of categories) {
  icons[cat.name] = React.cloneElement(cat.icon, null, <title>{cat.name}</title>, cat.icon)
}

const Sorteringsstationer = () => {
  const [stations, setStations] = useState([])

  return (
    <Layout title="Släng rätt - Sorteringsstationer">
      <main className="flex flex-col w-full max-w-6xl px-4 mt-6 text-white sm:min-h-screen-2/3 md:min-h-screen-5/6">
        <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl" id="naramig">
          Sorterings&shy;stationer nära dig
        </h1>
        <p className="mb-2">
          Klicka på markörerna för att se adress och vägbeskrivning. Endast de närmaste
          sorteringsstationerna visas på denna karta.
          <br />
          <a
            href="https://maps.google.com/?q=Recycling%20center"
            className="link external"
            target="_blank"
            rel="noopener"
          >
            Se alla sorteringsstationer i helskärm
          </a>
        </p>

        <div className="flex flex-col mb-4 space-y-4 sm:space-y-0 sm:flex-row sm:h-5/6">
          <div className="flex-1 bg-white rounded shadow-lg md:p-6">
            <iframe
              scrolling="no"
              className="w-full min-h-screen-1/2 sm:h-full"
              src={"https://www.google.com/maps?q=Recycling+center&z=14&output=embed"}
              frameBorder="0"
            ></iframe>
          </div>

          <aside className="flex flex-col w-full overflow-visible max-h-screen-2/3 sm:h-auto sm:px-4 sm:max-w-sm">
            <label htmlFor="municipality">
              <h2 className="text-xl font-semibold tracking-wide">Stationer i din kommun</h2>
            </label>
            <select
              className="block w-full mb-1 text-primary-darker"
              id="municipality"
              defaultValue="Välj kommun"
              onChange={async (e) => {
                setStations(null)
                const response = await fetch(
                  `/api/stations?id=${encodeURIComponent(e.target.value)}`
                )
                const newStations = await response.json()
                setStations(newStations)
              }}
            >
              <option value="" hidden>
                Välj kommun
              </option>
              {municipalities.map((elem) => (
                <option value={elem.value} key={elem.value}>
                  {elem.text}
                </option>
              ))}
            </select>
            <a
              href="https://ftiab.se/173.html"
              target="_blank"
              rel="noopener"
              className="mb-1 link external"
            >
              Min kommun finns inte med
            </a>

            <div className="flex-1 p-1 pr-2 space-y-2 overflow-y-auto">
              {stations === null ? (
                <svg
                  className="w-6 h-6 mx-auto text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth={4}
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                stations.map((elem) => <Station elem={elem} icons={icons} key={elem.Id} />)
              )}
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default Sorteringsstationer
