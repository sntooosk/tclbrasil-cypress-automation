/// <reference types="cypress" />

const elLogin = require('./elements').ELEMENTS

class Login {
  typeEmail(validEmail) {
    cy.get(elLogin.inputEmail).should('exist')
    cy.get(elLogin.inputEmail).focus()
    cy.get(elLogin.inputEmail).type(validEmail)
  }

  typePassword(validPassword) {
    cy.get(elLogin.inputPassword).should('exist')
    cy.get(elLogin.inputPassword).focus()
    cy.get(elLogin.inputPassword).type(validPassword)
  }

  clickBtnEnter() {
    cy.get(elLogin.btnEnter, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true })
  }
}
export default new Login()
