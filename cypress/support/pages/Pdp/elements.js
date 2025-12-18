export const ELEMENTS = {
  buyButton:
    '[data-fs-product-details-controls="true"] > [data-testid="buy-button"] > div',
  buttonOpenModalVariation:
    '.VoltageWarningPDP_voltage-warning__fake-btn__ZITPI',
  buttonConfirmModalVariation:
    '.VoltageWarningPDP_voltage-warning__buttons__R1OjJ > [data-testid="buy-button"] > div',
  buttonAddToCartDesktop:
    '[class*="vtex-add-to-cart-button-"][class*="-x-buttonText"]',
  buttonAddToCartMobile:
    '[class*="vtex-add-to-cart-button-"][class*="-x-buttonText"]',
  buttonCalcShipping:
    '[id^="electrolux-shipping-calculator-custom-"][id$="-x-shippingCTA"]',
  comboBoxState: 'select[name=state]',
  inputZipCode: '.vtex-address-form-4-x-input',
  comboBoxNeighborhood: 'select[name=neighborhood]',
  labelProductPrice:
    '[class*="electrolux-product-prices-"][class*="-x-currencyContainer electrolux-product-prices-"][class*="-x-currencyContainer--pdp"]',
  imageSourceProduct:
    '[class*="electrolux-product-gallery-"][class*="-x-productImageTag--product-gallery-thumbs-horizontal--main"]',
  tableShippingData:
    '[class^="electrolux-shipping-calculator-custom-"][class$="-x-shippingTableLabel"]',
  tableShippingDataUnavailable: '.vtex-input__error',
  buttonCalcShippingModal:
    '[class^="electrolux-shipping-calculator-custom-"][class$="-x-triggerModal"]',
  buttonCloseShippingModal: '.vtex__icon-close',
  buttonCloseShippingModalMobile: '.vtex-modal__close-icon .vtex__icon-close',
  textTittleShippingModal:
    '[class^="electrolux-shipping-calculator-custom-"][class$="-x-titleModal"]',
  textRegion:
    '.electrolux-regionalization-custom-apps-2-x-regionalization-textaction--icon-red-dot',
  floatingButton:
    '[class*="vtex-add-to-cart-button-"][class*="-x-buttonText--sticky-button"]',
  floatingButtonMobile:
    '[class*="vtex-add-to-cart-button-"][class*="-x-buttonText"]',
  minishelfProduct:
    '#mais-vendidos-carousel-item-0 > [data-testid="fs-product-card"] > [data-testid="buy-button"]',
  tableUnavailableShippingData:
    '[class*="electrolux-shipping-calculator-custom-"][class*="-x-shippingNoMessageWarning"]',
  buttonAddToCartUnavailableProduct:
    ':nth-child(3) > #pdp-add-to-cart-buttons > .mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol > :nth-child(1)',
  floatingButtonUnavailableProductDesktop:
    '[role="button"] > #pdp-add-to-cart-buttons > .mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol > :nth-child(1)',
  floatingButtonUnavailableProductMobile:
    '#pdp-add-to-cart-buttons > .flex-none > .pr0-ns > .vtex-flex-layout-0-x-flexCol > :nth-child(1)',
  minishelfSecondProduct:
    //'[data-index="1"] > :nth-child(1) > .electrolux-pdp-suggestion-mini-shef-3-x-suggestionMiniShelfContent > .vtex-button > .electrolux-pdp-suggestion-mini-shef-3-x-suggestionMiniShelfButtonText',
    '[data-index="1"] > :nth-child(1) > .electrolux-pdp-suggestion-mini-shef-3-x-suggestionMiniShelfContent > .ins-product-box > .vtex-button',
  inputNameNotification:
    '.CustomOutOfStock_out-of-stock__form__UreCX > :nth-child(1) > input',
  inputEmailNotification:
    '.CustomOutOfStock_out-of-stock__form__UreCX > :nth-child(2) > input',
  buttonRegisterNotification:
    '.CustomOutOfStock_out-of-stock__form-submit-btn__cijEa',
  messageNotifyMe: '.CustomOutOfStock_out-of-stock__success__ZEeSR',
  clickBuyButtonWithoutVoltageMobile:
    '[class*="electrolux-warranty-intermediate-screen-"][class*="-x-warranty__buybutton"]',
  clickBuyButtonWithoutVoltageDesktop:
    '.vtex-flex-layout-0-x-flexColChild > div > .electrolux-warranty-intermediate-screen-2-x-warranty__buybutton',
  alertVoltageMessage: '.electrolux-mono-sku-button-0-x-tooltipContent',
  buttonAnchorDescriptionSummary:
    '[class*="electrolux-scroll-into-view-"][class$="-x-callToActionText"]',
  labelRedirectProductSummary:
    '.AccordionPDP_accordion-item__description__PzP9X',
  r2uButton:
    '[class*="electrolux-electrolux-custom-r2u-"][class*="-x-buttonOpenR2U"] > button',
  videoButtonMobile:
    '[class*="electrolux-product-video-"][class*="-x-desktopPlay"]',
  videoButtonDesktop:
    '[class*="electrolux-product-video-"][class$="-x-desktopPlay"]',
  videoModal: '.styles_overlay__CLSq-',
  r2uModal:
    '[class*="electrolux-electrolux-custom-r2u-"][class*="-x-r2uSecondSectionContainer"]',
  r2uModalValidate:
    '[class*="electrolux-electrolux-custom-r2u-"][class*="-x-r2u3D"]',
  textLinkPaymentOptionsModal: '.PaymentMethods_payment-methods__button__EEJ7a',
  textLinkPaymentOptionsModalMobile:
    '.electrolux-product-prices-3-x-containerPaymentOptions > div > .electrolux-payment-options-modal-1-x-trigger',
  buttonClosePaymentOptionsModal:
    '.PaymentMethods_payment-methods__modal-close-btn__ngccP',
  textTitlePaymentOptionsModal:
    '.PaymentMethods_payment-methods__modal-title-container__y3UwH',
  textDescriptionInstallmentModal:
    '.electrolux-payment-options-modal-1-x-modalHeader > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
  textDescriptionInstallmentModalMobile:
    '.electrolux-payment-options-modal-1-x-modalHeader > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
  compreJuntoSectionMobile:
    ':nth-child(2) > .electrolux-electrolux-insider-app-1-x-skuItemLabel > .electrolux-electrolux-insider-app-1-x-skuItemLabelText',
  compreJuntoSection:
    ':nth-child(2) > .electrolux-electrolux-insider-app-1-x-skuItemLabel > .electrolux-electrolux-insider-app-1-x-skuItemLabelText',
  //Seleção da Voltagem
  compreJuntoAddButton:
    '.electrolux-electrolux-insider-app-1-x-buyButtonResultCard',
  compreJuntoElement:
    '.electrolux-electrolux-insider-app-1-x-containerBuyTogetherTitle',
  btn220v:
    '.vtex-store-components-3-x-skuSelectorItem--220v > .vtex-store-components-3-x-skuSelectorInternalBox > .absolute',
  btnwarranty:
    '.electrolux-warranty-intermediate-screen-2-x-slide--firstVisible > .electrolux-warranty-intermediate-screen-2-x-slideChildrenContainer > .flex > .vtex-button',
  bntBuyWarranty:
    '[class="electrolux-warranty-intermediate-screen-2-x-warranty__buybutton electrolux-warranty-intermediate-screen-2-x-warranty__buybutton--header-buy-button electrolux-warranty-intermediate-screen-2-x-warranty__hideIcon electrolux-warranty-intermediate-screen-2-x-warranty__hideIcon--header-buy-button"]',
  bntBuyWarrantyMobile:
    ':nth-child(20) > div > .electrolux-warranty-intermediate-screen-2-x-warranty__buybutton',
  optionSkuVoltage: '.vtex-store-components-3-x-skuSelectorOptionsList',
  chooseSkuVoltage:
    '.vtex-store-components-3-x-skuSelectorItem--product-sku-selector',
  chooseVoltageLabel:
    '[class*="vtex-store-components-"][class*="-x-skuSelectorTextContainer"]',
  addWarrantyExtended:
    '.electrolux-warranty-intermediate-screen-2-x-slide--lastVisible > .electrolux-warranty-intermediate-screen-2-x-slideChildrenContainer > .flex > .vtex-button',
  buttonAddWarrantyExtendedToCartDesktop:
    '.vtex-flex-layout-0-x-flexColChild > div > .electrolux-warranty-intermediate-screen-2-x-warranty__buybutton',
  buttonAddProductFrequency:
    '[class*="electrolux-pdp-subscription-product-frequency-"][class*="-x-subscriptionProductButton"]',
  buttonColorVariant:
    '[href="/pe12v-pe12v-purif-agua-pelt-bivolt/p"] > .electrolux-product-color-variants-0-x-image',
  buttonAddToIntermediatePage:
    '[class*="electrolux-warranty-intermediate-screen-"][class*="-x-warranty__hideIcon"]',
  buttonToCart:
    '[class*="vtex-flex-layout-"][class*="-x-flexColChild"] > .vtex-button',
  buttonMobAddToIntermediatePage:
    '[class*="electrolux-warranty-intermediate-screen-"][class*="-x-warranty__buybutton"]',
  productImage:
    '[class*="electrolux-product-gallery-"][class*="-x-productImageTag"]',
  productImageMobile:
    '.swiper-slide-active > .electrolux-product-images-0-x-image',
  productImageModal:
    '[class*="electrolux-product-gallery-"][class*="-x-productImageTag--product-gallery-desktop-pdp-"][class*="-columns-modal--main"]',
  productImageModalMobile:
    '[class*="electrolux-product-gallery-"][class*="-x-productImageTag--product-gallery-thumbs-horizontal--main"]',
  selectProductFrequency: '.vtex-checkbox__input',
  btnConfirmProductFrequency:
    '[class*="electrolux-pdp-subscription-product-frequency-"][class*="-x-subscriptionProductModalButton"]',
  spot: '[data-fs-price-variant="spot"] [data-testid="price-value"]',
  pixText: '[data-fs-product-details-pix-text="true"]',
  installmentText: '[data-fs-installment-highlight="true"]',
  installmentButton: '[class*="PaymentMethods_payment-methods__button"]',
  paymentModal:
    '[data-fs-modal="true"], [data-testid="fs-modal"], [role="dialog"], [data-modal="true"]',
  paymentContent: [
    '[data-fs-installment-options="true"]',
    '[data-fs-payment-modal="true"]',
    '[data-fs-payment-methods="true"]',
    '[class*="payment-modal"]',
  ].join(', '),
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
