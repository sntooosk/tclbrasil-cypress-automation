/// <reference types="cypress" />

const elCheckoutPage = require('./elements').ELEMENTS

class CheckoutPage {
  visitProfile() {
    cy.visit('/checkout/#/profile')
  }

  /**
   * Clear and type text in a input element.
   * @param {string} element - The element selector to type text.
   * @param {string} text - The text to type in the element.
   */
  clearAndType(element, text) {
    cy.get(element).then(($element) => {
      cy.wrap($element).should('be.enabled').clear({ force: true })
      cy.wrap($element).focus()
      cy.wrap($element).type(text)
    })
  }

  typeClientPreEmailProfile(clientPreEmail) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000)
    cy.get(elCheckoutPage.inputClientPreEmail).then(($input) => {
      cy.wrap($input).should('be.visible').focus()
      cy.wrap($input).type(clientPreEmail)
    })
  }

  typeFirstNameProfile(firstName) {
    this.clearAndType(elCheckoutPage.inputFirstName, firstName)
  }

  typeLastNameProfile(lastName) {
    this.clearAndType(elCheckoutPage.inputLastName, lastName)
  }

  typeDocumentProfile(document) {
    this.clearAndType(elCheckoutPage.inputDocument, document)
  }

  typeAreaCodePhoneProfile(areaCodePhone) {
    this.clearAndType(elCheckoutPage.inputAreaCodePhone, areaCodePhone)
  }

  typePhoneProfile(phone) {
    this.clearAndType(elCheckoutPage.inputPhone, phone)
  }

  chkTermsAndConditions(action) {
    switch (action) {
      case 'check':
        cy.get(elCheckoutPage.checkBoxTermsAndConditions).then(($checkbox) => {
          cy.wrap($checkbox).should('be.enabled').check()
          cy.wrap($checkbox).should('be.checked')
        })

        break
      case 'uncheck':
        cy.get(elCheckoutPage.checkBoxTermsAndConditions).then(($checkbox) => {
          cy.wrap($checkbox).should('be.enabled').uncheck()
          cy.wrap($checkbox).should('not.be.checked')
        })

        break
    }
  }

  chkNewsletter(action) {
    switch (action) {
      case 'check':
        cy.get(elCheckoutPage.checkBoxNewsletter).then(($checkbox) => {
          cy.wrap($checkbox).should('be.enabled').check()
          cy.wrap($checkbox).should('be.checked')
        })

        break
      case 'uncheck':
        cy.get(elCheckoutPage.checkBoxNewsletter).then(($checkbox) => {
          cy.wrap($checkbox).should('be.enabled').uncheck()
          cy.wrap($checkbox).should('not.be.checked')
        })

        break
    }
  }

  clickBtnPreEmail() {
    cy.get(elCheckoutPage.buttonClientPreEmail)
      .should('be.enabled')
      .click({ force: true })
  }

  clickBtnGoToShipping() {
    cy.get(elCheckoutPage.buttonGoToShipping)
      .should('be.enabled')
      .click({ force: true })
  }
  clickBtnGoToBuy() {
    cy.get(elCheckoutPage.buttonBuy).should('be.enabled').click({ force: true })
  }
  selectAddressTypeShipping(addressType) {
    cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType, { timeout: 3000 })
      .should('be.enabled')
      .select(addressType, { force: true })
  }

  typeZipCode(zipCode) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elCheckoutPage.inputZipCode)
      .last()
      .then(($input) => {
        cy.wrap($input).should('be.enabled').clear({ force: true })
        cy.wrap($input).focus()
        cy.wrap($input).type(zipCode, { force: true })
      })

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
  }

  typeCustomStreetShipping(customStreet) {
    this.clearAndType(elCheckoutPage.inputCustomStreet, customStreet)
  }

  typeCustomNumberShipping() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 100)
    }
    cy.get(elCheckoutPage.inputCustomNumber)
      .should('be.visible')
      .type('1111111111', { force: true })
  }

  typeCustomStreetNumberShipping(customStreetNumber) {
    this.clearAndType(
      elCheckoutPage.inputCustomStreetNumber,
      customStreetNumber,
    )
  }

  typeCustomStreetComplementShipping(customStreetComplement) {
    this.clearAndType(
      elCheckoutPage.inputCustomStreetComplement,
      customStreetComplement,
    )
  }

  typeComplementShipping(complement) {
    cy.get(elCheckoutPage.inputComplement).then(function ($input) {
      $input[0].setAttribute('value', complement)
    })
  }

  typeNeighborhoodShipping(neighborhood) {
    this.clearAndType(elCheckoutPage.inputNeighborhood, neighborhood)
  }

  typeFullNameShipping(fullName) {
    this.clearAndType(elCheckoutPage.inputFullName, fullName)
  }

  clearFullNameShipping() {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .clear({ force: true })
  }

  clickBtnGoToPayment() {
    cy.get(elCheckoutPage.buttonGoToPayment)
      .should('be.enabled')
      .click({ force: true })
  }

  selectMercadoPago() {
    cy.get(elCheckoutPage.selectMercadoPago)
      .should('be.visible')
      .click({ force: true })
  }

  selectBankInvoiceEfecty() {
    cy.get(elCheckoutPage.labelBankInvoiceEfecty)
      .should('be.visible')
      .dblclick()
  }

  selectCreditCardPayment() {
    cy.get(elCheckoutPage.selectCreditCard, { timeout: 3000 })
      .should('be.visible')
      .click()
  }

  getIframeDocument = () => {
    return (
      cy
        .get('iframe.span12')
        // Cypress yields jQuery element, which has the real
        // DOM element under property "0".
        // From the real DOM iframe element we can get
        // the "document" element, it is stored in "contentDocument" property
        // Cypress "its" command can access deep properties using dot notation
        // https://on.cypress.io/its
        .its('0.contentDocument')
        .should('exist')
    )
  }

  getIframeBody = () => {
    // get the document
    return (
      this.getIframeDocument()
        // automatically retries until body is loaded
        .its('body')
        .should('not.be.undefined')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        .then(cy.wrap)
    )
  }

  typeCardNumber(CardNumber) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4500)
    this.getIframeBody()
      .find(elCheckoutPage.inputCreditCard)
      .first()
      .focus()
      .type(CardNumber, { force: true })
  }

  validateCreditCardFlag(flag) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000)
    switch (flag) {
      case 'Visa':
        this.getIframeBody()
          .find(elCheckoutPage.imgCardFlagVisa)
          .should('have.text', flag)
        break
      case 'American Express':
        this.getIframeBody()
          .find(elCheckoutPage.imgCardFlagAmericanExpress)
          .should('have.text', flag)
        break
      case 'Diners':
        this.getIframeBody()
          .find(elCheckoutPage.imgCardFlagDiners)
          .should('have.text', flag)
        break
      case 'Mastercard':
        this.getIframeBody()
          .find(elCheckoutPage.imgCardFlagMastercard)
          .should('have.text', flag)
        break
    }
  }

  validateFirstNameAlert() {
    cy.get(elCheckoutPage.labelFirstNameAlert).should('be.visible')
  }

  validateLastNameAlert() {
    cy.get(elCheckoutPage.labelLastNameAlert).should('be.visible')
  }

  validateDocumentAlert() {
    cy.xpath(elCheckoutPage.labelDocumentAlert).should('be.visible')
  }

  validatePhoneAlert() {
    cy.xpath(elCheckoutPage.labelPhoneAlert).should('be.visible')
  }

  clickBtnBuyNow() {
    cy.get(elCheckoutPage.buttonBuyNow)
      .should('be.visible')
      .click({ force: true })
  }

  selectCmbState(state) {
    cy.get(elCheckoutPage.comboBoxState)
      .should('be.enabled')
      .select(state, { force: true })
  }

  selectCmbCity(city) {
    cy.get(elCheckoutPage.comboBoxCity, { timeout: 2000 })
      .should('be.enabled')
      .select(city, { force: true })
  }

  typeShippingCity(city) {
    cy.get(elCheckoutPage.comboBoxCity, { timeout: 2000 })
      .should('be.enabled')
      .type(city)
  }

  selectCmbDirection(addressType) {
    cy.get(elCheckoutPage.comboBoxAddressType)
      .should('be.enabled')
      .select(addressType, { force: true })
  }

  clickChangeShippingDataModal() {
    cy.get(elCheckoutPage.labelChangeShippingDataAlert)
      .should('be.visible')
      .click({ force: true })
  }

  selectBankInvoice() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    if (Cypress.env('environment') == 'desktop') {
      cy.scrollTo('bottom')
    } else {
      cy.scrollTo(0, 600)
    }
    cy.get(elCheckoutPage.selectBankInvoice).click({ force: true })
  }

  typeInputCheckoutValidCoupon(coupon) {
    this.clearAndType(elCheckoutPage.inputCouponCheckout, coupon)
    cy.get(elCheckoutPage.buttonModalCouponCheckout).click({ force: true })
  }

  validateValidDiscountCouponOnCheckout() {
    cy.get(elCheckoutPage.addedValidCouponCheckout).should('be.visible')
  }

  clickBtnCheckoutCouponAdd() {
    cy.wait(10000)
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elCheckoutPage.linkCouponCheckout).click()
      cy.get(elCheckoutPage.modalCouponAddCheckout, { timeout: 10000 }).should(
        'be.visible',
      )
      cy.get(elCheckoutPage.buttonCouponAddCheckout, { timeout: 10000 }).click({
        force: true,
      })
    }
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elCheckoutPage.linkCouponCheckout).click()
      cy.get(elCheckoutPage.buttonCouponAddCheckout, { timeout: 10000 }).should(
        'be.visible',
      )
      cy.get(elCheckoutPage.buttonCouponAddCheckout, { timeout: 10000 }).click({
        force: true,
      })
    }
    cy.wait(4000)
  }

  clickInStore() {
    cy.get(elCheckoutPage.btnInStore).click({ force: true })
  }

  searchAddress() {
    cy.get(elCheckoutPage.btnSearchAddress).click({ force: true })
  }

  chooseStore() {
    cy.get(elCheckoutPage.btnChooseStore).click({ force: true })
  }

  confirmStore() {
    cy.get(elCheckoutPage.btnConfirmStore).click({ force: true })
  }

  validateStore() {
    cy.get(elCheckoutPage.validateStorebtn, { timeout: 10000 }).should(
      'be.visible',
    )
  }
  validateModalPix() {
    cy.get(elCheckoutPage.modalPix, { timeout: 10000 }).should('be.visible')
  }

  selectPixOption() {
    cy.get(elCheckoutPage.selectPixOption).click({ force: true })
  }
}

export default new CheckoutPage()
