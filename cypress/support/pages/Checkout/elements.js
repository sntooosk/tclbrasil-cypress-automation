export const ELEMENTS = {
  buttonClientPreEmail: '[class*="btn-success"]:not([class*="submit"])',
  inputClientPreEmail: '[class*="input-block-level"]',
  inputFirstName: '[class*="client-first-name"] input',
  inputLastName: '[class*="client-last-name"] input',
  inputDocument: '[class*="client-document"] input',
  inputPhone: '[class*="client-phone"] input',
  checkBoxNewsletter: '[class*="newsletter-label"] input[type="checkbox"]',
  buttonGoToShipping: '[class*="submit"][class*="btn-success"]',

  inputZipCode: '[class*="ship-postalCode"] input, [class*="postalCode"] input',
  inputCustomNumber: '[class*="ship-number"] input, [class*="number"] input',
  inputFullName:
    '[class*="ship-receiverName"] input, [class*="receiverName"] input',
  buttonGoToPayment: '[class*="btn-go-to-payment"]',

  labelFirstNameAlert: '[class*="client-first-name"] [class*="help"]',
  labelLastNameAlert: '[class*="client-last-name"] [class*="help"]',
  labelPhoneAlert: '[class*="client-phone"] [class*="help"]',
  labelDocumentAlert: '[class*="client-document"] [class*="help"]',
  selectPixOption: '[class*="payment-group-item-text"]',
  modalPix: '[class*="VTEX-PIX__modal-container"]',
  buttonBuy: '[class*="payment-submit-wrap"] [class*="btn"]',
}
