import Layout from "components/Layout"
import Image from "next/image"
import { categories, homeCategories } from "../categories"

const Sorteringsguide = () => (
  <Layout title="Släng rätt - Sorteringsguide">
    <main>
      <section className="max-w-5xl p-4 mx-auto space-y-6 text-white md:py-36">
        <article className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
          <div>
            <h1 className="text-3xl font-semibold tracking-wide">Källsortera hemma</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quod iure, consequatur
              quasi fugiat neque a perferendis esse quidem tempora quaerat dolorem dolorum vel.
              Dolore laborum amet error dolores rerum necessitatibus vero, officiis debitis rem
              voluptates. Eveniet laboriosam fugit, placeat eos repellat at, architecto temporibus
              praesentium deleniti provident, quasi dolore.
            </p>
          </div>
          <div className="flex space-x-3">
            {homeCategories.map((elem) => (
              <div className="flex flex-col overflow-hidden text-gray-900 bg-white rounded-lg shadow-md justify-evenly">
                <Image
                  className="object-cover"
                  src={elem.image.url}
                  width={elem.image.width}
                  height={elem.image.height}
                  alt=""
                />
                <div className="text-lg text-center">{elem.name}</div>
              </div>
            ))}
          </div>
        </article>
        <article>
          <h1 className="text-3xl font-semibold tracking-wide">Lämna på återvinningsstation</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quod iure, consequatur
            quasi fugiat neque a perferendis esse quidem tempora quaerat dolorem dolorum vel. Dolore
            laborum amet error dolores rerum necessitatibus vero, officiis debitis rem voluptates.
            Eveniet laboriosam fugit, placeat eos repellat at, architecto temporibus praesentium
            deleniti provident, quasi dolore.
          </p>
        </article>
      </section>
      <section className="flex flex-col">
        <a href="#kategorier">
          <h1 className="text-5xl font-bold text-center text-white font-display">Kategorier</h1>
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
        <div className="flex flex-col max-w-full bg-white" id="kategorier">
          {categories.map((elem, index) => (
            <div
              className={`flex flex-col justify-between items-center ${
                index % 2 ? "bg-green-50 sm:flex-row-reverse" : "bg-white sm:flex-row"
              }`}
              id={elem.slug}
              key={elem.slug}
            >
              <Image
                src={elem.imageUrl}
                alt=""
                width={960}
                height={720}
                className="flex-auto object-cover w-full"
              />
              <div className="flex-auto p-12 md:p-24">
                {elem?.icon && (
                  <div className="box-content w-8 h-8 p-3 mb-4 text-white rounded-full bg-primary">
                    {elem.icon}
                  </div>
                )}

                <h2>{elem.name}</h2>
                <p>{elem.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  </Layout>
)

export default Sorteringsguide
