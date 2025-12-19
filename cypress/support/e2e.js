import './commands'
import addressData from '../fixtures/addressData.json'

Cypress.on('uncaught:exception', () => false)
require('cypress-xpath')

beforeEach(() => {
  cy.setCookie('cookieconsent_status', 'dismiss')
  cy.setCookie('fb_cookieconsent_status', 'dismiss')
  // set VTEX  session cookie workspace
  const VTEX_AUTH_COOKIE = Cypress.env('VTEX_AUTH_COOKIE')

  if (VTEX_AUTH_COOKIE) {
    cy.setCookie('VtexIdclientAutCookie', VTEX_AUTH_COOKIE)
  }

  // Garantir que cada cenário comece com o carrinho vazio sem interferir no contexto do usuário
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
