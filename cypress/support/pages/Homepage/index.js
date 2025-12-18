/// <reference types="cypress" />

const elHomepage = require('./elements').ELEMENTS

/**
 * Clear and type text in a input element.
 * @param {string} element - The element selector to type text.
 * @param {string} text - The text to type in the element.
 */

class HomePage {
  accessHomepage(siteTitle) {
    cy.visit('/')
    cy.title().should('contain', siteTitle)
  }

  clickMenuCategories() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elHomepage.menuCategoriesMobile)
        .first()
        .should('exist')
        .click({ force: true })
    } else {
      cy.get(elHomepage.menuCategories)
        .first()
        .should('exist')
        .trigger('mouseover', { force: true })
    }
  }

  validateLinksOnMenuCategories(itemCategoryText) {
    cy.get(elHomepage.itemCategoryMenu).contains(itemCategoryText)
  }

  clickProductFromShelf() {
    cy.wait(15000)
    if (Cypress.env('environment') == 'mobile') {
      cy.wait(9000)
      cy.scrollTo(0, 1200)
      cy.get(elHomepage.itemShelf).click({ force: true })
      cy.wait(8000)
    } else if (Cypress.env('environment') == 'desktop') {
      cy.wait(9000)
      cy.scrollTo(0, 1000)
      cy.get(elHomepage.itemShelf).click({ force: true })
      cy.wait(8000)
    }
  }

  scrollPage() {
    cy.wait(5000)
    cy.scrollTo('bottom')
    cy.wait(4000)
    cy.get(elHomepage.formFooterNewslleter).scrollIntoView()
  }

  typeFirstNameProfile(firstName) {
    this.clearAndType(elHomepage.inputFirstName, firstName)
  }

  sendNewsletterForm() {
    cy.get(elHomepage.formSubmitButton).click({ force: true })
  }

  validateMessage() {
    cy.get(elHomepage.sucessMessage).should(
      'have.text',
      'Cadastro realizado com sucesso!',
    )
  }

  clearAndType(element, text) {
    cy.get(element).type(text)
  }

  typeEmail(validEmail) {
    cy.get(elHomepage.inputClientEmail).should('exist')
    cy.get(elHomepage.inputClientEmail).type(validEmail)
  }
}
export default new HomePage()
