import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: false,
    json: true,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/**/*.spec.ts'], // Add this line in order to detect typescript test files
    testIsolation: false, // Save context between each step
  },
});
