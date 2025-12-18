export const ELEMENTS = {
  productCardBySku: (sku) => `article[data-sku="${sku}"]`,
  plpResults: '[data-fs-search-results="true"]',
  filterCheckboxByValue: (value) => `input[type="checkbox"][value*="${value}"]`,
  orderByDropdown: '[data-fs-search-controls-sort-select="true"]',
  labelResultEmpty: '[data-fs-search-results-empty-state="true"]',
}
