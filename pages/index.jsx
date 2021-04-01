import Layout from "components/Layout"
import Link from "next/link"
import { categories } from "data/categories"
import SearchBox from "components/SearchBox"

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
  return (
    <Layout title="Släng rätt!">
      <main className="flex-1 max-w-5xl px-4 my-8 dark:text-white" id="main">
        <div className="mx-auto">
          <section
            className="mx-auto overflow-hidden text-center text-gray-100 duration-500 transition-height"
            id="jumbo"
          >
            <div className="grid md:p-12 place-items-center">
              <h1 className="p-2 mb-6 text-5xl italic font-black tracking-wider uppercase break-word md:mt-6 md:text-6xl">
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

            <SearchBox />
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
