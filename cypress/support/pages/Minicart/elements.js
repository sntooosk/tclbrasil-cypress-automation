export const ELEMENTS = {
  minicartIcon:
    '.electrolux-minicart-3-x-minicartIconContainer > .vtex-store-icons-0-x-cartIcon',
  minicartTextEmpty: '[data-testid="fs-empty-state"]',
  minicartTextWithProduct:
    '.vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
  xpFnItemQuantity: (prod) =>
    `:nth-child(${prod}) > .justify-between > :nth-child(2) > .vtex-flex-layout-0-x-flexCol--main-container > :nth-child(1) > .vtex-flex-layout-0-x-flexRow--minicart-sub-container > .vtex-flex-layout-0-x-flexRowContent--minicart-sub-container > :nth-child(2) > .vtex-flex-layout-0-x-flexRow--minicart-product-quantity > .vtex-flex-layout-0-x-flexRowContent--minicart-product-quantity > .vtex-flex-layout-0-x-stretchChildrenWidth > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .electrolux-product-list-2-x-quantitySelectorContainer > .electrolux-product-list-2-x-quantitySelectorWrapper > .electrolux-product-list-2-x-inputContainer`,
  xpFnIncrementQuantity: (prod) =>
    `:nth-child(${prod}) > .justify-between > :nth-child(2) > .vtex-flex-layout-0-x-flexCol--main-container > :nth-child(1) > .vtex-flex-layout-0-x-flexRow--minicart-sub-container > .vtex-flex-layout-0-x-flexRowContent--minicart-sub-container > :nth-child(2) > .vtex-flex-layout-0-x-flexRow--minicart-product-quantity > .vtex-flex-layout-0-x-flexRowContent--minicart-product-quantity > .vtex-flex-layout-0-x-stretchChildrenWidth > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .electrolux-product-list-2-x-quantitySelectorContainer > .electrolux-product-list-2-x-quantitySelectorWrapper > .electrolux-product-list-2-x-quantitySelectorIncrease`,
  xpFnIncrementQuantityMobile:
    '.electrolux-product-list-2-x-quantitySelectorIncrease',
  minicartClose:
    '.electrolux-minicart-3-x-opened > .electrolux-minicart-3-x-drawerContent > .electrolux-minicart-3-x-closeIconContainer > button',
  goToCart: '#proceed-to-checkout > .vtex-button__label',
  buttonItemRemoveProduct: (skuid) => `#remove-button-${skuid}`,
  IconMinicartHome:
    ':nth-child(5) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .electrolux-minicart-3-x-minicartWrapperContainer > .electrolux-minicart-3-x-minicartContainer > .pa4 > .vtex-button',
  xpFnItemQuantityMobile: (skuid) => `#product-list-quantity-stepper-${skuid}`,
  IconMinicartHomeMobile: '.pa4 > .vtex-button',
  titleMiniCart: '.electrolux-minicart-3-x-minicartTitle',
  btnDecreaseQuantity: '.electrolux-product-list-2-x-quantitySelectorDecrease',
}
