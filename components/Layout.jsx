import Head from "next/head"
import Nav from "components/Nav"
import Foot from "components/Foot"
import { useEffect, useRef, useState } from "react"

const APP_COLOR = "#00a850"

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
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Inter:wght@400..900&family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&display=swap"
          }
          rel="stylesheet"
          type="text/css"
        />
        {/* https://fonts.googleapis.com/css2?family=Inter:wght@400..900&family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap */}

        <meta name="application-name" content={title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="description" content={description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content={APP_COLOR} />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color={APP_COLOR} />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="twitter:card" content={description} />
        <meta name="twitter:url" content="https://slangratt.floreteng.se" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://slangratt.floreteng.se/icons/android-chrome-192x192.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Släng rätt!" />
        <meta property="og:url" content="https://slangratt.floreteng.se" />
        <meta
          property="og:image"
          content="https://slangratt.floreteng.se/icons/apple-touch-icon.png"
        />

        <title>{title}</title>
        <meta name="description" content={description}></meta>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
      </Head>

      {/* <div className="bg-top bg-cover bg-gradient dark:bg-left dark:bg-dark-gradient"> */}
      <div
        className="bg-top bg-cover bg-gradient-to-bl from-green-200 via-green-400 to-green-500"
        style={{ marginBottom: footerOffset }}
      >
        <div className="flex flex-col items-center min-h-screen">
          <Nav refrence={ref} />

          {children}
        </div>

        <Foot />
      </div>
    </>
  )
}

export default PageLayout
