const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      validEmail: "qatest@gmail.com",
      validPassword: "emausla123"
    },
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    watchForFileChanges: false
  },
});
