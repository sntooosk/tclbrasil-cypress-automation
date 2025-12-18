export const ELEMENTS = {
  menuAboutElectroluxMobile: () => `//div[contains(text(),"Sobre Electrolux")]`,
  itemMenuAboutElectrolux: (aboutItem) =>
    `//a[normalize-space()='${aboutItem}']`,

  menuAtendimentoElectroluxMobile: () =>
    `//div[contains(text(),"Central de Atención")]`,
  itemMenuCentralAtencionElectrolux: (centralAtencionItem) =>
    `//a[normalize-space()='${centralAtencionItem}']`,

  itemFooter: (itemFooterText) => `//a[normalize-space()='${itemFooterText}']`,
  menuCategories:
    '[class*="electrolux-custom-mega-menu-app-"][class*="-x-titleMenu"]',
  menuCategoriesMobile: '[href="#menu-drawer-mobile"]',

  itemCategoryMenu: () => `.vtex-menu-2-x-styledLinkContent`,
  itemHeaderMenu: (itemCategoryText, itemCategoryLink) =>
    `//a[contains(@href,'${itemCategoryLink}')]//div[contains(text(),'${itemCategoryText}')]`,

  btnCloseModal: '.vtex__icon-close',

  inputFirstName: '.electrolux-form-footer-newsletter-3-x-nameInputContainer',
  inputClientEmail:
    '.electrolux-form-footer-newsletter-3-x-emailInputContainer',
  formSubmitButton: '.electrolux-form-footer-newsletter-3-x-formSubmitButton',
  sucessMessage:
    'span[class*="electrolux-form-footer-newsletter-"][class*="-x-errorTitle"]',
  formFooterNewslleter:
    '.electrolux-form-footer-newsletter-3-x-footerNewsletter',
  itemShelf: '#mais-vendidos-carousel-item-0 > [data-testid="fs-product-card"]',
  itemSpecificMenu:
    '[class*="electrolux-custom-mega-menu-app-"][class*="-x-styledLinkText flex justify-between"]',
  itemCategorySubMenu:
    '[class*="electrolux-custom-mega-menu-app-"][class*="-x-styledLink"] > .flex',
}
