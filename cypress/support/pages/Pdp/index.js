/// <reference types="cypress" />

const elPdpPage = require('./elements').ELEMENTS

class PdpPage {
  urlPDP(productLink) {
    cy.visit(productLink)
    cy.get(elPdpPage.buyButton, { timeout: 15000 }).should('be.visible')
  }

  clickBtnAddToCart() {
    cy.get(elPdpPage.buyButton, { timeout: 15000 })
      .first()
      .should('be.visible')
      .click({ force: true })
  }

  clickConfirmModalVariation() {
    cy.get(elPdpPage.buttonOpenModalVariation)
      .first()
      .should('exist')
      .click({ force: true })
    cy.get(elPdpPage.buttonConfirmModalVariation, { timeout: 10000 })
      .first()
      .should('be.visible')
      .click({ force: true })
  }

  typeZipCode(zipCode) {
    cy.get(elPdpPage.shipping.input, { timeout: 10000 }).then(($input) => {
      cy.wrap($input).should('be.visible').focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(zipCode, { force: true })
    })
  }

  clickBtnCalcShipping() {
    cy.get(elPdpPage.shipping.button).click({ force: true })
  }

  validatePrice() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 150)
    }
    cy.get(elPdpPage.spot, { timeout: 10000 }).should('be.visible')
    cy.get(elPdpPage.pixText, { timeout: 10000 }).should('exist')
    cy.get(elPdpPage.installmentText, { timeout: 10000 }).should('be.visible')
    cy.get(elPdpPage.installmentButton, { timeout: 10000 })
      .should('exist')
      .and('be.enabled')
  }

  validateGalleryVisibility() {
    cy.get(elPdpPage.gallery.mainImage).should('be.visible')
  }

  validateGalleryNavigation() {
    cy.get('body').then(($body) => {
      const thumbnails = $body.find(elPdpPage.gallery.thumbnails)

      if (thumbnails.length) {
        cy.wrap(thumbnails).each(($thumb) => {
          cy.wrap($thumb).should('exist').click()
          cy.get(elPdpPage.gallery.mainImage).should('be.visible')
        })
      } else {
        cy.get(elPdpPage.gallery.mainImage).should('be.visible')
      }
    })
  }

  validateShippingDataTable() {
    cy.get(elPdpPage.shipping.tableRow).should('be.visible')
  }

  validateShippingDataTableNotAvailable() {
    cy.get(elPdpPage.shipping.error).should('be.visible')
    cy.get(elPdpPage.shipping.tableRow).should('not.exist')
  }

  addProductFromMinishelf() {
    cy.get(elPdpPage.minishelfProduct)
      .should('be.visible')
      .click({ force: true })
  }

  typeNameNotification(firstName) {
    cy.get(elPdpPage.inputNameNotification).type(firstName)
  }

  typeEmailNotification(email) {
    cy.get(elPdpPage.inputEmailNotification).type(email)
  }

  clickBtnRegisterNotification() {
    cy.get(elPdpPage.buttonRegisterNotification).click()
  }

  validateMessageNotifyMe() {
    cy.get(elPdpPage.messageNotifyMe)
      .should('contain.text', 'Registrado com sucesso!')
      .and(
        'contain.text',
        'Você será notificado por e-mail quando este produto voltar ao estoque.',
      )
  }

  validateSizeButtonsNavigation() {
    cy.get(elPdpPage.sizeWrapper)
      .find(elPdpPage.sizeOption)
      .should('have.length.greaterThan', 0)
      .then(($options) => {
        const total = $options.length

        Cypress._.times(total, (i) => {
          cy.get(elPdpPage.sizeWrapper).find(elPdpPage.sizeOption).eq(i).click() // sem force

          cy.location('pathname').should('not.be.empty')
          cy.get(elPdpPage.productName).should('be.visible')
        })
      })
  }

  clickTextPaymentOptionsModal() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 600)
    }
    cy.get(elPdpPage.textLinkPaymentOptionsModal, { timeout: 10000 })
      .first()
      .should('be.visible')
      .click({ force: true })
  }

  validatePaymentOptionsLanguage() {
    cy.get(elPdpPage.textTitlePaymentOptionsModal).should('be.visible')
    cy.should('have.text', 'Formas de Pagamento')
  }

  clickBtnClosePaymentOptionsModal() {
    cy.get(elPdpPage.buttonClosePaymentOptionsModal).click({ force: true })
  }
}

export default new PdpPage()
