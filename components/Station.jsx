import React, { useState } from "react"

const Station = ({ elem, icons }) => {
  const [info, setInfo] = useState("")

  return (
    <button
      key={elem.Id}
      className="cursor-pointer block text-left w-full p-1.5 bg-white rounded-sm shadow-lg text-primary-darker focus:outline-none"
      onClick={async (e) => {
        setInfo(null)
        const response = await fetch(`/api/station?id=${encodeURIComponent(elem.Id)}`)
        const locationInfo = await response.json()

        setInfo(locationInfo)
      }}
    >
      <div className="">{elem.Name}</div>
      <div className="flex items-center justify-between space-x-2">
        <address className="text-sm text-gray-400">
          <div className="break-all">{elem.Address}</div>
          <div>{elem.City}</div>
        </address>

        <div className="flex items-center p-1 space-x-0.5 text-white rounded-full bg-primary">
          {elem.Types.map((cat) => {
            const icon = icons[cat]
            if (icon)
              return React.cloneElement(icon, {
                className: "h-4 w-4",
                key: cat,
              })
          })}
        </div>
      </div>
      {info === null ? (
        <svg
          className="w-6 h-6 mx-auto animate-spin text-primary"
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
        info && (
          <>
            <hr className="my-1" />
            <div className="space-y-1 leading-tight">
              {[
                { name: "Städning", key: "Cleaning" },
                { name: "Färgat glas", key: "ColoredGlass" },
                { name: "Ofärgat glas", key: "Glass" },
                { name: "Kartong", key: "Carton" },
                { name: "Metall", key: "Metal" },
                { name: "Plast", key: "Plastic" },
                { name: "Tidningar", key: "Papers" },
              ].map((cat) => (
                <div className="flex justify-between" key={cat.key}>
                  <span className="flex-1">{cat.name}:</span>
                  <span className="flex items-center space-x-1">
                    <span>{info[`Last${cat.key}`]}</span>
                    <span>{" 🠖 "}</span>
                    <span>{info[`Next${cat.key}`]}</span>
                  </span>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </button>
  )
}

export default Station
