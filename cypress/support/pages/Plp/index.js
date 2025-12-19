/// <reference types="cypress" />

const elPlpPage = require('./elements').ELEMENTS

class PLPPage {
  getProductNameBySku(sku) {
    const catalog = [
      ...(Cypress.env('produto') || []),
      ...(Cypress.env('produto-voltagem') || []),
    ]

    return catalog.find((item) => item.sku === sku)?.name || sku
  }

  visitPLP(linkPLP, siteTitle) {
    cy.visit(linkPLP)
    cy.title().should('contain', siteTitle)
    cy.wait(15000)
  }

  clickBySku(sku) {
    const productName = this.getProductNameBySku(sku)

    cy.contains(elPlpPage.productCardName, productName, {
      matchCase: false,
      timeout: 15000,
    })
      .parents(elPlpPage.productCard)
      .first()
      .find('a')
      .first()
      .click({ force: true })
  }

  validateProductCard() {
    cy.get(elPlpPage.plpResults)
      .find(elPlpPage.productCard)
      .first()
      .should('be.visible')
  }

  openFilterAccordion(title) {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPlpPage.openFilter).should('be.visible').click({ force: true })
    }
    cy.contains('button[data-fs-button="true"] span', title).then(
      ($element) => {
        cy.wrap($element).parents('button').first().click({ force: true })
      },
    )
  }

  selectFilter(value) {
    cy.get(elPlpPage.filterCheckboxByValue(value)).then(($checkbox) => {
      cy.wrap($checkbox).scrollIntoView()
      cy.wrap($checkbox).check({ force: true })
    })
    cy.wait(500)
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
