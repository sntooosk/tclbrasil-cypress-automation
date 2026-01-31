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
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 1200)
      cy.get(elHomepage.itemShelf, { timeout: 20000 })
        .should('be.visible')
        .click({ force: true })
    } else if (Cypress.env('environment') == 'desktop') {
      cy.scrollTo(0, 1000)
      cy.get(elHomepage.itemShelf, { timeout: 20000 })
        .should('be.visible')
        .click({ force: true })
    }
  }

  scrollPage() {
    cy.scrollTo('bottom')
    cy.get(elHomepage.formFooterNewslleter).scrollIntoView()
    cy.get(elHomepage.formFooterNewslleter).should('be.visible')
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
      'Obrigado por se inscrever na nossa newsletter!',
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
