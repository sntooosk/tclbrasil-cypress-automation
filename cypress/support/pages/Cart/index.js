/// <reference types="cypress" />

const elCartPage = require('./elements').ELEMENTS

class CartPage {
  accessCartPage() {
    cy.visit('/checkout/#/cart')
    cy.wait(5000)
  }

  clearAndType(element, text) {
    cy.get(element).then(($element) => {
      cy.wrap($element).should('be.enabled').clear({ force: true })
      cy.wrap($element).click({ force: true })
      cy.wrap($element).type(text, { force: true })
    })
  }

  accessCartPageWithProduct = (q = 1) => {
    const produto = Cypress.env('produto')[0]

    cy.visit(`/checkout/cart/add?sc=1&sku=${produto.sku}&qty=${q}&seller=1`, {
      failOnStatusCode: false,
    })
  }

  accessCartPageWithProducts1and2 = (q = 1) => {
    const [p1, p2] = Cypress.env('produto')

    cy.visit(
      `/checkout/cart/add?sc=1&sku=${p1.sku}&qty=${q}&seller=1&sku=${p2.sku}&qty=${q}&seller=1`,
      { failOnStatusCode: false },
    )
  }

  clickBtnCalculateShipping() {
    cy.get(elCartPage.buttonCalculateShipping, { timeout: 5000 }).click({
      force: true,
    })
  }

  clickBtnCartToOrder() {
    cy.wait(5000)
    cy.get(elCartPage.buttonCartToOrder).should('exist').click({ force: true })
  }
  clickBtnBackButton() {
    cy.get(elCartPage.homeBackButton).should('exist').click({ force: true })
  }

  clickBtnCartToOrderForm() {
    cy.get(elCartPage.buttonCartToOrderForm)
      .should('be.visible')
      .click({ force: true })
  }

  clickBtnReturnToCart() {
    cy.wait(5000)
    cy.get(elCartPage.buttonReturnToCart).should('exist').click({ force: true })
  }

  validateProductInCartBySku(sku, status) {
    switch (status) {
      case 'visible':
        cy.get(elCartPage.cartItemBySku(sku)).should('exist').and('be.visible')
        break
      case 'not visible':
        cy.get(elCartPage.cartItemBySku(sku)).should('not.exist')
        break
      default:
        throw new Error('Invalid status')
    }
  }

  validateCartEmpty() {
    cy.get(elCartPage.divCartEmpty).should('be.visible')
  }

  clickFnItemRemove(skuid) {
    cy.get(elCartPage.imageSourceLoading, { timeout: 3000 }).should(
      'not.be.visible',
    )
    cy.get(elCartPage.buttonItemRemoveProduct(skuid)).should('exist')
    cy.get(elCartPage.buttonItemRemoveProduct(skuid))
      .should('be.visible')
      .click({ force: true })
  }

  clickClearCart(skuid1, skuid2) {
    cy.get(elCartPage.imageSourceLoading, { timeout: 3000 }).should(
      'not.be.visible',
    )
    cy.get(elCartPage.buttonItemRemoveProduct(skuid1)).should('exist')
    cy.get(elCartPage.buttonItemRemoveProduct(skuid1))
      .should('be.visible')
      .click({ force: true })

    cy.get(elCartPage.imageSourceLoading, { timeout: 3000 }).should(
      'not.be.visible',
    )
    cy.get(elCartPage.buttonItemRemoveProduct(skuid2)).should('exist')
    cy.get(elCartPage.buttonItemRemoveProduct(skuid2))
      .should('be.visible')
      .click({ force: true })
    cy.get(elCartPage.imageSourceLoading).should('not.be.visible')
  }

  clickXpFnIncrementQuantity(product, quantity) {
    cy.wait(2500)
    cy.xpath(elCartPage.labelItemQuantity(product))
      .invoke('val')
      .then(($value) => {
        const index = quantity - $value
        for (let n = 0; n < index; n++) {
          cy.wait(5000)
          cy.xpath(elCartPage.buttonIncrementQuantity(product))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  clickXpFnDecrementQuantity(product, quantity) {
    cy.wait(2500)
    cy.xpath(elCartPage.labelItemQuantity(product))
      .invoke('val')
      .then(($value) => {
        const index = quantity - $value
        for (let n = 0; n > index; n--) {
          cy.wait(5000)
          cy.xpath(elCartPage.buttonDecrementQuantity(product))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  validateXpFnItemQuantity(product, quantity) {
    cy.wait(5000)
    cy.xpath(elCartPage.labelItemQuantity(product))
      .invoke('val')
      .should('eq', quantity)
  }

  typeInputCartCoupon(coupon) {
    this.clearAndType(elCartPage.inputCoupon, coupon)
    cy.get(elCartPage.buttonCouponAdd).click({ force: true })
  }

  clickBtnCartCouponAdd() {
    cy.get(elCartPage.linkCoupon).click()
  }

  typeInputCartValidCoupon(coupon) {
    this.clearAndType(elCartPage.inputCoupon, coupon)
    cy.get(elCartPage.buttonCouponAdd).click({ force: true })
  }

  validateMsgToastInvalid(coupon) {
    cy.contains(
      elCartPage.msgInvalidDiscountCoupon,
      `Cupom ${coupon} inválido`,
      {
        timeout: 10000,
      },
    )
  }

  validateValidDiscountCoupon() {
    cy.get(elCartPage.addedValidCoupon).should('be.visible')
  }

  typeZipCode(zipCode) {
    cy.get(elCartPage.shippingButton).click()
    cy.get(elCartPage.inputZipCode, { timeout: 8000 }).then(($input) => {
      cy.wrap($input).should('be.visible').focus()
      cy.wrap($input).type(zipCode)
    })
  }

  validateShippingAvailable() {
    cy.get(elCartPage.labelShippingAvailable).should('be.visible')
  }

  validateShippingUnavailable() {
    cy.get(elCartPage.labelShippingAvailable).should('not.exist')
  }

  validateUnavailableShipping() {
    cy.get(elCartPage.UnavailableShippingData).should(
      'have.text',
      'Indisponível para este endereço.',
    )
    cy.wait(1000)
  }

  validateFnImgProduct(product, status) {
    cy.wait(5000)
    cy.get(elCartPage.imageSourceLoading).should('not.be.visible')
    switch (status) {
      case 'visible':
        cy.get(elCartPage.divCartFull).first().should('be.visible')
        cy.get(elCartPage.imageSourceProduct(product)).should('be.visible')
        break
      case 'not visible':
        cy.get(elCartPage.divCartFull).first().should('not.be.visible')
        cy.get(elCartPage.imageSourceProduct(product)).should('not.exist')
        break
    }
  }
}

export default new CartPage()
