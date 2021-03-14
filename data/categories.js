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
    thumbnailUrl: "https://unsplash.com/photos/ssoJQfH7Acw/download?w=420",
    imageUrl: "https://unsplash.com/photos/ssoJQfH7Acw/download?w=540",
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
    thumbnailUrl: "https://unsplash.com/photos/ET6_fDwZj2U/download?w=420",
    imageUrl: "https://unsplash.com/photos/ET6_fDwZj2U/download?w=540",
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
    thumbnailUrl: "https://unsplash.com/photos/aBYhjZVfNfU/download?w=420",
    imageUrl: "https://unsplash.com/photos/aBYhjZVfNfU/download?w=540",
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
    thumbnailUrl: "https://unsplash.com/photos/g5TBwfH5kP8/download?w=420",
    imageUrl: "https://unsplash.com/photos/g5TBwfH5kP8/download?w=540",
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
    thumbnailUrl: "https://unsplash.com/photos/LWDDtuCCEOE/download?w=420",
    imageUrl: "https://unsplash.com/photos/LWDDtuCCEOE/download?w=540",
  },
]

const homeCategories = [
  {
    name: "Brännbart",
    excerpt: "Restavfallet är det som blir kvar när förpackningar och mat är utsorterat.",
    slug: "brännbart",
    thumbnailUrl:
      "https://www.rambo.se/wp-content/uploads/2017/01/restavfall-e1484211223981.jpg.webp",
    imageUrl: "https://www.rambo.se/wp-content/uploads/2017/01/restavfall-e1484211223981.jpg.webp",
  },
  {
    name: "Matavfall",
    excerpt:
      "Om du har möjlighet kan du sortera ut matavfallet och kompostera det i en egen hemkompost eller få sophämtning för det.",
    slug: "matavfall",
    thumbnailUrl: "https://www.rambo.se/wp-content/uploads/2017/01/matavfall-520x325.jpg.webp",
    imageUrl: "https://www.rambo.se/wp-content/uploads/2017/01/matavfall-520x325.jpg.webp",
  },
]

export { categories, homeCategories }
