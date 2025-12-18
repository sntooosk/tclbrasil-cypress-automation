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

  viewPortPDPIphoneXR() {
    cy.viewport('iphone-xr')
  }

  viewPortPDPSamsungS10() {
    cy.viewport('samsung-s10')
  }

  urlHomeIphoneXR(siteTitle) {
    cy.viewport('iphone-xr')
    cy.visit('/')
    cy.title().should('contain', siteTitle)
  }

  hoverAboutElectrolux() {
    cy.xpath(elHomepage.menuAboutElectrolux())
      .should('exist')
      .trigger('mouseover', { force: true })
  }

  clickAboutElectrolux() {
    cy.xpath(elHomepage.menuAboutElectroluxMobile()).should('exist').click()
  }

  clickAtendimentoElectrolux() {
    cy.xpath(elHomepage.menuAtendimentoElectroluxMobile())
      .should('exist')
      .click()
  }

  validateAboutMenuLinks(itemMenuAbout, linkPage) {
    cy.xpath(elHomepage.itemMenuAboutElectrolux(itemMenuAbout)).then((el) => {
      expect(el).have.attr('href').contain(linkPage)
    })
  }

  hoverCentralDeAtencionElectrolux() {
    cy.xpath(elHomepage.menuCentralDeAtencionElectrolux())
      .should('exist')
      .trigger('mouseover', { force: true })
  }

  validateAtendimentoMenuLinks(itemMenuCentralAtencion, linkPage) {
    cy.xpath(
      elHomepage.itemMenuCentralAtencionElectrolux(itemMenuCentralAtencion),
    ).then((el) => {
      expect(el).have.attr('href').contain(linkPage)
    })
  }

  validateFooterLinks(itemFooterText, itemFooterLink) {
    cy.xpath(elHomepage.itemFooter(itemFooterText)).then((el) => {
      expect(el).have.attr('href').contain(itemFooterLink)
    })
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

  validateLinksOnHeaderMenuCategories(itemCategoryText, itemCategoryLink) {
    cy.log(elHomepage.itemHeaderMenu(itemCategoryText, itemCategoryLink))
    cy.xpath(elHomepage.itemHeaderMenu(itemCategoryText, itemCategoryLink))
      .first()
      .should('be.visible')
  }

  validateLinkHeaderToHome(linkHeaderToHome) {
    cy.get(elHomepage.HEADER.headerEluxCOLogo).then((el) => {
      expect(el).have.attr('href').eq(linkHeaderToHome)
    })
  }

  validateLinkHeaderToHomeMobile(linkHeaderToHome) {
    cy.get(elHomepage.HEADER.headerEluxCOLogoMobile).then((el) => {
      expect(el).have.attr('href').eq(linkHeaderToHome)
    })
  }

  closePromoModal() {
    cy.get('body').then((body) => {
      if (body.find(elHomepage.btnCloseModal).length > 0) {
        cy.get(elHomepage.btnCloseModal).should('be.visible').click()
      }
    })
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
    cy.get(element).then(($element) => {
      cy.wrap($element).type(text)
    })
  }

  typeEmail(validEmail) {
    cy.get(elHomepage.inputClientEmail).should('exist')
    cy.get(elHomepage.inputClientEmail).type(validEmail)
  }

  displayMenuReduced() {
    if (Cypress.env('environment') == 'desktop') {
      cy.wait(3000)
      cy.scrollTo(0, 200)
    }
  }

  clickItemMenuCategories() {
    // item Menu especifico Eletrodomesticos acesso mobile
    cy.get(elHomepage.itemSpecificMenu)
      .contains('Eletrodomésticos')
      .click({ force: true })
  }

  clickItemSubMenuCategories(submenu) {
    cy.get(elHomepage.itemCategorySubMenu)
      .contains(submenu)
      .trigger('mouseover', { force: true })
    cy.get(elHomepage.itemCategorySubMenu)
      .contains(submenu)
      .click({ force: true })
    cy.wait(15000)
  }
}
export default new HomePage()
