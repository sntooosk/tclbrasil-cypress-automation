export const ELEMENTS = {
  productCardBySku: (sku) => `article[data-fs-product-card-sku="${sku}"]`,
  buttonSelectOrderBy: 'span.vtex-search-result-3-x-filterPopupTitle',
  buttonSelectOrderByRow: '.vtex-search-result-3-x-orderByButton',
  imageSourceProductCard: '[data-fs-product-listing-results="true"]',
  buttonSelectOptionOrderBy: (optionOrderBy) =>
    `//button[text()='${optionOrderBy}']`,
  checkBoxFilterOrderBy: (optionFilterBy) =>
    `//input[@value='${optionFilterBy}']`,
  imageSourceResult: (product) =>
    `#gallery-layout-container img[alt*='${product}']`,
  imageSourceResultCompreJunto:
    '.vtex-product-summary-2-x-productNameContainer',
  labelResultEmpty:
    '[class*="vtex-search-result-"][class*="-x-galleryTitle--layout"]',
  buttonFilter: '.vtex-search-result-3-x-filterPopupButton',
  popupFilterItems: '.vtex-search-result-3-x-accordionFilterItem',
  checkBoxFIlterItems: '[data-testid="undefined-accordion-panel-checkbox"]',
  buttonCommom: '.vtex-button',
  unavailableProductDesktop:
    ':nth-child(8) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--unavailable-product-label > .mt0',
  unavailableProductMobile:
    ':nth-child(8) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summaryListMobile > .justify-between > .pr0.items-stretch > .vtex-flex-layout-0-x-flexCol--summaryDetailsListMobile > :nth-child(2) > .vtex-flex-layout-0-x-flexCol > :nth-child(6) > .vtex-flex-layout-0-x-flexRow > .flex-none',
  menuMobile: '.pr0 > .pa4',
  subMenuMobile:
    '.vtex-flex-layout-0-x-flexRow--drawer-section-two > .flex-none > :nth-child(2) > .pa4 > .vtex-store-drawer-0-x-drawerTriggerContainer > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
  categoryMenuMobile:
    ':nth-child(3) > .vtex-menu-2-x-styledLinkContainer a[title="Geladeira / Refrigerador"]',
  menuDesktop:
    '.vtex-flex-layout-0-x-flexRowContent--reduced-header-desktop > :nth-child(2) > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
  subMenuDesktop:
    '.vtex-menu-2-x-menuItem--reduced-header-menu-item > .vtex-menu-2-x-submenuContainer > .vtex-menu-2-x-submenuWrapper > .vtex-menu-2-x-submenu > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer > :nth-child(2) > .mt0 > :nth-child(2) > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-styledLinkContainer > #desktop-menu-item > .vtex-menu-2-x-styledLinkContent',
  categoryMenuDesktop:
    'li.vtex-menu-2-x-menuItem--isOpen a[title="Geladeiras / Refrigeradores"]',
  selectItemFromPlpMobile:
    ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summaryListMobile > .justify-between > .pr0.items-stretch > .vtex-flex-layout-0-x-flexCol--summaryDetailsListMobile > :nth-child(1) > .vtex-flex-layout-0-x-flexCol--summaryUpDetailsListMobile > :nth-child(1) > .vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand',
  selectItemFromDesktop:
    ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summaryListMobile > .justify-between > .pr0.flex-grow-1 > .vtex-flex-layout-0-x-flexCol--summaryDetailsListDesktop > .vtex-flex-layout-0-x-flexColChild--summaryDetailsListDesktop > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand',
  // The are some buttons with this identifiers on PLP page, use .contains() to be more especific
  btnToggleFreeShipping:
    ':nth-child(2) > .electrolux-toggle-filters-0-x-toggleLabel > .electrolux-toggle-filters-0-x-toggleSwitch',
  tagCardFreeShipping:
    ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .electrolux-free-shipping-badge-0-x-container > .electrolux-free-shipping-badge-0-x-promotionName',
  tagCardFreeShippingMobile:
    ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--summaryListMobile > .justify-between > .pr0.items-stretch > .vtex-flex-layout-0-x-flexCol--summaryDetailsListMobile > :nth-child(2) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .electrolux-free-shipping-badge-0-x-container > .electrolux-free-shipping-badge-0-x-promotionName',
  checkBoxCompareCard: (id_compare) =>
    `[id="${id_compare}-product-comparison"]`,
  btnCompareModal:
    '.vtex-product-comparison-0-x-compareProductButtonWrapper > .vtex-button > .vtex-button__label',
  titleProductComparisonPage: '.vtex-pageHeader__title',
  firstImageProductComparisonPage:
    '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
  secondImageProductComparisonPage:
    '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand',
  firstCardProduct:
    '.vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element',
  plpResults: '[data-fs-product-listing-results="true"]',

  // filtros
  filterCheckboxByValue: (value) =>
    `input[data-fs-checkbox="true"][data-value="${value}"]`,

  // ordenação (SELECT)
  orderByDropdown: 'select[data-testid="search-sort"]',
}
