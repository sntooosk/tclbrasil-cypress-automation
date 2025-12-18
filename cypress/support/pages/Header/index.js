/// <reference types="cypress" />

const elHeader = require('./elements').ELEMENTS
const elMyAccount = require('../MyAccount/elements').ELEMENTS

class Header {
  clickBtnLogin() {
    if (Cypress.env('environment') == 'mobile') {
      cy.wait(15000)
      cy.get(elHeader.buttonLoginMobile).first().click({ force: true })
    } else if (Cypress.env('environment') == 'desktop') {
      cy.get(elHeader.buttonLogin)
        .first()
        .should('be.visible')
        .click({ force: true })
    }
  }

  validateMsgLogin(msg) {
    cy.get(elHeader.labelMsgInvalidLogin)
      .should('be.visible')
      .and('have.text', msg)
  }

  validateUserLogged(status, cookieAuth) {
    switch (status) {
      case 'logged':
        if (Cypress.env('environment' == 'desktop')) {
          cy.get(elHeader.buttonLoggedUser).should('be.visible')
        }
        cy.getCookie(cookieAuth).should('exist')
        break
      case 'not logged':
        cy.getCookie(cookieAuth).should('not.exist')
    }
  }

  clickBtnLoggedUser() {
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elHeader.buttonLoggedUser)
        .first()
        .should('be.visible')
        .click({ force: true })
    } else {
      cy.get(elHeader.buttonLoggedUserMobile)
        .should('be.visible')
        .click({ force: true })
    }
  }

  clickBtnLogoff() {
    if (Cypress.env('environment') == 'desktop') {
      cy.xpath(elHeader.buttonLogoff)
        .should('be.visible')
        .click({ force: true })
    } else {
      cy.scrollTo(0, 200)
      cy.get(elMyAccount.menuLinkExit)
        .contains('Sair')
        .should('be.visible')
        .click({ force: true })
    }
  }

  clickRecoveryPassword() {
    cy.get(elHeader.buttonRecoveryPassword)
      .should('be.visible')
      .click({ force: true })
  }
  clickIconCard() {
    cy.get(elHeader.buttonCart).should('be.visible').click({ force: true })
  }
  typeEmailRecoveryPassword(email) {
    cy.get(elHeader.inputEmailRecovery).should('be.visible').type(email)
  }

  typeNewPasswordRecoveryPassword(newPassword) {
    cy.get(elHeader.inputNewPassword).should('be.visible').type(newPassword)
  }

  typeConfirmNewPasswordRecoveryPassword(newPassword) {
    cy.get(elHeader.inputConfirmNewPassword)
      .should('be.visible')
      .type(newPassword)
  }

  clickBtnSendRecoveryPassword() {
    cy.get(elHeader.buttonSend).should('be.visible').click({ force: true })
  }

  typeSearchBar(product) {
    cy.get(elHeader.inputSearchBar)
      .first()
      .should('be.visible')
      .type(`${product}{enter}`, { force: true })
    cy.wait(15000)
  }

  typeSearchBarPLP(product) {
    if (Cypress.env('environment') == 'desktop') {
      cy.wait(2500)
      cy.get(elHeader.inputSearchBarMobile).first().clear({ force: true })
      cy.get(elHeader.inputSearchBarMobile)
        .first()
        .should('be.enabled')
        .type(`${product}{enter}`, { force: true })
      cy.wait(15000)
    } else {
      cy.wait(2500)
      cy.get(elHeader.inputSearchBarMobilePLP).first().clear({ force: true })
      cy.get(elHeader.inputSearchBarMobilePLP)
        .first()
        .should('be.enabled')
        .type(`${product}{enter}`, { force: true })
      cy.wait(15000)
    }
  }
}

export default new Header()
