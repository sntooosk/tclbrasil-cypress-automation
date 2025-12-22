/// <reference types="cypress" />
const elMyAccount = require('./elements').ELEMENTS

class MyAccount {
  waitForAccountShell() {
    cy.get(elMyAccount.clickBtnExit, { timeout: 15000 }).should('be.visible')
  }

  waitForAddressSection() {
    cy.get('body', { timeout: 15000 }).then(($body) => {
      if ($body.find(elMyAccount.tableMyAddress).length) {
        cy.get(elMyAccount.tableMyAddress).should('be.visible')
      } else {
        cy.xpath(elMyAccount.buttonAddNewAddress).should('exist')
      }
    })
  }

  accessMyAccountPage() {
    cy.visit('/account#/')
    this.waitForAccountShell()
  }

  visitAddress() {
    cy.visit('/account#/addresses')
    this.waitForAddressSection()
  }

  visitMyOrders() {
    cy.visit('/account#/orders')
    cy.url({ timeout: 15000 }).should('include', '/orders')
  }

  visitProfile() {
    cy.visit('/account#/profile')
    this.waitForAccountShell()
  }

  clickNewAddress() {
    cy.xpath(elMyAccount.buttonAddNewAddress)
      .should('exist')
      .click({ force: true })
    cy.get(elMyAccount.inputZipCode, { timeout: 10000 }).should('be.visible')
  }

  clickEditAddress() {
    cy.xpath(elMyAccount.buttonEditAddress)
      .first()
      .should('exist')
      .click({ force: true })
    cy.get(elMyAccount.inputZipCode, { timeout: 10000 }).should('be.visible')
  }

  clickDeleteAddress() {
    this.waitForAddressSection()
    cy.xpath(elMyAccount.btnDeleteAddress)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
    this.waitForAddressSection()
  }

  clickEditPersonalData() {
    cy.get(elMyAccount.buttonEditPersonalData, { timeout: 10000 })
      .contains('Editar')
      .click()
  }

  selectGender(gender) {
    cy.get(elMyAccount.comboBoxGender).select(gender, { force: true })
  }

  typeZipCode(zipCode) {
    cy.get(elMyAccount.inputZipCode, { timeout: 10000 }).then(($input) => {
      cy.wrap($input).focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(zipCode)
    })
  }

  typeNumber(number) {
    cy.get(elMyAccount.inputNumber, { timeout: 10000 }).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(number, { force: true })
    })
  }

  typeComplement(complement) {
    cy.get(elMyAccount.inputComplement, { timeout: 10000 }).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(complement, { force: true })
    })
  }

  typeName(name) {
    cy.get(elMyAccount.inputName).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(name, { force: true })
    })
  }

  typeLastName(lastName) {
    cy.get(elMyAccount.inputLastName).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(lastName, { force: true })
    })
  }

  typeDocument(document) {
    cy.get(elMyAccount.inputDocument).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(document, { force: true })
    })
  }

  typeHomePhone(phone) {
    cy.get(elMyAccount.inputHomePhone).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(phone, { force: true })
    })
  }

  typeBirthDate(birthDate) {
    cy.get(elMyAccount.inputBirthDate).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(birthDate, { force: true })
    })
  }

  clickSaveNewAddress() {
    cy.get(elMyAccount.buttonSaveNewAddress, { timeout: 10000 })
      .contains('Adicionar endereço')
      .should('exist')
      .dblclick({ force: true })
    this.waitForAddressSection()
  }

  clickSaveEditedAddress() {
    cy.get(elMyAccount.buttonSaveEditedAddress, { timeout: 10000 })
      .contains('Salvar endereço')
      .should('exist')
      .dblclick({ force: true })
    this.waitForAddressSection()
  }

  validateBodyEmptyEndereco() {
    cy.get(elMyAccount.enderecoEmpty).should(
      'have.text',
      'Você não tem nenhum endereço cadastrado!',
    )
  }

  clickSavePersonalData() {
    cy.xpath(elMyAccount.buttonSavePersonalData)
      .should('exist')
      .click({ force: true })
    cy.get(elMyAccount.labelNameSaved, { timeout: 15000 }).should('exist')
  }

  validateAddressTable() {
    cy.get(elMyAccount.tableMyAddress, { timeout: 10000 }).should('be.visible')
  }

  validateAddressSavedStreet(street) {
    cy.get(elMyAccount.labelMyAddressSavedStreet)
      .first()
      .should('have.text', street)
  }

  validateAddressSavedNumber(number) {
    cy.get(elMyAccount.labelMyAddressSavedNumber)
      .first()
      .should('have.text', number)
  }

  validateAddressSavedComplement(complement) {
    cy.get(elMyAccount.labelMyAddressSavedComplement)
      .first()
      .should('have.text', complement)
  }

  validateAddressSavedZipCode(zipCode) {
    cy.get(elMyAccount.labelMyAddressSavedZipCode)
      .first()
      .should('have.text', zipCode)
  }

  validateAddressSavedCity(city) {
    cy.get(elMyAccount.labelMyAddressSavedCity)
      .first()
      .should('have.text', city)
  }

  validateAddressSavedCountry(country) {
    cy.get(elMyAccount.labelMyAddressSavedCountry)
      .first()
      .should('have.text', country)
  }

  validateMyOrdersPage() {
    cy.url().should('include', 'orders')
  }

  validateNameSaved(name) {
    cy.get(elMyAccount.labelNameSaved).first().should('have.text', name)
  }

  validateLastNameSaved(lastNameSaved) {
    cy.get(elMyAccount.labelLastNameSaved)
      .first()
      .should('have.text', lastNameSaved)
  }

  validateDocumentSaved(documentSaved) {
    cy.get(elMyAccount.labelDocumentSaved)
      .first()
      .should('have.text', documentSaved)
  }

  validateGenderSaved(genderSaved) {
    cy.get(elMyAccount.labelGenderSaved)
      .first()
      .should('have.text', genderSaved)
  }

  validateBirthDate(birthDate) {
    cy.get(elMyAccount.labelBirthDate).first().should('have.text', birthDate)
  }

  validateHomePhone(phone) {
    cy.get(elMyAccount.labelHomePhone).first().should('have.text', phone)
  }

  clickConfirmExitPopup(local) {
    switch (local) {
      case 'myaccount':
        cy.get(elMyAccount.buttonPopupExit, { timeout: 10000 })
          .contains('Sair')
          .click()
        break
      case 'login':
        if (Cypress.env('environment') == 'mobile') {
          cy.get(elMyAccount.buttonPopupExit, { timeout: 10000 })
            .contains('Sair')
            .click()
        }
        break
    }
  }

  myAccountClickBtnExit() {
    cy.get(elMyAccount.clickBtnExit).click()
  }
}

export default new MyAccount()
