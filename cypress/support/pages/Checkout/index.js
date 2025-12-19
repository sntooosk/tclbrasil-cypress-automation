/// <reference types="cypress" />

const elCheckoutPage = require('./elements').ELEMENTS

class CheckoutPage {
  clearAndType(element, text) {
    cy.get(element)
      .should('be.enabled')
      .clear({ force: true })
      .type(text)
  }

  typeClientPreEmailProfile(clientPreEmail) {
    cy.wait(10000)
    cy.get(elCheckoutPage.inputClientPreEmail)
      .should('be.visible')
      .type(clientPreEmail)
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

  typePhoneProfile(phone) {
    this.clearAndType(elCheckoutPage.inputPhone, phone)
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

  typeZipCode(zipCode) {
    cy.wait(5000)
    cy.get(elCheckoutPage.inputZipCode)
      .last()
      .should('be.enabled')
      .clear({ force: true })
      .type(zipCode, { force: true })
    cy.wait(3000)
  }

  typeFullNameShipping(fullName) {
    this.clearAndType(elCheckoutPage.inputFullName, fullName)
  }

  typeCustomNumberShipping() {
    cy.wait(5000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 100)
    }
    cy.get(elCheckoutPage.inputCustomNumber)
      .should('be.visible')
      .type('1111111111', { force: true })
  }

  clickBtnGoToPayment() {
    cy.get(elCheckoutPage.buttonGoToPayment)
      .should('be.enabled')
      .click({ force: true })
  }

  selectPixOption() {
    cy.get(elCheckoutPage.selectPixOption)
      .should('be.visible')
      .click({ force: true })
  }

  clickBtnGoToBuy() {
    cy.get(elCheckoutPage.buttonBuy).should('be.enabled').click({ force: true })
  }

  validateModalPix() {
    cy.get(elCheckoutPage.modalPix).should('be.visible')
  }

  validateFirstNameAlert() {
    cy.get(elCheckoutPage.labelFirstNameAlert).should('be.visible')
  }

  validateLastNameAlert() {
    cy.get(elCheckoutPage.labelLastNameAlert).should('be.visible')
  }

  validateDocumentAlert() {
    cy.get(elCheckoutPage.labelDocumentAlert).should('be.visible')
  }

  validatePhoneAlert() {
    cy.get(elCheckoutPage.labelPhoneAlert).should('be.visible')
  }
}

export default new CheckoutPage()
