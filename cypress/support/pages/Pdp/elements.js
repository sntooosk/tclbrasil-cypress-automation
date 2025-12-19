export const ELEMENTS = {
  buyButton:
    '[data-fs-product-details-controls="true"] > [data-testid="buy-button"] > div',
  buttonOpenModalVariation:
    '[class*="VoltageWarningPDP_voltage-warning__fake-btn"]',
  buttonConfirmModalVariation:
    '[class*="VoltageWarningPDP_voltage-warning__buttons"] [data-testid="buy-button"] > div',
  minishelfProduct:
    '#mais-vendidos-carousel-item-0 > [data-testid="fs-product-card"] > [data-testid="buy-button"]',
  inputNameNotification:
    '[class*="CustomOutOfStock_out-of-stock__form"] > :nth-child(1) > input',
  inputEmailNotification:
    '[class*="CustomOutOfStock_out-of-stock__form"] > :nth-child(2) > input',
  buttonRegisterNotification:
    '[class*="CustomOutOfStock_out-of-stock__form-submit-btn"]',
  messageNotifyMe: '[class*="CustomOutOfStock_out-of-stock__success"]',
  textLinkPaymentOptionsModal:
    '[class*="PaymentMethods_payment-methods__button"]',
  buttonClosePaymentOptionsModal:
    '[class*="PaymentMethods_payment-methods__modal-close-btn"]',
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
    '[class*="CustomProductSelector_custom-product-selector__specification-wrapper"]',
  sizeOption:
    '[class*="CustomProductSelector_custom-product-selector__specification-link"]',
}
