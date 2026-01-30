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

// Import commands.js using ES2015 syntax:
import './commands'
import addressData from '../fixtures/addressData.json'
import { getAvailabeProducts } from '../utils/getProducts/getProducts'

// Import Xpath
require('cypress-xpath')

// ignore uncaught exceptions
Cypress.on('uncaught:exception', () => false)

before(() => {
  getAvailabeProducts('Monitor', addressData[0].zipCode).then((produto) => {
    const p = Object.values(produto)[0]

    Cypress.env('produto-01-name', p.name)
    Cypress.env('produto-01-url', p.url)
    Cypress.env('produto-01-sku', p.sku)
  })

  getAvailabeProducts('Lava e Seca TCL', addressData[0].zipCode).then(
    (produto) => {
      const p = Object.values(produto)[0]

      Cypress.env('produto-02-name', p.name)
      Cypress.env('produto-02-url', p.url)
      Cypress.env('produto-02-sku', p.sku)
    },
  )
})

beforeEach(() => {
  cy.setCookie('cookieconsent_status', 'dismiss')
  cy.setCookie('fb_cookieconsent_status', 'dismiss')

  const VTEX_AUTH_COOKIE = Cypress.env('VTEX_AUTH_COOKIE')
  if (VTEX_AUTH_COOKIE) {
    cy.setCookie('VtexIdclientAutCookie', VTEX_AUTH_COOKIE)
  }

  cy.clearCart()
})
