import Layout from "components/Layout"

const Sorteringsstationer = () => (
  <Layout title="Släng rätt - Sorteringsstationer">
    <main className="flex flex-col w-full max-w-6xl px-4 mt-6 text-white h-screen-3/4 sm:h-screen-2/3 md:h-screen-5/6">
      <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">
        Sorterings&shy;stationer nära dig
      </h1>
      <p className="mb-2">Klicka på markörerna för att se adress och vägbeskrivning. </p>
      <div className="h-full bg-white rounded shadow-lg md:my-6 md:p-6">
        <iframe
          scrolling="no"
          className="w-full h-full"
          src={"https://www.google.com/maps?q=Recycling+center&output=embed"}
          frameBorder="0"
        ></iframe>
      </div>
      <p className="mt-4">
        Saknas någon sorteringsstation?
        <br />
        <a
          href="https://ftiab.se/173.html"
          target="_blank"
          rel="noopener"
          className="link external"
        >
          Se en komplett lista för din kommun med information om tömning
        </a>
      </p>
    </main>
  </Layout>
)

export default Sorteringsstationer
