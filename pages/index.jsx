import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"

const InfoBox = ({ href, children, bgClass, bgImage = "", ...props }) => (
  <Link href={href}>
    <a
      className={`infobox no-underline hover:shadow-xl ${bgClass && !bgImage ? bgClass : ""}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      {...props}
    >
      <span className="z-10">{children}</span>
    </a>
  </Link>
)

const Home = () => {
  const [searchResults, setResults] = useState([])
  const search = async (e) => {
    e.preventDefault()
    if (e.target.value.trim() && e.target.value.length > 2) {
      const response = await fetch(`/api/search?q=${encodeURI(e.target.value)}`)
      const data = await response.json()
      setResults(data)
    } else {
      setResults([])
    }
  }

  return (
    <Layout title="Släng rätt!">
      <main className="max-w-5xl px-4 mx-auto flex-1 dark:text-white" id="main">
        <div
          className="p-2 flex justify-center items-center space-x-1 absolute right-4 -mt-3 shadow bg-white text-gray-800 dark:bg-gray-800 dark:text-white rounded-full"
          id="themeswitcher"
        >
          <button id="light">
            <i className="material-icons h-full">wb_sunny</i>
          </button>
          <button id="auto">
            <i className="material-icons h-full">brightness_auto</i>
          </button>
          <button id="dark">
            <i className="material-icons h-full">brightness_2</i>
          </button>
        </div>

        <div className="mx-auto">
          <section className="mx-auto overflow-hidden transition-height duration-500" id="jumbo">
            <div className="md:p-12 grid place-items-center">
              <h1 className="my-6 p-2 text-5xl md:text-6xl text-center font-black tracking-wider uppercase italic text-gray-100">
                {/* text-gradient */}
                Släng skräpet i rätt kärl!
              </h1>
            </div>
            <div className="mb-6 md:mb-16 flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-y-0">
              <InfoBox href="/sorteringsguide#kompost" bgClass="bg-kompost">
                Kompost
              </InfoBox>
              <InfoBox href="/sorteringsguide#grovsopor" bgClass="bg-grovsopor">
                Grovsopor
              </InfoBox>
              <InfoBox href="/sorteringsguide#plast" bgClass="bg-plast">
                Plast
              </InfoBox>
              <InfoBox href="/sorteringsguide#förpackningar" bgClass="bg-forpackning">
                Förpackningar
              </InfoBox>
            </div>
          </section>

          <section>
            <h1 className="font-semibold text-3xl text-gray-100">
              <label for="q" className="cursor-auto">
                Vad vill du slänga?
              </label>
            </h1>

            <div className="bg-white rounded-3xl">
              <form
                action="/search"
                method="GET"
                className="flex justify-between items-center dark:bg-gray-700 bg-white border dark:border-gray-800 border-gray-100 rounded-3xl transition duration-200 shadow focus-within:shadow-lg overflow-hidden"
              >
                <input
                  className="appearance-none w-full py-3 px-5 text-lg focus:outline-none focus-whithin:ring"
                  type="search"
                  name="q"
                  id="q"
                  placeholder="Hur slänger man..."
                  onInput={search}
                />
                <button
                  type="submit"
                  className="py-1 px-4 focus:outline-none focus:shadow-outline text-gray-600"
                >
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
                </button>
              </form>

              {searchResults.length ? (
                <ul id="results" className="p-4">
                  {searchResults.map((res, index) => (
                    <li key={index}>
                      <a
                        href={`/slang/${res.slug || ""}`}
                        className="grid grid-flow-col grid-cols-3 max-h-64 p-4 hover:bg-gray-100 focus:bg-gray-100 rounded group"
                      >
                        <div className="mr-4 col-span-2">
                          <h2 className="font-semibold text-3xl tracking-wide group-hover:underline">
                            {res.name}
                          </h2>
                          <p className="no-underline overflow-ellipsis">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                            quae eligendi totam magnam quisquam saepe beatae voluptatibus cumque
                            sit, numquam ut nihil accusamus culpa deserunt tempora dolores sequi
                            dolor nobis?
                          </p>
                        </div>
                        <img className="h-full" src="/page_not_found.svg" alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          </section>
          {/* <h1 className="uppercase font-black tracking-wider dark:text-gray-200 text-gray-800 line-top">
            Sökresultat
          </h1> */}
          {/* <button className="btn green-gradient mt-4">Press me!</button> */}
        </div>
      </main>
    </Layout>
  )
}

export default Home
