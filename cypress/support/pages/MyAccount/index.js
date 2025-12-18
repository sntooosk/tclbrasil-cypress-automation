/// <reference types="cypress" />
const elMyAccount = require('./elements').ELEMENTS

class MyAccount {
  selectProfile() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.menuLinkProfile)
      .should('be.visible')
      .click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  accessMyAccountPage() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.visit('/account#/')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  visitAddress() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.visit('/account#/addresses')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  visitMyOrders() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.visit('/account#/orders')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  visitProfile() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.visit('/account#/profile')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  selectLogout() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.menuLinkExit).should('be.visible').click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  clickNewAddress() {
    cy.xpath(elMyAccount.buttonAddNewAddress)
      .should('exist')
      .click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  clickEditAddress() {
    cy.xpath(elMyAccount.buttonEditAddress)
      .first()
      .should('exist')
      .click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
  }

  clickEditMoreDataAdress() {
    cy.xpath(elMyAccount.labelEditAddress)
      .should('exist')
      .click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500)
  }

  clickEditPersonalData() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.buttonEditPersonalData).contains('Editar').click()
  }

  selectState(state) {
    cy.get(elMyAccount.comboBoxState).select(state, { force: true })
  }

  selectGender(gender) {
    cy.get(elMyAccount.comboBoxGender).select(gender, { force: true })
  }

  typeZipCode(zipCode) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.get(elMyAccount.inputZipCode).then(($input) => {
      cy.wrap($input).focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(zipCode)
    })
  }

  selectCity(city) {
    cy.get(elMyAccount.comboBoxCity).focus()
    cy.get(elMyAccount.comboBoxCity).select(city, { force: true })
  }

  typeStreet(street) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.inputStreet).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(street, { force: true })
    })
  }

  typeNumber(number) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.get(elMyAccount.inputNumber).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(number, { force: true })
    })
  }

  typeComplement(complement) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.get(elMyAccount.inputComplement).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(complement, { force: true })
    })
  }

  typeNeighborhood(neighborhood) {
    cy.get(elMyAccount.inputNeighborhood).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(neighborhood, { force: true })
    })
  }

  typeReceiverName(receiverName) {
    cy.get(elMyAccount.inputReceiverName).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(receiverName, { force: true })
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

  typeHomePhone(areaCodePhone, phoneFaker) {
    cy.get(elMyAccount.inputHomePhone).then(($input) => {
      cy.wrap($input).should('be.enabled').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(areaCodePhone, phoneFaker, { force: true })
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.buttonSaveNewAddress)
      .contains('Adicionar endereço')
      .should('exist')
      .dblclick({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  clickSaveEditedAddress() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.buttonSaveEditedAddress)
      .contains('Salvar endereço')
      .should('exist')
      .dblclick({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  clickDeleteAddress() {
    cy.xpath(elMyAccount.btnDeleteAddress)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2500)
  }

  validateMessageRemoveAddress() {
    cy.get(elMyAccount.messageInfo).should(
      'have.text',
      'Suas informações foram salvas com sucesso.',
    )
  }

  clickSavePersonalData() {
    cy.xpath(elMyAccount.buttonSavePersonalData)
      .should('exist')
      .click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
  }

  validateAddressTable() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get(elMyAccount.tableMyAddress).should('be.visible')
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

  validateMyOrdersPage() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.url().should('include', 'orders')
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

  validateDeletedAddressStreet(street) {
    cy.get(elMyAccount.lbl_MyAddressSavedStreet)
      .first()
      .should('not.have.text', street)
  }

  validateAddressSavedCity(city) {
    cy.get(elMyAccount.labelMyAddressSavedCity)
      .first()
      .should('have.text', city)
  }

  validateAddressSavedState(state) {
    cy.get(elMyAccount.labelMyAddressSavedState)
      .first()
      .should('have.text', state, { matchCase: false })
  }

  validateAddressSavedCountry(country) {
    cy.get(elMyAccount.labelMyAddressSavedCountry)
      .first()
      .should('have.text', country)
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000)
    switch (local) {
      case 'myaccount':
        cy.get(elMyAccount.buttonPopupExit).contains('Sair').click()
        break

      case 'login':
        // login em mobile utiliza o modal e desktop usa o header sem popup
        if (Cypress.env('environment') == 'mobile') {
          cy.get(elMyAccount.buttonPopupExit).contains('Sair').click()
        }
        break
    }
  }

  myAccountClickBtnExit() {
    cy.get(elMyAccount.clickBtnExit).click()
  }
}

export default new MyAccount()
