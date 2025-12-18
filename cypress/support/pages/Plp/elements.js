export const ELEMENTS = {
  productCardBySku: (sku) => `article[data-fs-product-card-sku="${sku}"]`,
  plpResults: '[data-fs-product-listing-results="true"]',
  filterCheckboxByValue: (value) =>
    `input[data-fs-checkbox="true"][data-value="${value}"]`,
  orderByDropdown: 'select[data-testid="search-sort"]',
  labelResultEmpty: '.EmptySearchPage_empty-search__warning__Zc3z3',
}
