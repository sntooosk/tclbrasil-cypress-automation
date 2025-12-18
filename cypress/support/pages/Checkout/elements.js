export const ELEMENTS = {
  inputClientEmail: '#client-email',
  buttonClientPreEmail: '#btn-client-pre-email',
  inputClientPreEmail: '#client-pre-email',
  inputFirstName: 'input#client-first-name',
  inputLastName: 'input#client-last-name',
  inputDocument: 'input#client-document',
  inputAreaCodePhone:
    '[data-bind="visible: !hasDifferentPhone()"] > .input > #client-phone1',
  inputPhone: 'input#client-phone',
  checkBoxTermsAndConditions: '#v-custom-terms__input',
  checkBoxNewsletter: '#opt-in-newsletter',
  buttonGoToShipping: 'button#go-to-shipping',

  comboBoxState: 'select#ship-state',
  comboBoxCity: 'select#ship-city',
  comboBoxAddressType: 'select#streetTypeSelector',
  inputZipCode: '#ship-postalCode',
  inputCustomStreet: 'input#ship-street',
  inputCustomNumber: 'input#ship-number',
  inputCustomStreetNumber: 'input#customStreetNumber',
  inputCustomStreetComplement: 'input#customStreetComplement',
  inputComplement: 'input#ship-complement',
  inputNeighborhood: 'input#ship-neighborhood',
  inputFullName: 'input#ship-receiverName',
  buttonGoToPayment: '#btn-go-to-payment',

  selectCreditCard: 'a#payment-group-creditCardPaymentGroup',
  selectMercadoPago: 'a#payment-group-MercadoPagoPaymentGroup',
  inputCreditCard: '#creditCardpayment-card-0Number',
  imgCardFlagVisa: '[class="card-flag Visa BRA card-selected"]',
  imgCardFlagMastercard: '[class="card-flag Mastercard BRA card-selected"]',
  imgCardFlagDiners: '[class="card-flag Diners BRA card-selected"]',
  imgCardFlagAmericanExpress:
    '[class="card-flag American Express BRA card-selected"]',

  labelBankInvoiceEfecty: 'label.bank-invoice-item-efecty',

  buttonBuyNow: `button#payment-data-submit span[data-i18n='paymentData.confirm']`,

  labelFirstNameAlert: '.client-first-name > .help',
  labelLastNameAlert: '.client-last-name > .help',
  labelPhoneAlert:
    '//*[@id="client-profile-data"]/div/div[2]/div/div/form/div/div/fieldset[1]/div[1]/p[1]/span',
  labelDocumentAlert: '//span[normalize-space()="Campo obrigatório."]',
  labelchangeShippingData: '.unavailable-actions > [autofocus=""]',
  selectBankInvoice:
    '#payment-group-bankInvoicePaymentGroup > .payment-group-item-text',
  linkCouponCheckout:
    '.custom-cart-template-wrap > .summary-template-holder > .row-fluid > .pull-left > .v-custom-coupon-title > .v-custom-coupon-title__trigger > span',
  modalCouponAddCheckout: '.v-custom-coupon-modal__content',
  buttonCouponAddCheckout:
    '.v-custom-coupon-modal__body > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  inputCouponCheckout:
    '.v-custom-coupon-modal__body > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  buttonModalCouponCheckout:
    '.v-custom-coupon-modal__body > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  addedValidCouponCheckout:
    '.custom-cart-template-wrap > .summary-template-holder > .row-fluid > .pull-left > .v-custom-coupon-information-available > .v-custom-coupon-applied',
  btnInStore: '#shipping-option-pickup-in-point > .shp-method-option-text',
  btnSearchAddress: '#find-pickups-manualy-button-denied',
  btnChooseStore: '.vtex-pickup-points-modal-3-x-pickupPointMain',
  btnConfirmStore: '#confirm-pickup-Ponto-de-Retirada-OUTLETSP',
  validateStorebtn: '.vtex-omnishipping-1-x-PickupPointName',
  selectPixOption:
    '#payment-group-instantPaymentPaymentGroup > .payment-group-item-text',
}
