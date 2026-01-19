import './commands'
import addressData from '../fixtures/addressData.json'

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import Xpath
require('cypress-xpath')

// Import commands.js using ES2015 syntax:
import './commands'

// ignore uncaught exceptions
Cypress.on('uncaught:exception', () => {
  return false
})

beforeEach(() => {
  cy.setCookie('cookieconsent_status', 'dismiss')
  cy.setCookie('fb_cookieconsent_status', 'dismiss')

  // set VTEX session cookie workspace
  const VTEX_AUTH_COOKIE = Cypress.env('VTEX_AUTH_COOKIE')

  if (VTEX_AUTH_COOKIE) {
    cy.setCookie('VtexIdclientAutCookie', VTEX_AUTH_COOKIE)
  }

  cy.clearCart()
})

before(() => {
  cy.getAvailableProducts('Monitor', addressData[0].zipCode, 'produto')
  cy.getAvailableProducts(
    'Lava e Seca TCL',
    addressData[0].zipCode,
    'produto-voltagem',
  )
})
