import Link from "next/link"
import Layout from "components/Layout"

const NotFound = () => (
  <Layout title="Släng rätt - Sidan är nere">
    <div className="min-h-full grid place-items-center">
      <section className="py-8 px-4 text-center">
        <div className="max-w-auto md:max-w-lg mx-auto">
          <img className="mb-8" src="/server_down.svg" alt="" />
          <h2 className="text-5xl mb-2 font-semibold font-heading">Sidan verkar vara nere</h2>
          <p className="mb-6 text-gray-400">
            Ett kritiskt serverfel har inträffat och det går inte att nå sidan..
          </p>
          <div>
            <Link href="/">
              <a className="px-4 text-indigo-600 hover:underline">Tillbaka till startsidan</a>
            </Link>
            <a
              className="px-4 text-indigo-600 hover:underline cursor-pointer"
              onClick={() => history.back()}
            >
              Till föregående sida
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFound
