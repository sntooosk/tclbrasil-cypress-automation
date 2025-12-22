/// <reference types="cypress" />

const elHeader = require('./elements').ELEMENTS

class Header {
  clickBtnLogin() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elHeader.buttonLoginMobile, { timeout: 15000 })
        .first()
        .should('be.visible')
        .click({ force: true })
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
  clickIconCard() {
    cy.get(elHeader.buttonCart).should('be.visible').click({ force: true })
  }

  typeSearchBar(product) {
    cy.get(elHeader.inputSearchBar)
      .first()
      .should('be.visible')
      .type(`${product}{enter}`, { force: true })
    cy.get('[data-fs-product-listing-results="true"]', {
      timeout: 15000,
    }).should('be.visible')
  }
}

export default new Header()
