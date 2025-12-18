export const ELEMENTS = {
  buyButton:
    '[data-fs-product-details-controls="true"] > [data-testid="buy-button"] > div',
  buttonOpenModalVariation:
    '.VoltageWarningPDP_voltage-warning__fake-btn__ZITPI',
  buttonConfirmModalVariation:
    '.VoltageWarningPDP_voltage-warning__buttons__R1OjJ > [data-testid="buy-button"] > div',
  minishelfProduct:
    '#mais-vendidos-carousel-item-0 > [data-testid="fs-product-card"] > [data-testid="buy-button"]',
  inputNameNotification:
    '.CustomOutOfStock_out-of-stock__form__UreCX > :nth-child(1) > input',
  inputEmailNotification:
    '.CustomOutOfStock_out-of-stock__form__UreCX > :nth-child(2) > input',
  buttonRegisterNotification:
    '.CustomOutOfStock_out-of-stock__form-submit-btn__cijEa',
  messageNotifyMe: '.CustomOutOfStock_out-of-stock__success__ZEeSR',
  textLinkPaymentOptionsModal: '.PaymentMethods_payment-methods__button__EEJ7a',
  buttonClosePaymentOptionsModal:
    '.PaymentMethods_payment-methods__modal-close-btn__ngccP',
  textTitlePaymentOptionsModal:
    '.PaymentMethods_payment-methods__modal-title-container__y3UwH',
  spot: '[data-fs-price-variant="spot"] [data-testid="price-value"]',
  pixText: '[data-fs-product-details-pix-text="true"]',
  installmentText: '[data-fs-installment-highlight="true"]',
  installmentButton: '[class*="PaymentMethods_payment-methods__button"]',
  shipping: {
    input: '#fs-shipping-simulation-input-field',
    button: '[data-testid="fs-input-field"] [data-testid="fs-button"]',
    tableRow: '[data-fs-table-row="true"]',
    error: '[data-fs-input-field-error-message="true"]',
  },
  gallery: {
    mainImage: 'img[data-fs-image="true"]',
    thumbnails: '[data-fs-image-gallery-selector-thumbnail]',
  },
  productName: 'h1, [data-testid="product-name"]',
  sizeWrapper:
    '.CustomProductSelector_custom-product-selector__specification-wrapper__FRjg_',
  sizeOption:
    '.CustomProductSelector_custom-product-selector__specification-link__Yh5cW',
}
