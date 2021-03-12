import Head from "next/head"
import Nav from "components/Nav"
import Foot from "components/Foot"
import { useEffect, useRef, useState } from "react"

const PageLayout = ({
  children,
  title = "Släng rätt!",
  description = "En sida som hjälper dig med sopsorteringen",
}) => {
  const [footerOffset, setFooter] = useState(0)
  const ref = useRef()

  const footerBottom = () => {
    if (footerOffset != ref.current.clientHeight)
      if (window.getComputedStyle(ref.current).position == "fixed") {
        setFooter(ref.current.clientHeight)
      } else {
        setFooter(0)
      }
  }

  useEffect(() => {
    window.addEventListener("resize", footerBottom)
    footerBottom()
    return () => {
      window.removeEventListener("resize", footerBottom)
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          }
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00a850" />
        <meta name="apple-mobile-web-app-title" content="Sl&auml;ng r&auml;tt!" />
        <meta name="application-name" content="Sl&auml;ng r&auml;tt!" />
        <meta name="msapplication-TileColor" content="#00a850" />
        <meta name="theme-color" content="#00a850" />

        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </Head>

      {/* <div className="bg-top bg-cover bg-gradient dark:bg-left dark:bg-dark-gradient"> */}
      <div
        className="bg-top bg-cover bg-gradient-to-bl from-green-200 via-green-400 to-green-500"
        style={{ marginBottom: footerOffset }}
      >
        {/* <script>
          function theme(newtheme) {
                    $("#themeswitcher").children().removeClass("text-primary")
                    switch (newtheme) {
                        case 'light':
                            localStorage.theme = 'light'
                            $("#themeswitcher > #light").addClass("text-primary")
                            break;
                        case 'dark':
                            localStorage.theme = 'dark'
                            $("#themeswitcher > #dark").addClass("text-primary")
                            break;
                        default:
                            localStorage.removeItem('theme')
                            $("#themeswitcher > #auto").addClass("text-primary")
                    }
        
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.querySelector('html').classList.add('dark')
                    } else {
                        document.querySelector('html').classList.remove('dark')
                    }
                }
                theme(localStorage.theme)
                $(document).ready(function () {
                    theme(localStorage.theme)
                })
        </script> */}

        <div className="min-h-screen">
          <Nav refrence={ref} />

          {children}
        </div>

        <Foot />
      </div>
    </>
  )
}

export default PageLayout
