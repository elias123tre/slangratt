const categories = [
  {
    name: "Glas",
    excerpt:
      "Sortera dina glasförpackningar i färgat och ofärgat glas. Ta av kapsyler, lock och korkar och sortera dem till återvinning efter materialslag på återvinningsstation.",
    slug: "glas",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5,21.27L14.66,21.18C13.9,21.11 13.25,20.6 13,19.87C12.47,17.91 12.47,15.83 13,13.87C15.32,13.4 17,11.37 17,9C17,7 15,2 15,2H9C9,2 7,7 7,9C7,11.38 8.67,13.42 11,13.9C11.53,15.86 11.53,17.94 11,19.9C10.76,20.62 10.12,21.13 9.37,21.21L8.5,21.3C8.5,21.3 8,21.28 8,22H16C16,21.28 15.5,21.27 15.5,21.27M9.44,7L10.44,4H13.56L14.56,7H9.44Z" />
      </svg>
    ),
    link: "https://www.sopor.nu/sortera-%C3%A5tervinn/foerpackningar/glasfoerpackningar/",
    thumbnailUrl: "https://unsplash.com/photos/ssoJQfH7Acw/download?w=640",
    imageUrl: "https://unsplash.com/photos/ssoJQfH7Acw/download?w=1920",
  },
  {
    name: "Kartong",
    excerpt:
      "Mjölk- och cornflakespaket, wellpapp, papperslådor, omslagspapper, och papperspåsar lämnas på återvinningsstation.",
    slug: "kartong",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
      </svg>
    ),
    link: "https://www.sopor.nu/sortera-%C3%A5tervinn/foerpackningar/pappersfoerpackningar/",
    thumbnailUrl: "https://unsplash.com/photos/ET6_fDwZj2U/download?w=640",
    imageUrl: "https://unsplash.com/photos/ET6_fDwZj2U/download?w=1920",
  },
  {
    name: "Metall",
    excerpt: "Konservburkar, aluminiumfolie, kapsyler, metallock lämnas på återvinningsstation.",
    slug: "metall",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <ellipse cx="12" cy="4.9" rx="7.1" ry="2.9" />
        <path d="M19.1,4.7v14.6v0.2c0,1.6-3.2,2.9-7.1,2.9s-7.1-1.3-7.1-2.9V4.9" />
        <path d="M4.9,16.2c0,0,3,2.1,7.1,2.1c4.3,0,7.1-2,7.1-2" />
        <path d="M4.9,12.1c0,0,3,2.1,7.1,2.1c4.3,0,7.1-2,7.1-2" />
      </svg>
    ),
    link: "https://www.sopor.nu/sortera-%C3%A5tervinn/foerpackningar/metallfoerpackningar/",
    thumbnailUrl: "https://unsplash.com/photos/aBYhjZVfNfU/download?w=640",
    imageUrl: "https://unsplash.com/photos/aBYhjZVfNfU/download?w=1920",
  },
  {
    name: "Plast",
    excerpt:
      "Mjukplast och frigolit, dunkar, burkar, flaskor, påsar och annat gjort av plast lämnas på återvinningsstation.",
    slug: "plast",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          d="M1.3,16.4c0,0,1.5,5.2,6.5,6.6c0,0,11.1-10.8,12.4-12.8s0.2-3.9,0.2-3.9L23,3.6l-2.5-2.4l-2.4,2.4
		c0,0-2.9-1.5-5.2,1S1.3,16.4,1.3,16.4z"
        />
        <line x1="14.9" y1="9.9" x2="17.9" y2="12.9" />
        <line x1="12.7" y1="12.2" x2="15.7" y2="15.1" />
        <line x1="10.3" y1="14.4" x2="13.4" y2="17.5" />
      </svg>
    ),
    link: "https://www.sopor.nu/sortera-%C3%A5tervinn/foerpackningar/plastfoerpackningar/",
    thumbnailUrl: "https://unsplash.com/photos/g5TBwfH5kP8/download?w=640",
    imageUrl: "https://unsplash.com/photos/g5TBwfH5kP8/download?w=1920",
  },
  {
    name: "Tidningar",
    excerpt:
      "Dags- och kvällstidningar, kataloger, magasin och reklamblad. Även pocketböcker, skrivpapper och kopieringspapper kan återvinnas.",
    slug: "tidningar",
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        ></path>
      </svg>
    ),
    link: "https://www.sopor.nu/sortera-%C3%A5tervinn/tidningar-och-andra-trycksaker/",
    thumbnailUrl: "https://unsplash.com/photos/LWDDtuCCEOE/download?w=640",
    imageUrl: "https://unsplash.com/photos/LWDDtuCCEOE/download?w=1920",
  },
]

const homeCategories = [
  {
    name: "Brännbart",
    excerpt: "Restavfallet är det som blir kvar när förpackningar och mat är utsorterat.",
    slug: "brannbart",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
    link: "https://www.rambo.se/privat/sorteringsguide/restavfall/",
    thumbnailUrl:
      "https://www.rambo.se/wp-content/uploads/2017/01/restavfall-e1484211223981.jpg.webp",
    imageUrl: "https://www.rambo.se/wp-content/uploads/2017/01/restavfall-e1484211223981.jpg.webp",
  },
  {
    name: "Matavfall",
    excerpt:
      "Om du har möjlighet kan du sortera ut matavfallet och kompostera det i en egen hemkompost eller få sophämtning för det.",
    slug: "matavfall",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={32}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
        ></path>
        <path
          fill="none"
          d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
        ></path>
        <path fill="none" d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"></path>
        <path fill="none" d="M368 112l16-64 47-16"></path>
        <path fill="none" d="M224 112h256"></path>
      </svg>
    ),
    link: "https://www.rambo.se/privat/sorteringsguide/matavfall/",
    thumbnailUrl: "https://www.rambo.se/wp-content/uploads/2017/01/matavfall-520x325.jpg.webp",
    imageUrl: "https://www.rambo.se/wp-content/uploads/2017/01/matavfall-520x325.jpg.webp",
  },
]

export { categories, homeCategories }
