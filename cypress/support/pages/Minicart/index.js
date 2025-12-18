/// <reference types="cypress" />
const elMinicart = require('./elements').ELEMENTS

class Minicart {
  validateTextEmptyMinicart() {
    cy.clearCart()
    cy.wait(5000)
    cy.get(elMinicart.minicartTextEmpty).should(
      'have.text',
      'Your Cart is emptyStart Shopping',
    )
    cy.wait(5000)
  }

  validateLanguageMinicart() {
    cy.get(elMinicart.minicartTextWithProduct).should('be.visible')
    cy.wait(2000)
  }
}
export default new Minicart()
