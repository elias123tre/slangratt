import { useEffect, useRef, useState } from "react"
import { categories, homeCategories } from "data/categories"
const allCategories = categories.concat(homeCategories)

const SearchBox = () => {
  const searchRef = useRef()

  const [status, setStatus] = useState({
    error: false,
    loading: false,
  })
  const [searchResults, setResults] = useState(null)
  const search = async () => {
    setStatus({
      error: false,
      loading: true,
    })
    let target = searchRef.current
    if (target.value.trim() && target.value.length >= 1) {
      try {
        const response = await fetch(`/api/search?q=${encodeURI(target.value)}`).catch((err) => {
          err.category = "nätverksfel"
          throw err
        })
        const data = await response.json().catch((err) => {
          err.category = "svarsfel"
          throw err
        })
        if (target.value.length >= 2) {
          setStatus({ error: false, loading: false })
          return setResults(data)
        }
      } catch (err) {
        console.error(`${err?.category ?? "Fel"} vid sökning:`)
        console.error(err)
        setStatus({ error: err, loading: false })
        return setResults(null)
      }
    }
    setStatus({ error: false, loading: false })
    return setResults(null)
  }
  useEffect(() => {
    search()
    window.addEventListener("load", search)
    return () => window.removeEventListener("load", search)
  }, [])

  return (
    <div className="flex-1 bg-white rounded-3xl">
      <form
        action="/search"
        method="GET"
        className="flex items-center justify-between overflow-hidden transition duration-200 bg-white border border-gray-100 shadow dark:bg-gray-700 dark:border-gray-800 rounded-3xl focus-within:shadow-lg"
        onSubmit={(e) => {
          e.preventDefault()
          return false
        }}
      >
        <input
          className="w-full px-5 py-3 text-lg border-none outline-none appearance-none ring-0 focus:ring-0 focus:outline-none"
          type="search"
          name="q"
          id="q"
          placeholder="Hur slänger man..."
          autoComplete="off"
          ref={searchRef}
          onInput={search}
        />
        <button
          type="submit"
          className="px-4 py-1 text-gray-600 focus:outline-none focus:shadow-outline"
          aria-label="Sök"
        >
          {status.loading ? (
            <svg
              className="mx-auto w-7 h-7 animate-spin text-primary"
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
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          )}
        </button>
      </form>

      {searchResults?.length ? (
        <ol id="results" className="p-4 space-y-2">
          {searchResults.map(({ name, slug, category, text, service, link = "" }) => {
            const icon = allCategories.find((elem) => elem.slug == category.slug)?.icon
            return (
              <li key={slug}>
                <div className="flex p-4 space-x-3 rounded hover:bg-gray-100 focus:bg-gray-100">
                  <div className="flex flex-col flex-1">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="mb-0.5">
                      <h2 className="font-semibold tracking-wide break-all sm:text-3xl hover:underline">
                        {name}
                      </h2>
                    </a>
                    {category?.text && (
                      <a
                        className="flex items-center mb-2 hover:underline"
                        href={
                          category?.slug
                            ? `/sorteringsguide#${category.slug}`
                            : "https://www.rambo.se/privat/sorteringsguide/"
                        }
                      >
                        <div className="text-lg text-gray-600">{category.text}</div>
                        {icon && (
                          <div className="ml-2 box-content w-5 h-5 p-1.5 text-white rounded-full bg-primary shadow">
                            {icon}
                          </div>
                        )}
                      </a>
                    )}
                    <p className="no-underline overflow-ellipsis line-clamp-3">{text}</p>
                  </div>

                  <div>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-between h-full link"
                    >
                      <img className="w-32" src="/page_not_found.svg" alt="" />
                      {service?.title && <div className="external">{service.title}</div>}
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      ) : (
        (status.error || searchResults?.length === 0) && (
          <div className="p-8 text-lg text-center text-gray-600">
            {status.error
              ? `Ett ${status.error?.category ?? "fel"} uppstod när sökningen skulle göras: ${
                  status.error.message
                }`
              : searchResults?.length === 0 && "Sökningen gav inga resultat"}
          </div>
        )
      )}
    </div>
  )
}

export default SearchBox
