export const ELEMENTS = {
  inputClientPreEmail: '#client-pre-email',
  buttonClientPreEmail: '#btn-client-pre-email',
  inputFirstName: 'input#client-first-name',
  inputLastName: 'input#client-last-name',
  inputDocument: 'input#client-document',
  inputPhone: 'input#client-phone',
  checkBoxNewsletter: '#opt-in-newsletter',
  buttonGoToShipping: 'button#go-to-shipping',
  inputZipCode: '#ship-postalCode',
  inputFullName: 'input#ship-receiverName',
  inputCustomNumber: 'input#ship-number',
  buttonGoToPayment: '#btn-go-to-payment',
  pixOption: '#payment-group-instantPaymentPaymentGroup > .payment-group-item-text',
  buttonBuy:
    '[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"]',
  modalPix: '.VTEX-PIX__modal-container',
  alertFirstName: '.client-first-name > .help',
  alertLastName: '.client-last-name > .help',
  alertDocument: '//span[normalize-space()="Campo obrigatório."]',
  alertPhone:
    '//*[@id="client-profile-data"]/div/div[2]/div/div/form/div/div/fieldset[1]/div[1]/p[1]/span',
}
