const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://osc-ultimate-demo.mageplaza.com/"
    screenshotOnRunFailure:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
