import Link from "next/link"

const FooterLinks = ({ title, href = "", children, ...props }) => (
  <div className="flex flex-col">
    {href ? (
      <Link href={href}>
        <a className="font-bold text-lg tracking-wide hover:underline" {...props}>
          {title}
        </a>
      </Link>
    ) : (
      <span className="font-bold text-lg tracking-wide" {...props}>
        {title}
      </span>
    )}
    <div className="flex flex-col mt-2 text-gray-600">{children}</div>
  </div>
)

const Foot = () => (
  <>
    <div className="px-12 py-10 mt-8 bg-primary text-white text-xl font-semibold tracking-wide">
      <div className="sm:max-w-3xl mx-auto grid gap-4 sm:grid-flow-col justify-items-start items-center">
        <p>
          Källsortera dina soppor och tänk på miljön!
          <br /> För ett renare Sverige!
        </p>
        <Link href="/sorteringsguide">
          <a className="btn bg-white text-primary-darker text-lg whitespace-nowrap">
            Källsortera &rarr;
          </a>
        </Link>
      </div>
    </div>
    <footer
      className="p-12 dark:bg-gray-700 bg-gray-100 dark:text-gray-100 text-gray-800 md:no-mb"
      id="footer"
      style={{ marginBottom: 0 }}
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
        <FooterLinks title="Hur sorterar man?" href="/sorteringsguide">
          <Link href="/sorteringsguide#kompost">
            <a className="hover:text-gray-900">Kompost</a>
          </Link>
          <Link href="/sorteringsguide#grovsopor">
            <a className="hover:text-gray-900">Grovsoppor</a>
          </Link>
          <Link href="/sorteringsguide#plast">
            <a className="hover:text-gray-900">Plast</a>
          </Link>
          <Link href="/sorteringsguide#förpackningar">
            <a className="hover:text-gray-900">Förpackningar</a>
          </Link>
        </FooterLinks>

        <FooterLinks title="Vart sorterar man?" href="/sorteringsstationer">
          <Link href="/sorteringsstationer">
            <a className="hover:text-gray-900">Sorteringsstationer</a>
          </Link>
          <Link href="/sorteringsstationer">
            <a className="hover:text-gray-900">Återvinningsstationer</a>
          </Link>
          <Link href="/sorteringsstationer">
            <a className="hover:text-gray-900">Sortera hemma</a>
          </Link>
        </FooterLinks>

        <div className="flex flex-col justify-center space-y-4">
          <Link href="/kontakt">
            <a className="link">Kontakta oss</a>
          </Link>
          <span>&copy; Elias Floreteng &amp; Noh Ghareeb</span>
          <div>
            <a
              href="https://github.com/elias123tre/slangratt"
              title="GitHub sida för webbplatsen"
              target="_blank"
            >
              <svg
                className="text-gray-400 hover:text-gray-500 h-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Foot
