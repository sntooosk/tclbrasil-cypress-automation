/// <reference types="cypress" />

const elPlpPage = require('./elements').ELEMENTS

class PLPPage {
  visitPLP(linkPLP, siteTitle) {
    cy.visit(linkPLP)
    cy.title().should('contain', siteTitle)
    cy.get(elPlpPage.plpResults, { timeout: 15000 }).should('be.visible')
  }

  clickBySku(sku) {
    cy.get(elPlpPage.productCardBySku(sku))
      .should('be.visible')
      .find('a[data-fs-custom-product-card-link="true"]')
      .first()
      .click({ force: true })
  }

  validateProductCard() {
    cy.get(elPlpPage.plpResults).find('article').first().should('be.visible')
  }

  openFilterAccordion(title) {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPlpPage.openFilter).should('be.visible').click({ force: true })
    }
    cy.contains('button[data-fs-button="true"] span', title)
      .parents('button')
      .click({ force: true })
  }

  selectFilter(value) {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get(elPlpPage.filterCheckboxByValue(value))
      .scrollIntoView()
      .check({ force: true })
    cy.get(elPlpPage.plpResults).should('be.visible')
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPlpPage.buttonApplyFilter)
        .should('be.visible')
        .click({ force: true })
    }
  }
  validateFilterInUrl(value) {
    cy.url().should('include', value)
  }

  selectOrderBy(value) {
    cy.get(elPlpPage.orderByDropdown).should('be.visible').select(value)
  }

  validatePageOrdenation(value) {
    const map = {
      Lançamento: 'sort=release_desc',
      Desconto: 'sort=discount_desc',
      'Maior Preço': 'sort=price_desc',
      'Menor Preço': 'sort=price_asc',
      'Nome, A-Z': 'sort=name_asc',
      'Nome, Z-A': 'sort=name_desc',
    }

    cy.url().should('include', map[value])
  }

  validateResultEmpty() {
    cy.get(elPlpPage.labelResultEmpty).should('be.visible')
  }
}
export default new PLPPage()
