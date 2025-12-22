/// <reference types="cypress" />
const elMinicart = require('./elements').ELEMENTS

class Minicart {
  validateTextEmptyMinicart() {
    cy.get(elMinicart.minicartTextEmpty).should(
      'have.text',
      'Your Cart is emptyStart Shopping',
    )
  }

  validateLanguageMinicart() {
    cy.get(elMinicart.minicartTextWithProduct).should('be.visible')
  }
}
export default new Minicart()
