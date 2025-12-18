/// <reference types="cypress" />

const elCartPage = require('./elements').ELEMENTS

class CartPage {
  accessCartPage() {
    cy.visit('/checkout/#/cart')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  /**
   * Clear and type text in a input element.
   * @param {string} element - The element selector to type text.
   * @param {string} text - The text to type in the element.
   */
  clearAndType(element, text) {
    cy.get(element).then(($element) => {
      cy.wrap($element).should('be.enabled').clear({ force: true })
      cy.wrap($element).click({ force: true })
      cy.wrap($element).type(text, { force: true })
    })
  }

  accessCartPageWithProduct = (q = 1) => {
    cy.clearCart()
    const produto = Cypress.env('produto')[0]

    cy.visit(`/checkout/cart/add?sc=1&sku=${produto.sku}&qty=${q}&seller=1`, {
      failOnStatusCode: false,
    })
  }

  accessCartPageWithProducts1and2 = (q = 1) => {
    cy.clearCart()
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

  selectCmbState(state) {
    cy.get(elCartPage.comboBoxShipState, { timeout: 3000 })
      .should('be.enabled')
      .select(state)
  }

  selectCmbCity(city) {
    cy.get(elCartPage.comboBoxShipCity, { timeout: 3000 })
      .should('be.enabled')
      .select(city)
  }

  validateLblShippingCost(status) {
    switch (status) {
      case 'calculated':
        cy.get(elCartPage.labelShippingCost).should('be.visible')
        break
      case 'not calculated':
        cy.get(elCartPage.labelShippingCost).should('not.be.visible')
        break
    }
  }

  clickBtnCartToOrder() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(elCartPage.buttonCartToOrder).should('exist').click({ force: true })
  }

  clickBtnCartToOrderForm() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(elCartPage.buttonCartToOrderForm)
      .should('be.visible')
      .click({ force: true })
  }

  clickBtnReturnToCart() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elCartPage.buttonReturnToCart).should('exist').click({ force: true })
  }

  clickLogoToHome() {
    cy.wait(5000)
    cy.get(elCartPage.buttonLogoReturnToHome)
      .should('exist')
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2500)
    cy.xpath(elCartPage.labelItemQuantity(product))
      .invoke('val')
      .then(($value) => {
        const index = quantity - $value
        for (let n = 0; n < index; n++) {
          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(5000)
          cy.xpath(elCartPage.buttonIncrementQuantity(product))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  clickXpFnDecrementQuantity(product, quantity) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2500)
    cy.xpath(elCartPage.labelItemQuantity(product))
      .invoke('val')
      .then(($value) => {
        const index = quantity - $value
        for (let n = 0; n > index; n--) {
          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(5000)
          cy.xpath(elCartPage.buttonDecrementQuantity(product))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  validateXpFnItemQuantity(product, quantity) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.xpath(elCartPage.labelItemQuantity(product))
      .invoke('val')
      .should('eq', quantity)
  }

  typeInputCartCoupon(invalidCoupon) {
    this.clearAndType(elCartPage.inputCoupon, invalidCoupon)
    cy.get(elCartPage.buttonCouponAdd).click({ force: true })
  }

  typeZipCode(zipCode) {
    cy.get(elCartPage.shippingButton).click()
    cy.get(elCartPage.inputZipCode, { timeout: 8000 }).then(($input) => {
      cy.wrap($input).should('be.visible').focus()
      cy.wrap($input).type(zipCode)
    })
  }

  clickBtnCartCoupon() {
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elCartPage.buttonCoupon)
        .should('be.visible')
        .click({ force: true })
    }
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elCartPage.buttonModalCoupon)
        .should('be.visible')
        .click({ force: true })
    }
  }

  clickBtnCartCouponAdd() {
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elCartPage.linkCoupon).click()
    }
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elCartPage.linkCoupon).click()
    }
  }

  validateMsgToastInvalid(coupon) {
    cy.contains(
      elCartPage.validateMsgToastInvalid,
      `Cupom ${coupon} inválido`,
      {
        timeout: 10000,
      },
    )
  }

  validateEmpytInputCartCoupon() {
    cy.get(elCartPage.inputCoupon).should('be.empty')
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

  clickChooseMoreProducts() {
    cy.get(elCartPage.chooseMoreProducts).click({ force: true })
    cy.wait(10000)
  }

  clickRecurrenceButton() {
    cy.get(elCartPage.recurrenceButton).click()
  }

  validateRecurrenceAdded() {
    cy.get(elCartPage.recurrenceAdded).should('be.visible')
  }

  typeInputCartValidCoupon(coupon) {
    this.clearAndType(elCartPage.inputCoupon, coupon)
    cy.get(elCartPage.buttonCouponAdd).click({ force: true })
  }

  validateValidDiscountCoupon() {
    cy.get(elCartPage.addedValidCoupon).should('be.visible')
  }

  clickCartShareOption() {
    cy.get(elCartPage.shareButtonCart).click()
  }

  validateShareModal() {
    cy.get(elCartPage.modalShareCart).should('be.visible')
    cy.get(elCartPage.validateModalShareCart).should(
      'have.text',
      'Compartilhe nas suas redes',
    )
  }

  clickTitleCart() {
    cy.wait(20000)
    cy.get(elCartPage.titleCart).should('be.visible')
  }

  clickOnTheSlector() {
    cy.wait(5000)
    cy.get(elCartPage.selectVoltage).select('127V')
  }

  clickConfirmVoltage() {
    cy.wait(5000)
    cy.get(elCartPage.clickConfirmVoltage).click({ force: true })
    cy.wait(20000)
  }

  checkChangedVoltage() {
    cy.get(elCartPage.selectVoltage)
      .find('option:selected') // Encontra a opção selecionada
      .should('have.text', '127V')
  }

  checkUpdateExtendedWarrant() {
    cy.get(elCartPage.prdExtendedWaranty).should('be.visible')
  }

  validateBtnWarrantyExtendedOnCart() {
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elCartPage.cartWithoutGe).should('be.visible')
    }
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 400)
      cy.get(elCartPage.cartWithoutGe).should('be.visible')
    }
  }

  clickbtnPickUoInStore() {
    cy.get(elCartPage.btnPickUpInStore).click({ force: true })
  }

  clickIncreaseQuantity() {
    cy.wait(5000)
    cy.get(elCartPage.btnIncreaseQuantity).click({ force: true })
    cy.wait(10000)
  }

  clickDecreaseQuantity() {
    cy.wait(5000)
    cy.get(elCartPage.btnDecreaseQuantity).click({ force: true })
    cy.wait(5000)
  }
  validateFnImgProduct(product, status) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
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
