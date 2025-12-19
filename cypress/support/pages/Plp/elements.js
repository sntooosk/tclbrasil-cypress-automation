export const ELEMENTS = {
  productCardBySku: (sku) => `article[data-fs-product-card-sku="${sku}"]`,
  plpResults: '[data-fs-product-listing-results="true"]',
  filterCheckboxByValue: (value) =>
    `input[data-fs-checkbox="true"][data-value="${value}"]`,
  orderByDropdown: 'select[data-testid="search-sort"]',
  labelResultEmpty: '.EmptySearchPage_empty-search__warning__Zc3z3',
  buttonApplyFilter: '[data-testid="fs-filter-slider-button-apply"] > div',
  openFilter: '[data-testid="open-filter-button"] > div',
}
