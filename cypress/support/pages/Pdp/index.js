/// <reference types="cypress" />

const elPdpPage = require('./elements').ELEMENTS

class PdpPage {
  urlPDP(productLink) {
    cy.visit(productLink)
    cy.wait(5000)
  }

  clickBtnAddToCart() {
    cy.wait(5000)
    cy.get(elPdpPage.buyButton).first().should('exist').click({ force: true })
    cy.wait(5000)
  }

  clickConfirmModalVariation() {
    cy.get(elPdpPage.buttonOpenModalVariation)
      .first()
      .should('exist')
      .click({ force: true })
    cy.wait(5000)
    cy.get(elPdpPage.buttonConfirmModalVariation)
      .first()
      .should('exist')
      .click({ force: true })
    cy.wait(5000)
  }

  typeZipCode(zipCode) {
    cy.wait(1000)
    cy.get(elPdpPage.shipping.input).then(($input) => {
      cy.wrap($input).focus()
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
    cy.wait(5000)
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
    cy.wait(5000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 600)
      cy.wait(3000)
    }
    cy.get(elPdpPage.textLinkPaymentOptionsModal).first().click({ force: true })
  }

  clickBtnClosePaymentOptionsModal() {
    cy.get(elPdpPage.buttonClosePaymentOptionsModal).click({ force: true })
  }
}

export default new PdpPage()
