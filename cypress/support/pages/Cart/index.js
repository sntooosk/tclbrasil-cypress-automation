/// <reference types="cypress" />

const elCartPage = require('./elements').ELEMENTS

class CartPage {
  waitForCartReady() {
    cy.get('body', { timeout: 15000 }).then(($body) => {
      if ($body.find(elCartPage.imageSourceLoading).length) {
        cy.get(elCartPage.imageSourceLoading, { timeout: 15000 }).should(
          'not.be.visible',
        )
      }
    })

    cy.get('body', { timeout: 15000 }).then(($body) => {
      if ($body.find(elCartPage.divCartFull).length) {
        cy.get(elCartPage.divCartFull).should('be.visible')
      } else {
        cy.get(elCartPage.divCartEmpty).should('be.visible')
      }
    })
  }

  accessCartPage() {
    cy.visit('/checkout/#/cart')
    this.waitForCartReady()
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
    this.waitForCartReady()
  }

  accessCartPageWithProducts1and2 = (q = 1) => {
    const [p1, p2] = Cypress.env('produto')

    cy.visit(
      `/checkout/cart/add?sc=1&sku=${p1.sku}&qty=${q}&seller=1&sku=${p2.sku}&qty=${q}&seller=1`,
      { failOnStatusCode: false },
    )
    this.waitForCartReady()
  }

  clickBtnCalculateShipping() {
    cy.get(elCartPage.buttonCalculateShipping, { timeout: 5000 }).click({
      force: true,
    })
  }

  clickBtnCartToOrder() {
    this.waitForCartReady()
    cy.get(elCartPage.buttonCartToOrder, { timeout: 15000 })
      .should('be.visible')
      .click({ force: true })
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
    this.waitForCartReady()
    cy.get(elCartPage.buttonReturnToCart, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true })
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
    this.waitForCartReady()
    cy.get(elCartPage.buttonItemRemoveProduct(skuid)).should('exist')
    cy.get(elCartPage.buttonItemRemoveProduct(skuid))
      .should('be.visible')
      .click({ force: true })
    this.waitForCartReady()
  }

  clickClearCart(skuid1, skuid2) {
    const skus = [skuid1, skuid2]

    skus.forEach((sku) => {
      this.waitForCartReady()
      cy.get(elCartPage.buttonItemRemoveProduct(sku)).should('exist')
      cy.get(elCartPage.buttonItemRemoveProduct(sku))
        .should('be.visible')
        .click({ force: true })
    })
    this.waitForCartReady()
  }

  clickXpFnIncrementQuantity(product, quantity) {
    cy.xpath(elCartPage.labelItemQuantity(product))
      .should('be.visible')
      .invoke('val')
      .then(($value) => {
        const currentQuantity = Number($value)
        const steps = quantity - currentQuantity

        Cypress._.times(steps, (index) => {
          const expectedQuantity = currentQuantity + index + 1
          cy.xpath(elCartPage.buttonIncrementQuantity(product))
            .should('exist')
            .click({ force: true })
          cy.xpath(elCartPage.labelItemQuantity(product)).should(
            'have.value',
            expectedQuantity.toString(),
          )
        })
      })
  }

  clickXpFnDecrementQuantity(product, quantity) {
    cy.xpath(elCartPage.labelItemQuantity(product))
      .should('be.visible')
      .invoke('val')
      .then(($value) => {
        const currentQuantity = Number($value)
        const steps = currentQuantity - quantity

        Cypress._.times(steps, (index) => {
          const expectedQuantity = currentQuantity - index - 1
          cy.xpath(elCartPage.buttonDecrementQuantity(product))
            .should('exist')
            .click({ force: true })
          cy.xpath(elCartPage.labelItemQuantity(product)).should(
            'have.value',
            expectedQuantity.toString(),
          )
        })
      })
  }

  validateXpFnItemQuantity(product, quantity) {
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
  }

  validateFnImgProduct(product, status) {
    cy.get('body').then(($body) => {
      if ($body.find(elCartPage.imageSourceLoading).length) {
        cy.get(elCartPage.imageSourceLoading).should('not.be.visible')
      }
    })
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
