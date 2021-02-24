import Link from "next/link"
import ActiveLink from "./ActiveLink"

const Nav = () => (
  <header className="p-4 mb-6 flex items-center justify-between shadow-lg dark:bg-gray-800 bg-white sticky top-0 md:space-x-4 z-50">
    <Link href="/">
      <a className="inline-flex items-center text-3xl dark:text-white text-gray-800 font-semibold transition duration-400 hover:underline">
        <svg
          className="h-9 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Papperskorg"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <span className="whitespace-nowrap">Släng rätt</span>
      </a>
    </Link>
    <nav
      className="keyboard:hidden sm:px-3 sm:py-3 md:py-0 flex flex-row justify-around md:justify-center items-center md:space-x-4 flex-1 dark:bg-gray-800 bg-white md:bg-transparent w-full fixed md:static left-0 bottom-0 shadow md:shadow-none z-50"
      id="menu"
    >
      <ActiveLink activeClassName="active" href="/">
        <a className="navbtn">
          <i className="material-icons block md:hidden">home</i>
          <span>Hem</span>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/sorteringsguide">
        <a className="navbtn">
          <i className="material-icons block md:hidden">help</i>
          <span className="hidden md:block">Vart slängs vad?</span>
          <span className="block md:hidden">Hur</span>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/sorteringsstationer">
        <a className="navbtn">
          <i className="material-icons block md:hidden">map</i>
          <span className="hidden md:block">Hitta sorteringsstation</span>
          <span className="block md:hidden">Var</span>
        </a>
      </ActiveLink>
    </nav>

    <ActiveLink activeClassName="" href="/kontakt">
      <a className="btn green-gradient leading-5 rounded-full">Kontakt</a>
    </ActiveLink>

    <script>
      {/* function scaleFooter() {$("#footer").css("margin-bottom", $("#menu").outerHeight())}
              $(document).ready(scaleFooter) $(window).resize(scaleFooter) scaleFooter() */}
    </script>
  </header>
)

export default Nav
