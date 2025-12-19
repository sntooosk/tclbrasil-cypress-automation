/// <reference types="cypress" />

const elLogin = require('./elements').ELEMENTS

class Login {
  typeEmail(validEmail) {
    cy.get(elLogin.inputEmail).should('exist')
    cy.get(elLogin.inputEmail).type(validEmail)
  }

  typePassword(validPassword) {
    cy.get(elLogin.inputPassword).should('exist')
    cy.get(elLogin.inputPassword).type(validPassword)
  }

  clickBtnEnter() {
    cy.get(elLogin.btnEnter).should('be.visible').click({ force: true })
    cy.wait(10000)
  }
}
export default new Login()
