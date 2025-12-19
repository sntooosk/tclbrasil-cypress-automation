export const ELEMENTS = {
  buyButton: '[class*="section-product-details"] [data-fs-buy-button]',
  buttonOpenModalVariation: '[class*="voltage-warning__fake-btn"]',
  buttonConfirmModalVariation:
    '[class*="voltage-warning__buttons"] [data-fs-buy-button]',
  minishelfProduct:
    '[class*="custom-product-card__container"] [data-testid="buy-button"]',
  inputNameNotification: '[class*="out-of-stock__form"] input[type="text"]',
  inputEmailNotification: '[class*="out-of-stock__form"] input[type="email"]',
  buttonRegisterNotification: '[class*="out-of-stock__form-submit-btn"]',
  messageNotifyMe: '[class*="out-of-stock__success"]',
  textLinkPaymentOptionsModal: '[class*="payment-methods__button"]',
  buttonClosePaymentOptionsModal: '[class*="payment-methods__modal-close-btn"]',
  textTitlePaymentOptionsModal:
    '[class*="payment-methods__modal-title-container"]',
  spot: '[class*="price-variant"] [class*="price-value"]',
  pixText: '[class*="product-details-pix-text"]',
  installmentText: '[class*="installment-highlight"]',
  installmentButton: '[class*="payment-methods__button"]',
  shipping: {
    input:
      '[class*="section-product-details"] [data-fs-search-input-field-input], [class*="section-product-details"] input[id*="shipping-simulation"]',
    button:
      '[class*="section-product-details"] [data-testid="fs-input-field"] [data-testid="fs-button"]',
    tableRow: '[class*="fs-table-row"], [data-fs-table-row="true"]',
    error:
      '[class*="input-field-error"], [data-fs-input-field-error-message="true"]',
  },
  gallery: {
    mainImage: '[class*="section-navbar"] img[data-fs-image="true"]',
    thumbnails: '[data-fs-image-gallery-selector-thumbnail]',
  },
  productName: 'h1, [data-testid="product-name"]',
  sizeWrapper: '[class*="custom-product-selector__specification-wrapper"]',
  sizeOption: '[class*="custom-product-selector__specification-link"]',
}
