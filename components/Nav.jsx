import Link from "next/link"
import ActiveLink from "./ActiveLink"

const Nav = ({ refrence }) => (
  <header className="sticky top-0 z-50 flex items-center justify-between w-full p-4 bg-white shadow-lg dark:bg-gray-800 md:space-x-4">
    <Link href="/">
      <a className="inline-flex items-center text-3xl font-semibold text-gray-800 transition dark:text-white duration-400 hover:underline">
        <svg
          className="mr-2 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <span className="whitespace-nowrap">Släng rätt</span>
      </a>
    </Link>
    <nav
      className="fixed bottom-0 left-0 z-50 flex flex-row items-center justify-around flex-1 w-full bg-white shadow keyboard:hidden sm:px-3 sm:py-3 md:py-0 md:justify-center md:space-x-4 dark:bg-gray-800 md:bg-transparent md:static md:shadow-none"
      id="menu"
      ref={refrence}
    >
      <ActiveLink activeClassName="active" href="/">
        <a className="navbtn">
          <i className="block material-icons md:hidden">home</i>
          <span>Hem</span>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/sorteringsguide">
        <a className="navbtn">
          <i className="block material-icons md:hidden">help</i>
          <span className="hidden md:block">Sorteringsguide</span>
          <span className="block md:hidden">Hur</span>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/sorteringsstationer">
        <a className="navbtn">
          <i className="block material-icons md:hidden">map</i>
          <span className="hidden md:block">Hitta sorteringsstation</span>
          <span className="block md:hidden">Var</span>
        </a>
      </ActiveLink>
    </nav>

    <ActiveLink activeClassName="" href="/lasmer">
      <a className="leading-5 rounded-full btn green-gradient">Fler resurser</a>
    </ActiveLink>

    <script>
      {/* function scaleFooter() {$("#footer").css("margin-bottom", $("#menu").outerHeight())}
              $(document).ready(scaleFooter) $(window).resize(scaleFooter) scaleFooter() */}
    </script>
  </header>
)

export default Nav
