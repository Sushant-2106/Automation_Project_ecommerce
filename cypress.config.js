const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
async function setupNodeEvents(on, config) {
  // implement node event listeners here
on('file:preprocessor', cucumber());
return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //specPattern:"cypress/UAT/Features/*.feature"
    //specPattern: "cypress/support/step/ev.js"
    //specPattern: "cypress/UAT/Features\ev.feature"
    //specPattern: "cypress/UAT/Features/*.feature"
    //specPattern: "cypress/support/PageClasses/LoginPage.js"
    specPattern: "cypress/Integration/PageTest/Test.js"
  },
});


