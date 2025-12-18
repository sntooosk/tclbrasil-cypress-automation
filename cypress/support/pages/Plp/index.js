/// <reference types="cypress" />

const elPlpPage = require('./elements').ELEMENTS

class PLPPage {
  visitPLP(linkPLP, siteTitle) {
    cy.visit(linkPLP)
    cy.title().should('contain', siteTitle)
    cy.wait(15000)
  }

  clickFnSrcResult(product) {
    cy.wait(12000)
    cy.get(elPlpPage.imageSourceResult(product))
      .first()
      .should('be.visible')
      .click({ force: true })
    cy.wait(10000)
  }

  clickFnSrcResultCompreJunto() {
    cy.wait(12000)
    cy.get(elPlpPage.imageSourceResultCompreJunto)
      .first()
      .should('be.visible')
      .click({ force: true })
    cy.wait(20000)
  }

  validateResultEmpty() {
    cy.get(elPlpPage.labelResultEmpty).should('be.visible')
  }

  searchUnavailableProduct() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 700)
      cy.wait(4000)
      cy.get(elPlpPage.unavailableProductMobile).should(
        'have.text',
        'Temporariamente fora de estoque',
      )
    } else if (Cypress.env('environment') == 'desktop') {
      cy.scrollTo(0, 320)
      cy.get(elPlpPage.unavailableProductDesktop).should(
        'have.text',
        'Temporariamente fora de estoque',
      )
    }
  }
  clickToggleFreeShipping() {
    cy.get(elPlpPage.btnToggleFreeShipping).click()
  }

  validateTagToggleFreeShipping() {
    cy.wait(15000)
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elPlpPage.tagCardFreeShipping).should('be.visible')
    } else {
      cy.get(elPlpPage.tagCardFreeShippingMobile).should('be.visible')
    }
  }

  accessPlpPageFromMenu() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPlpPage.menuMobile).click()
      cy.get(elPlpPage.subMenuMobile).click({ force: true })
      cy.get(elPlpPage.categoryMenuMobile).click({ force: true })
      cy.url().should(
        'include',
        '/eletrodomesticos/geladeiras---refrigeradores',
      )
    } else if (Cypress.env('environment') == 'desktop') {
      cy.get(elPlpPage.menuDesktop).trigger('mouseover')
      cy.get(elPlpPage.subMenuDesktop).trigger('mouseover')
      cy.get(elPlpPage.categoryMenuDesktop)
        .should('be.visible')
        .click({ force: true })
      cy.url().should(
        'include',
        '/eletrodomesticos/geladeiras---refrigeradores',
      )
    }
  }

  selectProductFromPlp() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPlpPage.selectItemFromPlpMobile).click()
    } else if (Cypress.env('environment') == 'desktop') {
      cy.get(elPlpPage.selectItemFromDesktop).click({ force: true })
    }
  }

  clickCompareCard(id_compare) {
    cy.get(elPlpPage.checkBoxCompareCard(id_compare)).check({ force: true })
  }

  clickBtnCompareModal() {
    cy.wait(5000)
    cy.get(elPlpPage.btnCompareModal)
      .should('be.visible')
      .click({ force: true })
  }

  checkTitleProductComparisonPage() {
    cy.wait(15000)
    cy.get(elPlpPage.titleProductComparisonPage).should(
      'have.text',
      'Сomparar 2 produtos',
    )
  }

  checkFirstImageProductComparisonPage() {
    cy.get(elPlpPage.firstImageProductComparisonPage).should('be.visible')
  }

  checkSecondImageProductComparisonPage() {
    cy.get(elPlpPage.secondImageProductComparisonPage).should('be.visible')
  }

  clickFirstCardProduct() {
    cy.wait(2000)
    cy.get(elPlpPage.firstCardProduct).first().click({ force: true })
  }
  clickBySku(sku) {
    cy.get(elPlpPage.productCardBySku(sku))
      .should('be.visible')
      .find('a[data-fs-custom-product-card-link="true"]')
      .click({ force: true })
  }
  validateProductCard() {
    cy.get(elPlpPage.plpResults).find('article').first().should('be.visible')
  }

  openFilterAccordion(title) {
    cy.contains('button[data-fs-button="true"] span', title)
      .parents('button')
      .click({ force: true })
  }

  selectFilter(value) {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get(elPlpPage.filterCheckboxByValue(value))
      .scrollIntoView()
      .check({ force: true })
  }

  validateFilterInUrl(value) {
    cy.url().should('include', value)
  }

  // ORDENAÇÃO CORRETA (SELECT)
  selectOrderBy(value) {
    cy.get(elPlpPage.orderByDropdown).should('be.visible').select(value)
  }

  // eslint-disable-next-line no-dupe-class-members
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
}
export default new PLPPage()
