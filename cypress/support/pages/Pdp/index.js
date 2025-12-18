/// <reference types="cypress" />

const elPdpPage = require('./elements').ELEMENTS

class PdpPage {
  urlPDP(productLink) {
    cy.visit(productLink)
    cy.wait(5000)
  }

  clickBtnAddToCart() {
    cy.wait(5000)
    cy.clearCart()
    cy.get(elPdpPage.buyButton).first().should('exist').click({ force: true })
    cy.clearCart()
    cy.get(elPdpPage.buyButton).first().should('exist').click({ force: true })
    cy.wait(5000)
  }
  clickConfirmModalVariation() {
    cy.clearCart()
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get(elPdpPage.shipping.input).then(($input) => {
      cy.wrap($input).focus()
      cy.wrap($input).clear()
      cy.wrap($input).type(zipCode, { force: true })
    })
  }

  selectState(state) {
    cy.get(elPdpPage.comboBoxState).select(state, { force: true })
  }

  selectCity(city) {
    cy.get(elPdpPage.comboBoxNeighborhood).select(city, { force: true })
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

  validateBtnAddToCart() {
    cy.get(elPdpPage.buttonAddToCart).should('exist')
  }

  clickBtnCalcShippingModal() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 10)
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)
      cy.scrollTo(0, 400)
    }

    cy.get(elPdpPage.buttonCalcShippingModal).click({ force: true })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
  }

  clickBtnCloseShippingModal() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPdpPage.textTittleShippingModal).scrollIntoView()
    }
    cy.get(elPdpPage.buttonCloseShippingModal).first().click({ force: true })
  }

  clickFloatingbutton() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 550)
      cy.get(elPdpPage.floatingButtonMobile).first().click({ force: true })
    } else if (Cypress.env('environment') == 'desktop') {
      cy.scrollTo(0, 1200)
      cy.wait(10000)
      cy.get(elPdpPage.floatingButton).click({ force: true })
    }
  }

  addProductFromMinishelf() {
    cy.wait(8000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 1200)
    } else {
      cy.scrollTo(0, 350)
    }
    cy.wait(5000)
    cy.get(elPdpPage.minishelfProduct)
      .should('be.visible')
      .click({ force: true })
    cy.wait(5000)
  }

  addSecondProductFromMinishelf() {
    cy.wait(8000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 1000)
    } else {
      cy.scrollTo(0, 350)
    }
    cy.get(elPdpPage.minishelfSecondProduct)
      .should('be.visible')
      .click({ force: true })
    cy.wait(5000)
  }

  validateUnavailableShippingDataTable() {
    cy.get(elPdpPage.tableUnavailableShippingData)
      .first()
      .should(
        'have.text',
        'Não há disponibilidade de envio ou retirada em loja para o CEP informado',
      )
    cy.wait(5000)
  }

  clickBtnCloseShippingModalMobile() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPdpPage.textTittleShippingModal)
    }
    cy.get(elPdpPage.buttonCloseShippingModalMobile).click({ force: true })
    cy.wait(3000)
  }

  addUnavailableProductToCart() {
    cy.get(elPdpPage.buttonAddToCartUnavailableProduct).click({ force: true })
    cy.wait(3000)
  }

  validateStillPdp(product_url) {
    if (Cypress.env('environment') == 'mobile') {
      cy.wait(2500)
      cy.url().should('include', product_url)
    } else if (Cypress.env('environment') == 'desktop') {
      cy.scrollTo(0, 1400)
      cy.wait(2500)
      cy.url().should('include', product_url)
    }
  }

  addUnavailableProductbyFloatingbutton() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 900)
      cy.get(elPdpPage.floatingButtonUnavailableProductMobile).click({
        force: true,
      })
      cy.wait(3000)
    } else if (Cypress.env('environment') == 'desktop') {
      cy.get(elPdpPage.floatingButtonUnavailableProductDesktop).click({
        force: true,
      })
      cy.wait(3000)
    }
  }

  typeNameNotification(firstNameFaker) {
    cy.get(elPdpPage.inputNameNotification).type(firstNameFaker)
  }

  typeEmailNotification(correctEmailFaker) {
    cy.get(elPdpPage.inputEmailNotification).type(correctEmailFaker)
  }

  typePhoneNotification(phoneFaker) {
    cy.get(elPdpPage.inputPhoneNotification).type(phoneFaker)
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

  clickBuyButtonWithoutChooseVoltage() {
    cy.wait(5000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 800)
      cy.get(elPdpPage.chooseVoltageLabel).should('be.visible')
      cy.wait(15000)
      cy.get(elPdpPage.clickBuyButtonWithoutVoltageMobile)
        .first()
        .should('be.visible')
        .click({ force: true })
      cy.wait(10000)
    } else if (Cypress.env('environment') == 'desktop') {
      cy.get(elPdpPage.chooseVoltageLabel).should('be.visible')
      cy.wait(15000)
      cy.get(elPdpPage.clickBuyButtonWithoutVoltageDesktop)
        .should('be.visible')
        .click({ force: true })
      cy.wait(10000)
    }
  }

  validateAlertMessage() {
    cy.wait(2000)
    cy.get(elPdpPage.alertVoltageMessage).should(
      'have.text',
      'Por favor, selecione a voltagem desejada.',
    )
  }

  clickBtnAnchorDescriptionSummary() {
    cy.get(elPdpPage.buttonAnchorDescriptionSummary).click({ force: true })
    cy.wait(8000)
  }

  validateRedirectProductSummary() {
    cy.get(elPdpPage.labelRedirectProductSummary)
      .should('be.visible')
      .should('have.text', 'Descricao')
  }

  videoButtonClick() {
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPdpPage.videoButtonMobile).click()
      cy.wait(8000)
    } else {
      cy.get(elPdpPage.videoButtonDesktop).click()
      cy.wait(8000)
    }
  }

  videoModal() {
    cy.wait(5000)
    cy.get(elPdpPage.videoModal).first().click({ force: true })
  }

  r2UButton() {
    cy.get(elPdpPage.r2uButton).first().click({ force: true })
    cy.wait(3000)
    cy.get(elPdpPage.r2uModal).should('be.visible')
    cy.wait(2000)
  }

  r2UModal() {
    cy.get(elPdpPage.r2uModalValidate).should('be.visible')
    cy.wait(2000)
  }

  clickTextPaymentOptionsModal() {
    cy.wait(5000)
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 600)
      cy.wait(3000)
    }
    cy.get(elPdpPage.textLinkPaymentOptionsModal).first().click({ force: true })
  }

  validatePaymentOptionsLanguage() {
    cy.get(elPdpPage.textTitlePaymentOptionsModal).should('be.visible')
    cy.should('have.text', 'Formas de Pagamento')
  }

  clickBtnClosePaymentOptionsModal() {
    cy.get(elPdpPage.buttonClosePaymentOptionsModal).click({ force: true })
  }

  addCompreJuntoProducts() {
    cy.scrollTo(0, 2300)
    cy.wait(10000)
    cy.get(elPdpPage.compreJuntoElement).scrollIntoView()
    if (Cypress.env('environment') == 'desktop') {
      // Verifica a presença do modal de envio
      cy.get('body').then(($body) => {
        if ($body.find(elPdpPage.buttonCloseShippingModal).length > 0) {
          // Se o botão de fechamento do modal de envio existir, clicamos nele
          cy.get(elPdpPage.buttonCloseShippingModal).click()
        } else {
          // Caso o botão de fechamento do modal de envio não seja encontrado
          cy.log('Modal de envio não encontrado, seguindo o fluxo.')
        }
      })
      // Continuar com a lógica para adicionar os produtos
      cy.get('body').then(($body) => {
        if ($body.find(elPdpPage.compreJuntoSection).length > 0) {
          cy.get(elPdpPage.compreJuntoSection).click()
        } else {
          cy.log('Voltagem não encontrada, seguindo o fluxo.')
        }
      })
    } else {
      cy.get('body').then(($body) => {
        if ($body.find(elPdpPage.compreJuntoSectionMobile).length > 0) {
          cy.wait(10000)
          cy.get(elPdpPage.compreJuntoSectionMobile).click()
        } else {
          cy.log('Voltagem não encontrada, seguindo o fluxo.')
        }
      })
      cy.scrollTo(0, 300)
    }
    cy.get(elPdpPage.compreJuntoAddButton).click({ force: true })
  }

  addExtendedWarrantyProducts() {
    cy.get(elPdpPage.btn220v).click()
    cy.get(elPdpPage.btnwarranty).scrollIntoView()
    cy.get(elPdpPage.btnwarranty).click()
    cy.wait(20000)
  }

  clickBuyFloating() {
    cy.scrollTo(0, 1000)
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elPdpPage.bntBuyWarranty).click({ force: true })
    } else {
      cy.get(elPdpPage.bntBuyWarrantyMobile).click({ force: true })
    }
    cy.wait(10000)
  }

  addWarrantyExtended() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 400)
      cy.wait(3000)
    }
    cy.get(elPdpPage.addWarrantyExtended).click()
    cy.wait(3000)
  }
  clickColorVariant() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 600)
      cy.wait(9000)
      cy.get(elPdpPage.buttonColorVariant).click({ force: true })
    }
    if (Cypress.env('environment') == 'desktop') {
      cy.wait(5000)
      cy.get(elPdpPage.buttonColorVariant).click({ force: true })
    }
  }

  clickProductFrequency() {
    if (Cypress.env('environment') == 'mobile') {
      cy.wait(15000)
      cy.scrollTo(0, 900)
      cy.get(elPdpPage.buttonAddProductFrequency).first().click()
    }
    if (Cypress.env('environment') == 'desktop') {
      cy.wait(15000)
      cy.get(elPdpPage.buttonAddProductFrequency).first().click()
    }
  }

  clickBtnAddToIntermediatePage() {
    if (Cypress.env('environment') == 'mobile') {
      cy.scrollTo(0, 800)
      cy.get(elPdpPage.buttonMobAddToIntermediatePage).first().click()
    }
    if (Cypress.env('environment') == 'desktop') {
      cy.get(elPdpPage.buttonAddToIntermediatePage)
        .first()
        .click({ force: true })
    }
    cy.wait(10000)
  }

  clickButtonAddToCart() {
    cy.get(elPdpPage.buttonToCart).first().click({ force: true })
  }

  clickProductImage() {
    cy.wait(5000)
    cy.get(elPdpPage.productImage).first().click()
  }

  validateProductImageModal() {
    cy.wait(5000)
    if (Cypress.env('environment') == 'mobile') {
      cy.get(elPdpPage.productImageModalMobile).should('be.visible')
    } else {
      cy.get(elPdpPage.productImageModal).should('be.visible')
    }
  }

  selectProductFrequency() {
    cy.get(elPdpPage.selectProductFrequency).first().click()
  }

  clickConfirmProductFrequency() {
    cy.wait(3000)
    cy.get(elPdpPage.btnConfirmProductFrequency).click()
    cy.wait(5000)
    if (Cypress.env('environment') == 'desktop') cy.scrollTo('top')
  }
  getProductName() {
    return cy.get(elPdpPage.productName).invoke('text')
  }

  validateSizeButtonsNavigation() {
    cy.get(elPdpPage.sizeWrapper)
      .find(elPdpPage.sizeOption)
      .then(($links) => {
        const total = $links.length

        Cypress._.times(total, (i) => {
          cy.get(elPdpPage.sizeWrapper)
            .find(elPdpPage.sizeOption)
            .eq(i)
            .click({ force: true })

          cy.get(elPdpPage.productName).should('be.visible')

          cy.go('back')
        })
      })
  }
}
export default new PdpPage()
