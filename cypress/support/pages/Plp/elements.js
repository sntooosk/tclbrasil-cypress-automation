export const ELEMENTS = {
  productCard: '[class*="custom-product-card__container"]',
  productCardName: '[class*="custom-product-card__info-name"]',
  plpResults: '[class*="section-product-gallery"]',
  filterCheckboxByValue: (value) =>
    `[class*="filter"] input[value*="${value}"]`,
  orderByDropdown: '[class*="sort"] select',
  labelResultEmpty: '[class*="empty-search"]',
  buttonApplyFilter: '[class*="filter-slider"] [class*="apply"]',
  openFilter: '[class*="open-filter"]',
}
