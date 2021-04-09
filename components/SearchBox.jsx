import { Fragment, useEffect, useRef, useState } from "react"
import { categories, homeCategories } from "data/categories"
const allCategories = categories.concat(homeCategories)
import axios from "axios"

const htmlDecode = (input) => {
  var doc = new DOMParser().parseFromString(input, "text/html")
  return doc.documentElement.textContent
}

const SearchBox = () => {
  const [searchQuery, setQuery] = useState("")
  const [cancelToken, setCancel] = useState(null)
  const [searchResults, setResults] = useState([])
  const [status, setStatus] = useState({
    error: null,
    loading: false,
  })

  useEffect(() => {
    if (searchQuery.length) {
      setResults([])
      fetchResults(searchQuery)
    }
  }, [searchQuery])

  const handleSearch = (event) => {
    const input = event.target.value
    if (input.length) {
      setStatus({ loading: true, error: null })
      setQuery(input)
    } else {
      setStatus({ loading: false, error: null })
    }
  }

  const fetchResults = (query) => {
    if (cancelToken) cancelToken.cancel()
    let source = axios.CancelToken.source()
    setCancel(source)

    axios
      .get(`/api/search?q=${encodeURI(query)}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        if (!res.data.length) {
          setStatus({ loading: false, error: "Sökningen gav inga resultat." })
        } else {
          setStatus({ loading: false, error: null })
          setResults(res.data)
        }
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          setStatus({
            loading: false,
            error: "Kunde inte hämta några sökresultat. Kontrollera internetanslutningen.",
          })
        }
      })
  }

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
          onInput={handleSearch}
          onFocus={(e) => {
            if (e.target.value != searchQuery) handleSearch(e)
          }}
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

      {searchResults.length ? (
        <ol id="results" className="p-4 space-y-2">
          {searchResults.map(({ name, slug, category, text, service, link = "" }, index) => {
            const icon = allCategories.find((elem) => elem.slug == category.slug)?.icon
            return (
              <li key={slug + index}>
                <div className="flex flex-col p-4 space-x-3 rounded sm:flex-row hover:bg-gray-100 focus:bg-gray-100">
                  <div className="flex flex-col flex-1">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="mb-0.5">
                      <h2 className="font-semibold tracking-wide break-all sm:text-3xl hover:underline">
                        {name}
                      </h2>
                    </a>
                    {category?.text && (
                      <a
                        className="flex items-center mb-2 hover:underline"
                        href={category?.slug ? `/sorteringsguide#${category.slug}` : link}
                        target={category?.slug ? undefined : "_blank"}
                        rel={category?.slug ? undefined : "noopener noreferrer"}
                      >
                        <div className="text-lg text-gray-600">{htmlDecode(category.text)}</div>
                        {icon && (
                          <div className="ml-2 box-content w-5 h-5 p-1.5 text-white rounded-full bg-primary shadow">
                            {icon}
                          </div>
                        )}
                      </a>
                    )}
                    {text && (
                      <p className="no-underline overflow-ellipsis line-clamp-3">
                        {text.split("\n").map((item, i) => (
                          <Fragment key={item + i}>
                            {item}
                            <br />
                          </Fragment>
                        ))}
                      </p>
                    )}
                  </div>

                  <div>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center h-full space-y-2 sm:w-32 link"
                    >
                      <img
                        className="hidden sm:block"
                        src={service.imageUrl}
                        alt=""
                        style={{ filter: "grayscale(100%) brightness(0)" }}
                      />
                      {service?.name && <div className="text-center external">{service.name}</div>}
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      ) : (
        status.error && <div className="p-8 text-lg text-center text-gray-600">{status.error}</div>
      )}
    </div>
  )
}

export default SearchBox
