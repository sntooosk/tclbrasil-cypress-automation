require('dotenv').config()
const { defineConfig } = require('cypress')
const registerPlugins = require('./cypress/plugins')

module.exports = defineConfig({
  env: {
    VTEX_WORKSPACE: process.env.VTEX_WORKSPACE,
    VTEX_AUTH_COOKIE: process.env.VTEX_AUTH_COOKIE,
  },
  video: true,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  e2e: {
    setupNodeEvents(on, config) {
      registerPlugins(on, config)
      return config
    },
    baseUrl: process.env.VTEX_WORKSPACE || 'https://www.lojatcl.com.br',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
  },
})
