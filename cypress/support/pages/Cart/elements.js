export const ELEMENTS = {
  imageSourceLoading: '.loading > .loading-img > .icon-spinner',
  buttonCalculateShipping: '#cart-shipping-calculate',
  buttonCartToOrder: '[data-testid="checkout-button"] > div',
  buttonCartToOrderForm: '#cart-to-orderform',
  buttonReturnToCart: '#orderform-minicart-to-cart',
  divCartFull: '.cart-items',
  cartItemBySku: (sku) =>
    `article[data-fs-cart-item="true"][data-sku="${sku}"]`,
  divCartEmpty: 'div#cartLoadedDiv div.empty-cart-content',
  inputCoupon:
    '.full-cart > .summary-template-holder > .summary > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  inputZipCode: '#ship-postalCode',
  labelShippingAvailable: '.srp-result',
  buttonCouponAdd:
    '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  msgInvalidDiscountCoupon: '.vtex-front-messages-template',
  buttonItemRemoveProduct: (skuid) => `#item-remove-${skuid}`,
  imageSourceProduct: (product) => `tr.product-item img[alt*="${product}"]`,
  buttonIncrementQuantity: (product) =>
    `//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../..//a[contains(@class, 'item-quantity-change-increment')]/i`,
  buttonDecrementQuantity: (product) =>
    `//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../..//a[contains(@class, 'item-quantity-change-decrement')]/i`,
  labelItemQuantity: (product) =>
    `//tr[@class='product-item']//img[contains(@alt, '${product}')]/../../..//input[contains(@type, 'tel')]`,
  shippingButton: '.srp-data > #shipping-calculate-link',
  linkCoupon:
    '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > .coupon-data > #cart-link-coupon-add',
  UnavailableShippingData: '.srp-unavailable',
  addedValidCoupon:
    '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > .info',
  homeBackButton: '.backButton',
}
