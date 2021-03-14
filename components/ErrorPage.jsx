import Link from "next/link"

const ErrorPage = ({ image, title, children }) => (
  <div className="grid max-w-xl md:flex-1 place-items-center">
    <section className="px-4 py-8 text-center">
      <img className="mb-8" src={image} alt="" />
      <h2 className="mb-2 text-5xl font-semibold text-white font-heading">{title}</h2>
      <p className="mb-6 text-gray-100">{children}</p>
      <div className="flex flex-col justify-center sm:flex-row">
        <Link href="/">
          <a className="px-4 text-indigo-600 hover:underline">Tillbaka till startsidan</a>
        </Link>
        <a
          className="px-4 text-indigo-600 cursor-pointer hover:underline"
          onClick={() => history.back()}
        >
          Till föregående sida
        </a>
      </div>
    </section>
  </div>
)

export default ErrorPage
