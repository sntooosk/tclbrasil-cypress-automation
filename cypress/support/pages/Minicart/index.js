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

  clickXpFnIncrementQuantity(product, quantity, position_cart) {
    cy.wait(5000)
    cy.get(elMinicart.xpFnItemQuantity(product))
      .invoke('val')
      .then(($value) => {
        const index = quantity - $value
        for (let n = 0; n < index; n++) {
          cy.wait(5000)
          cy.get(elMinicart.xpFnIncrementQuantity(position_cart))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  clickXpFnIncrementQuantityMobile(sku, quantity) {
    cy.wait(5000)
    cy.get(elMinicart.xpFnItemQuantityMobile(sku))
      .invoke('val')
      .then(($value) => {
        const index = quantity - $value
        for (let n = 0; n < index; n++) {
          cy.wait(5000)
          cy.get(elMinicart.xpFnIncrementQuantityMobile)
            .first()
            .should('exist')
            .click({ force: true })
        }
      })
  }

  clickCloseMinicart() {
    cy.get(elMinicart.minicartClose).click({ force: true })
  }

  clickGoToCart() {
    cy.get(elMinicart.goToCart).click({ force: true })
  }

  clickFnItemRemove(sku) {
    cy.get(elMinicart.buttonItemRemoveProduct(sku)).click({ force: true })
  }
  miniCartAutomatically() {
    cy.get(elMinicart.titleMiniCart).should('be.visible')
    cy.wait(50000)
  }
  clickDecreaseQuantity() {
    cy.wait(5000)
    cy.get(elMinicart.btnDecreaseQuantity).click({ force: true })
    cy.wait(5000)
  }
}
export default new Minicart()
