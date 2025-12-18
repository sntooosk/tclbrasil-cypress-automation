/// <reference types="cypress" />

const elCross = require('./elements').ELEMENTS

class CrossPage {
  closeLeadCaptureModal() {
    cy.get('body').then((body) => {
      if (body.find(elCross.buttonCloseCapLeadModal).length > 0) {
        cy.get(elCross.buttonCloseCapLeadModal).should('be.visible').click()
      }
    })
  }
}

export default new CrossPage()
