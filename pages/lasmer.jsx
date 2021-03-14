import Layout from "components/Layout"
import { resources } from "data/external"

const Läsmer = () => (
  <Layout title="Släng rätt - Lär dig mer">
    <main className="max-w-6xl px-4 my-6 space-y-6 text-white">
      <section id="resurser">
        <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">Resurser</h1>
        <p>
          Om du behöver slänga avfall utöver det som listas på denna sida finns det många bra
          resurser som även ger tips och råd kring avfall utanför hushållet och utöver
          privatpersoner.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          {resources.map((elem) => (
            <a
              key={elem.name}
              href={elem.link}
              target="_blank"
              rel="noopener"
              className="flex-1 text-center"
            >
              <img
                src={elem.imageUrl}
                alt=""
                className="object-contain h-32 mx-auto opacity-90"
                style={{
                  filter: "grayscale(100%) brightness(0) invert(100%)",
                }}
              />
              <div className="mt-2 italic">{elem.text}</div>
            </a>
          ))}
        </div>
      </section>
      <section id="omsidan">
        <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">Om hemsidan</h1>
        <p>
          Vi är en hemsida som hoppas kunna underlätta din vardag genom att ge konkreta tips och råd
          kring källsortering och hur du enkelt kan integrera det i din vardag. Informationen är
          till för att vara en samlad resurs där den
        </p>
      </section>
      <section id="uppkomst">
        <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">Hur sidan blev till</h1>
        <p>
          Vi är en hemsida som hoppas kunna underlätta din vardag genom att enkelt ge tips och råd
          kring källsortering och hur du smärtfritt kan integrera det i din vardag. Vi fungerar över
          hela sverige, det gör inte konkurenterna, de är gjorda för specifika kommuner
        </p>
      </section>
      <section id="kontakt">
        <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">Kontakt</h1>
        <p>
          Vi är en hemsida som hoppas kunna underlätta din vardag genom att enkelt ge tips och råd
          kring källsortering och hur du smärtfritt kan integrera det i din vardag.
        </p>
      </section>
    </main>
  </Layout>
)

export default Läsmer
