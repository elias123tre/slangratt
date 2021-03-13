import Layout from "components/Layout"

const Sorteringsstationer = () => (
  <Layout title="Släng rätt - Sorteringsstationer">
    <div className="flex flex-col max-w-6xl mx-auto mt-6 h-screen-3/4 sm:h-screen-2/3 md:h-screen-5/6">
      <h1 className="px-4 text-3xl font-semibold tracking-wide text-white sm:text-4xl">
        Sorterings&shy;stationer
      </h1>
      <div className="h-full bg-white rounded shadow-lg md:my-6 md:p-6">
        <iframe
          scrolling="no"
          className="w-full h-full"
          src="https://www.google.com/maps?q=Recycling+center&output=embed"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default Sorteringsstationer
