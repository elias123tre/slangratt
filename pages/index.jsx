import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import { categories } from "../categories"

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
  const search = async (event) => {
    event.preventDefault()
    if (event.target.value.trim() && event.target.value.length >= 1) {
      const response = await fetch(`/api/search?q=${encodeURI(event.target.value)}`)
      const data = await response.json()
      if (event.target.value.length >= 2) {
        return setResults(data)
      }
    }
    return setResults([])
  }

  return (
    <Layout title="Släng rätt!">
      <main className="flex-1 max-w-5xl px-4 mx-auto my-8 dark:text-white" id="main">
        {/* <div
          className="absolute flex items-center justify-center p-2 -mt-3 space-x-1 text-gray-800 bg-white rounded-full shadow right-4 dark:bg-gray-800 dark:text-white"
          id="themeswitcher"
        >
          <button id="light">
            <i className="h-full material-icons">wb_sunny</i>
          </button>
          <button id="auto">
            <i className="h-full material-icons">brightness_auto</i>
          </button>
          <button id="dark">
            <i className="h-full material-icons">brightness_2</i>
          </button>
        </div> */}

        <div className="mx-auto">
          <section
            className="mx-auto overflow-hidden text-center text-gray-100 duration-500 transition-height"
            id="jumbo"
          >
            <div className="grid md:p-12 place-items-center">
              <h1 className="p-2 mb-6 text-5xl italic font-black tracking-wider uppercase md:mt-6 md:text-6xl">
                {/* text-gradient */}
                Släng skräpet i rätt kärl!
              </h1>
              <p className="mb-6 text-lg max-w-prose">
                Det ska vara enkelt att hjälpa miljön. Läs mer om hur man{" "}
                <Link href="/sorteringsguide">
                  <a className="text-blue-400 link">källsorterar</a>
                </Link>{" "}
                de olika avfallen nedan. Hitta också din närmaste{" "}
                <Link href="/sorteringsstationer">
                  <a className="text-blue-400 link">sorteringsstation</a>
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col items-center justify-around mb-6 space-y-6 lg:space-x-3 md:mb-16 lg:flex-row lg:space-y-0">
              {categories.map((elem) => (
                <InfoBox
                  href={`/sorteringsguide#${elem.slug}`}
                  bgClass={elem?.bgClass}
                  bgImage={!elem?.bgClass ? elem?.thumbnailUrl : null}
                  key={elem.slug}
                >
                  {elem.name}
                </InfoBox>
              ))}
            </div>
          </section>

          <section>
            <h1 className="text-3xl font-semibold text-gray-100">
              <label htmlFor="q" className="cursor-auto">
                Vad vill du slänga?
              </label>
            </h1>

            <div className="bg-white rounded-3xl">
              <form
                action="/search"
                method="GET"
                className="flex items-center justify-between overflow-hidden transition duration-200 bg-white border border-gray-100 shadow dark:bg-gray-700 dark:border-gray-800 rounded-3xl focus-within:shadow-lg"
              >
                <input
                  className="w-full px-5 py-3 text-lg appearance-none focus:outline-none focus-whithin:ring"
                  type="search"
                  name="q"
                  id="q"
                  placeholder="Hur slänger man..."
                  onInput={search}
                />
                <button
                  type="submit"
                  className="px-4 py-1 text-gray-600 focus:outline-none focus:shadow-outline"
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
                        className="grid grid-flow-col grid-cols-3 p-4 rounded max-h-64 hover:bg-gray-100 focus:bg-gray-100 group"
                      >
                        <div className="col-span-2 mr-4">
                          <h2 className="text-3xl font-semibold tracking-wide group-hover:underline">
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
          {/* <h1 className="font-black tracking-wider text-gray-800 uppercase dark:text-gray-200 line-top">
            Sökresultat
          </h1> */}
          {/* <button className="mt-4 btn green-gradient">Press me!</button> */}
        </div>
      </main>
    </Layout>
  )
}

export default Home
