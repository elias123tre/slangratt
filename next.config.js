// const withPWA = require("next-pwa")
// const runtimeCaching = require("next-pwa/cache")

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
//   images: {
//     domains: ["unsplash.com", "www.rambo.se"],
//   },
// })

module.exports = {
  images: {
    domains: ["unsplash.com", "www.rambo.se"],
  },
  // trailingSlash: true, // Export pages as folders
}
