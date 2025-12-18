export const ELEMENTS = {
  inputSearchBar: '[data-testid="fs-search-input"] > [data-testid="fs-input"]',
  inputSearchBarMobile: '[id*="downshift-"][id$="-input"]',
  inputSearchBarMobilePLP: '#downshift-3-input',
  labelMsgInvalidLogin: 'div.vtex-login-2-x-formError',
  buttonRecoveryPassword:
    'div.vtex-login-2-x-emailAndPasswordForm a.vtex-login-2-x-forgotPasswordLink',

  buttonLogoff: `(//a[@href='/api/vtexid/pub/logout?scope=tclbrasil&returnUrl=/'][contains(.,'Sair')])[1]`,
  buttonLogoffMobile: `(//div[contains(.,'Sair')])[13]`,

  inputEmailRecovery: 'div.vtex-login-2-x-emailVerification input[name=email]',
  buttonSend:
    'div.vtex-login-2-x-emailVerification div.vtex-login-2-x-formFooter div[class*=sendButton] button[type=submit]',
  inputNewPassword:
    'div.vtex-login-2-x-inputContainerPassword div.relative input[type=password]',
  inputConfirmNewPassword:
    'div.vtex-login-2-x-inputContainerPassword > label input[type=password]',

  buttonLoginWithEmailPassword:
    '[class*="vtex-login-"][class*="-x-button vtex-login-"][class$="-x-emailPasswordOptionBtn"]',

  buttonLogin: '[data-testid="fs-link-button"] > div',
  buttonLoginMobile: '[data-testid="fs-link"] > div > [data-testid="icon"]',
  buttonLoggedUser: '[data-testid="fs-link-button"] > div',
  buttonLoggedUserMobile:
    '[class*="electrolux-elux-summary-order-login-"][class*="-x-iconAvatar"]',
  buttonCart: '[data-testid="cart-toggle"] > [data-fs-button-wrapper="true"]',
}
