export default defineNuxtConfig({
  ssr: false,

  nitro: {
      preset: 'node-server',
      output: {
          exclude: [
              "node_modules/**/*", // Exclude node_modules
              "test/**/*", // Exclude test files
              "docs/**/*", // Exclude documentation
              "examples/**/*", // Exclude examples
          ],
      },
  },

  css: [
      "swiper/css/bundle", // Swiper styles
      "@/assets/fonts/remixicon.css", // Remixicon font styles
      "@/assets/css/nice-select.min.css", // Nice-select styles
      "@/assets/css/animate.min.css", // Animation styles
      "@/assets/css/spacing.css", // Spacing styles
      "bootstrap/dist/css/bootstrap.min.css", // Bootstrap styles
      "@/assets/css/style.css", // Main stylesheet
      "@/assets/css/responsive.css", // Responsive styles
  ],

  compatibilityDate: "2024-12-06",
});