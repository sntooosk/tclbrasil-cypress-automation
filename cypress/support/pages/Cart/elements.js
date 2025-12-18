export const ELEMENTS = {
  imageSourceLoading: '.loading > .loading-img > .icon-spinner',
  buttonCalculateShipping: '#cart-shipping-calculate',
  comboBoxShipState: 'select#ship-state',
  comboBoxShipCity: 'select#ship-city',
  labelShippingCost: 'label.srp-shipping-current-single',
  buttonCartToOrder: '[data-testid="checkout-button"] > div',
  buttonCartToOrderForm: '#cart-to-orderform',
  buttonUpCartToOrderForm: '.clone > #cart-to-orderform',
  buttonReturnToCart: '#orderform-minicart-to-cart',
  buttonLogoReturnToHome: '.tcl-checkout-header > .container',
  divCartFull: '.cart-items',
  cartItemBySku: (sku) =>
    `article[data-fs-cart-item="true"][data-sku="${sku}"]`,

  removeButtonBySku: (sku) =>
    `article[data-fs-cart-item="true"][data-sku="${sku}"] button[data-fs-cart-item-remove-button="true"]`,

  quantityInputBySku: (sku) =>
    `article[data-fs-cart-item="true"][data-sku="${sku}"] input[data-quantity-selector-input="true"]`,
  divCartEmpty: 'div#cartLoadedDiv div.empty-cart-content',
  inputCoupon:
    '.full-cart > .summary-template-holder > .summary > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  inputZipCode: '#ship-postalCode',
  labelShippingUnavailable:
    '.electrolux-shipping-calculator-custom-0-x-form_input_warning_text',
  labelShippingAvailable: '.srp-result',
  buttonCoupon:
    '.v-custom-coupon-modal__body > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  buttonCouponMobile:
    '.full-cart > .summary-template-holder > .summary > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  buttonCouponAdd:
    '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  buttonCouponAddMobile:
    '.v-custom-coupon-modal__body > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  msgInvalidDiscountCoupon: '.vtex-front-messages-template',
  buttonItemRemoveProduct: (skuid) => `#item-remove-${skuid}`,
  imageSourceProduct: (product) => `tr.product-item img[alt*="${product}"]`,
  imageSourceLoadingText: (product) =>
    `//div[@class='cart']//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../../td[@class='item-remove']/i`,
  buttonIncrementQuantity: (product) =>
    `//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../..//a[contains(@class, 'item-quantity-change-increment')]/i`,
  buttonDecrementQuantity: (product) =>
    `//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../..//a[contains(@class, 'item-quantity-change-decrement')]/i`,
  labelItemQuantity: (product) =>
    `//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../..//input[contains(@type, 'tel')]`,
  xpFnItemQuantity: (sku) => `[id="item-quantity-${sku}"]`,
  chooseMoreProducts: '#cart-choose-more-products',
  shippingButton: '.srp-data > #shipping-calculate-link',
  linkCoupon:
    '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > .coupon-data > #cart-link-coupon-add',
  modalCouponAdd: '.v-custom-coupon-modal__content',
  buttonModalCoupon:
    '.v-custom-coupon-modal__body > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  UnavailableShippingData: '.srp-unavailable',
  addedValidCoupon:
    '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > .info',
  shareButtonCart: '.socialShare__shareTrigger',
  modalShareCart: '.socialShare__modalContent',
  validateModalShareCart: '.socialShare__shareContentTitle',
  titleCart: '#cart-title',
  clickConfirmVoltage: '.v-custom-sku-selector__modalButtonConfirm',
  prdExtendedWaranty: '.prd-extended-waranty > .v-custom-product-item-wrap',
  cartWithoutGe: '.warranty-container',
  selectVoltage: '.v-custom-sku-selector__select',
  btnPickUpInStore: '.srp-toggle__pickup',
  btnIncreaseQuantity: '#item-quantity-change-increment-310119874 > .icon',
}
