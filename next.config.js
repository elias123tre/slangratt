const withPWA = require("next-pwa")

module.exports = withPWA({
  images: {
    domains: ["unsplash.com", "www.rambo.se"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  // trailingSlash: true, // Export pages as folders
})
