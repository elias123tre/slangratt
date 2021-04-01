import Link from "next/link"
import ActiveLink from "./ActiveLink"
import InstallPWA from "components/InstallPWA"

const Nav = ({ refrence }) => (
  <header className="sticky top-0 z-50 flex items-center justify-between w-full p-3 bg-white shadow-lg dark:bg-gray-800 md:space-x-4">
    <Link href="/">
      <a className="inline-flex items-center text-3xl font-semibold text-gray-800 transition dark:text-white duration-400 hover:underline">
        <svg
          className="mr-2 h-9 w-9"
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
          <svg className="w-6 h-6 md:hidden" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          <span>Hem</span>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/sorteringsguide">
        <a className="navbtn">
          <svg className="w-6 h-6 md:hidden" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
            />
          </svg>
          <span className="hidden md:block">Sorteringsguide</span>
          <span className="block md:hidden">Hur</span>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/sorteringsstationer">
        <a className="navbtn">
          <svg className="w-6 h-6 md:hidden" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"
            />
          </svg>
          <span className="hidden md:block">Hitta sorteringsstation</span>
          <span className="block md:hidden">Var</span>
        </a>
      </ActiveLink>
    </nav>

    <div className="flex items-center space-x-2">
      <InstallPWA />
      <ActiveLink activeClassName="" href="/lasmer">
        <a className="leading-5 rounded-full btn bg-gradient-to-r from-[#0fd95c] via-[#00a850] to-[#008a47]">
          Fler resurser
        </a>
      </ActiveLink>
    </div>
  </header>
)

export default Nav
