require('dotenv').config()

const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const userAgents = require('./cypress/utils/UserAgents')

module.exports = defineConfig({
  video: true,

  retries: {
    runMode: 2,
    openMode: 1,
  },

  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,

  env: {
    VTEX_WORKSPACE: process.env.VTEX_WORKSPACE,
    VTEX_AUTH_COOKIE: process.env.VTEX_AUTH_COOKIE,
  },

  e2e: {
    baseUrl: process.env.VTEX_WORKSPACE || 'https://www.lojatcl.com.br',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',

    browser: 'chrome',

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          const ua = userAgents[config.env.environment]
          if (ua) launchOptions.args.push(`--user-agent=${ua}`)
        }
        return launchOptions
      })

      return config
    },
  },
})
