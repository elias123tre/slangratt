import Layout from "components/Layout"
import Link from "next/link"
import { categories, homeCategories } from "data/categories"

const Sorteringsguide = () => (
  <Layout title="Släng rätt - Sorteringsguide">
    <main className="flex-1 w-full">
      <section className="flex flex-col items-center max-w-4xl gap-12 p-4 mx-auto text-white xl:max-w-5xl xl:gap-32 sm:flex-col lg:py-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:gap-16 sm:flex-row">
            <article className="flex-1">
              <div>
                <h1 className="text-3xl font-semibold tracking-wide">Källsortera hemma</h1>
                <p>
                  Ett av de enklaste sätten att källsortera, och det som folk ofta börjar med, är
                  att separera matavfall. En del lägger matavfallet i en hemkompost på tomten och
                  andra får den hämtad i samband med sophämtningen. Om man verkligen inte vill
                  källsortera mer slänger man resterande avfall i brännbart/restavfall, annars
                  sorterar man hemma och lämnar sedan skräpet på en sorteringsstation.
                </p>
              </div>
            </article>
            <article className="flex-1">
              <h1 className="text-3xl font-semibold tracking-wide">Lämna på sorteringsstation</h1>
              <p>
                Det är mycket enkelt att sortera skräpet i olika kärl och lådor hemma. Därefter kan
                man helt enkelt åka med det till närmaste sorteringsstation. Det är ett enkelt sätt
                att bidra till en hälsosammare miljö och det krävs bara lite betänketid när du
                slänger något, inte så farligt va?
              </p>
              <Link href="/sorteringsstationer">
                <a className="mt-2 text-lg bg-white btn text-primary-darker whitespace-nowrap">
                  Hitta sorteringsstation &rarr;
                </a>
              </Link>
            </article>
          </div>
          <article>
            <h1 className="text-3xl font-semibold tracking-wide">Sophämtning</h1>
            <div className="flex flex-col gap-6 md:gap-16 sm:flex-row">
              {homeCategories.map((elem) => (
                <a
                  className="flex flex-col flex-1 p-3 overflow-hidden text-gray-900 bg-white rounded-lg shadow-md"
                  key={elem.slug}
                  id={elem.slug}
                  href={elem.link}
                  target="_blank"
                  rel="noopener"
                >
                  <img className="object-cover mb-1" src={elem.imageUrl} alt="" />
                  <h2 className="text-lg">{elem.name}</h2>
                  <p className="text-gray-500">{elem.excerpt}</p>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col w-full">
        <a href="#kategorier" className="p-2">
          <h1 className="mb-0 text-4xl font-bold text-center text-white md:text-5xl font-display">
            På sorterings&shy;stationen
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mx-auto text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className="flex flex-col bg-white divide-y-4 divide-primary" id="kategorier">
          {categories.map(({ slug, imageUrl, icon, name, excerpt, link }, index) => (
            <div
              className={`flex flex-col justify-between ${
                index % 2 ? "bg-green-50 sm:flex-row-reverse" : "bg-white sm:flex-row"
              }`}
              id={slug}
              key={slug}
            >
              <img src={imageUrl} alt="" className="flex-shrink-0 object-cover sm:w-1/2" />
              <div className="self-center flex-1 p-8 md:p-24">
                {icon && (
                  <div className="box-content w-8 h-8 p-3 mb-4 text-white rounded-full bg-primary">
                    {icon}
                  </div>
                )}

                <h2>{name}</h2>
                <p>{excerpt}</p>
                <a
                  className="block mt-2 text-lg font-semibold tracking-wide text-primary-darker external-green"
                  href={link}
                  target="_blank"
                  rel="noopener"
                >
                  ❯ Sorteringstips för <span className="lowercase">{name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  </Layout>
)

export default Sorteringsguide
