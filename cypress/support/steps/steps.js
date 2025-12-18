import { And, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pages/Homepage'
import Header from '../pages/Header'
import MyAccount from '../pages/MyAccount'
import PdpPage from '../pages/Pdp'
import CartPage from '../pages/Cart'
import CheckoutPage from '../pages/Checkout'
import PLPPage from '../pages/Plp'
import CrossPage from '../pages/CrossPage'
import MinicartPage from '../pages/Minicart'

/*----------------------------------------------------------------------------------*/
/*FAKER */
const faker = require('faker-br')
/*Personal Data*/
const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const correctEmailFaker = faker.internet.email(firstNameFaker, lastNameFaker)
const invalidEmailFaker = faker.internet.email(
  firstNameFaker,
  lastNameFaker,
  '@invalidprovider',
)
const passwordFaker = faker.internet.password(16)

/*Address Data*/
const customStreetFaker = faker.helpers.replaceSymbolWithNumber('###-### #####')
const customNumberFaker = faker.internet.password(4) //faker.helpers.replaceSymbolWithNumber('##')
const complementFaker = faker.address.direction()

/*Coupon*/
const invalidCoupon = faker.helpers.replaceSymbolWithNumber('TEST###')
const validCoupon = 'BEMVINDO5'
/*----------------------------------------------------------------------------------*/

/*FIXTURES*/
import PLP from '../../fixtures/plp.json'
import itemsCategories from '../../fixtures/itemsCategories.json'
//import linkLogoHeader from '../../fixtures/linkLogoHome.json'
import addressData from '../../fixtures/addressData.json'
import accessData from '../../fixtures/accessData.json'
import product from '../../fixtures/product.json'
import personalData from '../../fixtures/personalData.json'
import siteTitle from '../../fixtures/siteTitle.json'
import cardsData from '../../fixtures/cardsData.json'
import Login from '../pages/Login'

Given("I'm on the home page", () => {
  HomePage.accessHomepage(siteTitle.title)
})

Given("I'm on the product list page", () => {
  PLPPage.visitPLP(PLP.url, siteTitle.title)
})

Given('I have one item in the cart with {} units', (quantity) => {
  CartPage.accessCartPageWithProduct(Number(quantity))
})

Given('I have two items in the cart with {} units each one', (quantity) => {
  CartPage.accessCartPageWithProducts1and2(Number(quantity))
})

Given('I add two items in the cart', () => {
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct(product[0].Product, 'visible')
  PdpPage.urlPDP(product[1].url)
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct(product[1].Product, 'visible')
})

Given("I'm on the product detail page", () => {
  PdpPage.urlPDP(Cypress.env('produto')[0].link)
})

Given('I am on the product detail page with a color variant', () => {
  PdpPage.urlPDP(Cypress.env('produto-02-url'))
})

Given("I'm on the cart with one product and {} units", (quantity) => {
  CartPage.accessCartPageWithProduct(
    product[0].salesChannel,
    product[0].SKU,
    quantity,
  )
})

When('I do click button login', () => {
  Header.clickBtnLogin()
})

When('I do login using correct email and password', () => {
  Login.typeEmail(accessData.correctEmail)
  Login.typePassword(accessData.correctPassword)
  Login.clickBtnEnter()
})

When('I do login using invalid format email', () => {
  Login.typeEmail(invalidEmailFaker)
  Login.typePassword(accessData.correctPassword)
  Login.clickBtnEnter()
})

When('I do login using incorrect email and password', () => {
  Login.typeEmail(correctEmailFaker)
  Login.typePassword(accessData.incorrectPassword)
  Login.clickBtnEnter()
})

When('I do login using incorrect password', () => {
  Login.typeEmail(accessData.correctEmail)
  Login.typePassword(accessData.incorrectPassword)
  Login.clickBtnEnter()
})

When('I do login using incorrect email', () => {
  Login.typeEmail(correctEmailFaker)
  Login.typePassword(accessData.correctPassword)
  Login.clickBtnEnter()
})

When('I do Loggout from the site', () => {
  Header.clickBtnLoggedUser()
  Header.clickBtnLogoff()
  if (Cypress.env('environment') == 'mobile') {
    MyAccount.clickConfirmExitPopup('login')
  }
})

When('I request a password recover', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.clickRecoveryPassword()
  HomePage.typeEmailRecoveryPassword(correctEmailFaker)
  HomePage.clickBtnSendRecoveryPassword()
})

When('I search for the product on the search bar', () => {
  Header.typeSearchBar(Cypress.env('produto')[0].name)
})

When('I search for a non-existent product', () => {
  Header.typeSearchBar(product[4].Product)
})

When('Access the PDP', () => {
  PLPPage.clickBySku(Cypress.env('produto')[0].sku)
})

When('Access the PDP Compre Junto', () => {
  PLPPage.clickFnSrcResultCompreJunto()
})

When('Add product to cart', () => {
  PdpPage.clickBtnAddToCart(Cypress.env('produto')[0].sku)
})

When('I add the product variation to the cart', () => {
  PdpPage.clickConfirmModalVariation()
})

When('I calculate shipping and proceed to checkout', () => {
  CartPage.clickBtnCalculateShipping()
  CartPage.selectCmbState(addressData[0].state)
  CartPage.selectCmbCity(addressData[0].city)
  CartPage.validateLblShippingCost('calculated')
  CartPage.clickBtnCartToOrderForm()
})

When('I proceed to checkout', () => {
  CartPage.clickBtnCartToOrderForm()
})
When('Avanced to checkout', () => {
  CartPage.clickBtnCartToOrder()
})

When('I fill in the checkout data', () => {
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(personalData[0].phone)
  CheckoutPage.chkNewsletter('check')
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without firstname', () => {
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(personalData[0].phone)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without lastname', () => {
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(personalData[0].phone)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without document', () => {
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typePhoneProfile(personalData[0].phone)
  CheckoutPage.clickBtnGoToShipping()
})

/*Trecho comentado devido não fazer parte da loja de BR*/
/*When('I fill in the checkout data without area code phone number', () => {
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.chkTermsAndConditions('check')
  CheckoutPage.clickBtnGoToShipping()
})*/

When('I fill in the checkout data without phone number', () => {
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(personalData[0].areaCodePhone)
  CheckoutPage.clickBtnGoToShipping()
})

When('I select the payment option Mercado Pago', () => {
  CheckoutPage.selectMercadoPago()
})

When('I add the product to the cart', () => {
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
})

When('I remove the item from cart', () => {
  CartPage.clickFnItemRemove(Cypress.env('produto')[0].sku)
})

When('I remove all items from cart', () => {
  CartPage.clickClearCart(
    Cypress.env('produto')[0].sku,
    Cypress.env('produto')[1].sku,
  )
})

When('I add the quantity for {} units', (quantity) => {
  CartPage.clickXpFnIncrementQuantity(Cypress.env('produto')[0].name, quantity)
})

When('I reduce the quantity for {} units', (quantity) => {
  CartPage.clickXpFnDecrementQuantity(Cypress.env('produto')[0].name, quantity)
})

When('I access the product page {}', (product) => {
  Header.typeSearchBar(product)
  PLPPage.clickFnSrcResult(product)
})

When('The page is full loaded', () => {
  PdpPage.validateBtnAddToCart()
})

When('I type a invalid discount coupon', () => {
  CartPage.clickBtnCartCouponAdd()
  CartPage.typeInputCartCoupon(invalidCoupon)
})

When('I access the about Electrolux menu', () => {
  HomePage.clickMenuCategories()
  HomePage.clickAboutElectrolux()
})
Then('The filter parameter must be in the url {}', (value) => {
  PLPPage.validateFilterInUrl(value)
})

When('I access the atendimento Electrolux menu', () => {
  HomePage.clickMenuCategories()
  HomePage.clickAtendimentoElectrolux()
})

When('I fill visa card number', () => {
  CheckoutPage.typeCardNumber(cardsData.visa[0].number)
})

When('I fill american express card number', () => {
  CheckoutPage.typeCardNumber(cardsData.americanExpress[0].number)
})

When('I fill mastercard card number', () => {
  CheckoutPage.typeCardNumber(cardsData.mastercard[0].number)
})

When('I fill dinners card number', () => {
  CheckoutPage.typeCardNumber(cardsData.diners[0].number)
})

When('I edit my personal data - Gender M', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[0].documentID)
  MyAccount.typeHomePhone(personalData[0].phone)
  MyAccount.selectGender(personalData[0].gender)
  MyAccount.typeBirthDate(personalData[0].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I edit my personal data - Gender F', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[1].documentID)
  MyAccount.typeHomePhone(personalData[1].phone)
  MyAccount.selectGender(personalData[1].gender)
  MyAccount.typeBirthDate(personalData[1].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I edit my personal data - Without Gender', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[0].documentID)
  MyAccount.typeHomePhone(personalData[0].phone)
  MyAccount.typeBirthDate(personalData[0].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I calculate valid shipping', () => {
  CartPage.typeZipCode(addressData[0].zipCode)
})

When('I calculate invalid shipping', () => {
  CartPage.typeZipCode(addressData[2].zipCode)
  CartPage.clickBtnCalculateShipping()
})

When('I calculate shipping unavailable', () => {
  CartPage.typeZipCode(addressData[3].zipCode)
  CartPage.clickBtnCalculateShipping()
})

And('I fill the address data', () => {
  CheckoutPage.typeZipCode(addressData[0].zipCode)
  CheckoutPage.typeCustomNumberShipping()
  CheckoutPage.clickBtnGoToPayment()
})

Then('I must be logged on the site', () => {
  Header.validateUserLogged('logged', accessData.cookieAuth)
})

Then('Must be informed that the data access are wrong', () => {
  Header.validateUserLogged('not logged', accessData.cookieAuth)
  Header.validateMsgLogin('Usuário e/ou senha incorretos')
})

Then('Must be informed that the email is in a invalid format', () => {
  Header.validateUserLogged('not logged', accessData.cookieAuth)
  Header.validateMsgLogin('Entre com um email válido')
})

Then('I must not be logged into the site', () => {
  Header.validateUserLogged('not logged', accessData.cookieAuth)
})

Then('I input and confirm a new password', () => {
  HomePage.typeNewPasswordRecoveryPassword(passwordFaker)
  HomePage.typeConfirmNewPasswordRecoveryPassword(passwordFaker)
})

Then('The order must be successfully', () => {
  CheckoutPage.clickBtnBuyNow()
})

Then('the product should be displayed in the cart', () => {
  CartPage.validateProductInCartBySku(Cypress.env('produto')[0].sku, 'visible')
})
Then('the product variation should be displayed in the cart', () => {
  CartPage.validateProductInCartBySku(
    Cypress.env('produto-voltagem')[0].sku,
    'visible',
  )
})

Then('I validate if the product is not in the cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct(Cypress.env('produto')[0].name, 'not visible')
})

Then('I validate if is clean cart', () => {
  CartPage.validateCartEmpty()
})

Then('I validate if the two items are in cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct(Cypress.env('produto')[0].name, 'visible')
  CartPage.validateFnImgProduct(Cypress.env('produto')[1].name, 'visible')
})

Then('I validate if the quantity has been changed to {}', (quantity) => {
  CartPage.validateXpFnItemQuantity(Cypress.env('produto')[0].name, quantity)
})

Then(
  'I validate if the quantity of product one minishelf has been changed to {}',
  (quantity) => {
    // Product Minishelf one item Cart
    CartPage.validateXpFnItemQuantity(product[7].Product, quantity)
  },
)

Then(
  'I validate if the quantity of product second minishelf has been changed to {}',
  (quantity) => {
    // Product Minishelf second item Cart
    CartPage.validateXpFnItemQuantity(product[8].Product, quantity)
  },
)

Then('the product value is visible', () => {
  PdpPage.validatePrice()
})

Then('The product image should be displayed', () => {
  PdpPage.validateGalleryVisibility()
})

Then('I can browse the gallery thumbnails', () => {
  PdpPage.validateGalleryNavigation()
})

Then('The shipping table should be displayed', () => {
  PdpPage.validateShippingDataTable()
})

Then('The shipping table should not be displayed', () => {
  PdpPage.validateShippingDataTableNotAvailable()
})

Then('The shipping table should be displayed', () => {
  PdpPage.validateShippingDataTable()
})

Then('The discount coupon should be invalid', () => {
  CartPage.validateMsgToastInvalid(invalidCoupon)
})

Then('The product card should be visible', () => {
  PLPPage.validateProductCard()
})

Then('I validate the page ordenation by {}', (orderBy) => {
  PLPPage.validatePageOrdenation(orderBy)
})

Then('The filter parameter must be in the url {}', (value) => {
  PLPPage.validateFilterInUrl(value)
})

When('I select the filter Cor preto', () => {
  PLPPage.openFilterAccordion('Cor')
  PLPPage.selectFilter('preto')
})
When('I select the ordination by {}', (order) => {
  PLPPage.selectOrderBy(order)
})

Then('The filter parameter must be checked Cor preto', () => {
  PLPPage.validateFilterChecked('preto')
  PLPPage.validateFilterInUrl('preto')
})

Then('the store logo has a link to homepage', () => {
  //HomePage.validateLinkHeaderToHome(linkLogoHeader.link)
})

Then('No results should be displayed', () => {
  PLPPage.validateResultEmpty()
})

Then('I verify the categories available on menu', () => {
  HomePage.clickMenuCategories()
  cy.scrollTo('top')
  itemsCategories.forEach((itemsCategories) => {
    HomePage.validateLinksOnMenuCategories(
      itemsCategories.text,
      itemsCategories.url,
    )
  })
})

Then('I check if the address was added correctly', () => {
  MyAccount.validateAddressTable()
  MyAccount.validateAddressSavedStreet(addressData[0].street)
  MyAccount.validateAddressSavedComplement(complementFaker)
  MyAccount.validateAddressSavedCity(addressData[0].city)
  MyAccount.validateAddressSavedCountry(addressData[0].country)
})

Then('I check if the personal data was edited correctly - Gender M', () => {
  MyAccount.validateNameSaved(firstNameFaker)
  MyAccount.validateLastNameSaved(lastNameFaker)
  MyAccount.validateDocumentSaved(personalData[0].documentID)
  MyAccount.validateGenderSaved(personalData[0].gender)
  MyAccount.validateBirthDate(personalData[0].birthDate)
  MyAccount.validateHomePhone(personalData[0].phone)
})

Then('I check if the personal data was edited correctly - Gender F', () => {
  MyAccount.validateNameSaved(firstNameFaker)
  MyAccount.validateLastNameSaved(lastNameFaker)
  MyAccount.validateDocumentSaved(personalData[1].documentID)
  MyAccount.validateGenderSaved(personalData[1].gender)
  MyAccount.validateBirthDate(personalData[1].birthDate)
  MyAccount.validateHomePhone(personalData[1].phone)
})

Then(
  'I check if the personal data was edited correctly - Without Gender',
  () => {
    MyAccount.validateNameSaved(firstNameFaker)
    MyAccount.validateLastNameSaved(lastNameFaker)
    MyAccount.validateDocumentSaved(personalData[0].documentID)
    MyAccount.validateBirthDate(personalData[0].birthDate)
    MyAccount.validateHomePhone(personalData[0].phone)
  },
)

Then('I check if the address was edited correctly', () => {
  MyAccount.validateAddressTable()
  MyAccount.validateAddressSavedStreet(addressData[1].street)
  MyAccount.validateAddressSavedNumber(customNumberFaker)
  MyAccount.validateAddressSavedComplement(complementFaker)
  MyAccount.validateAddressSavedZipCode(addressData[1].zipCode)
  MyAccount.validateAddressSavedCity(addressData[1].city)
  MyAccount.validateAddressSavedCountry(addressData[1].country)
})

Then('I check that I am in the correct page', () => {
  MyAccount.validateMyOrdersPage()
})

Then('I check if the address was deleted correctly', () => {
  MyAccount.validateAddressTable()
  MyAccount.validateDeletedAddressStreet(customStreetFaker)
  MyAccount.validateDeletedAddressComplement(complementFaker)
  MyAccount.validateDeletedAddressCity(addressData[1].city)
})

Then('checkbox MASTERCARD must be selected', () => {
  CheckoutPage.validateCreditCardFlag('Mastercard')
})

Then('checkbox VISA must be selected', () => {
  CheckoutPage.validateCreditCardFlag('Visa')
})

Then('checkbox DINNERS must be selected', () => {
  CheckoutPage.validateCreditCardFlag('Diners')
})

Then('checkbox AMERICANEXPRESS must be selected', () => {
  CheckoutPage.validateCreditCardFlag('American Express')
})

Then('mandatory firstname alert is displayed', () => {
  CheckoutPage.validateFirstNameAlert()
})

Then('mandatory lastname alert is displayed', () => {
  CheckoutPage.validateLastNameAlert()
})

Then('mandatory document alert is displayed', () => {
  CheckoutPage.validateDocumentAlert()
})

Then('mandatory phone number alert is displayed', () => {
  CheckoutPage.validatePhoneAlert()
})

Then('The shipping table should not be displayed at Cart', () => {
  CartPage.validateShippingUnavailable()
})

Then('The shipping table should be displayed at Cart', () => {
  CartPage.validateShippingAvailable()
})

Then('The unavailable shipping table should be displayed at Cart', () => {
  CartPage.validateUnavailableShipping()
})

And('On the product page calculate valid shipping', () => {
  PdpPage.typeZipCode(addressData[0].zipCode)
  PdpPage.clickBtnCalcShipping()
  PdpPage.validateShippingDataTable()
})

And('On the product page calculate invalid shipping', () => {
  PdpPage.typeZipCode(addressData[2].zipCode)
  PdpPage.clickBtnCalcShipping()
})

And('I Access the address page', () => {
  MyAccount.visitAddress()
})

And('I access the new address page', () => {
  MyAccount.clickNewAddress()
})

And('I remove an address', () => {
  MyAccount.clickEditAddress()
  MyAccount.clickDeleteAddress()
})

Then('I check the removal success message', () => {
  MyAccount.validateMessageRemoveAddress()
})

And('I Access my orders page', () => {
  MyAccount.visitMyOrders()
})

And('I Access the profile page', () => {
  MyAccount.visitProfile()
})

And('I add a new address', () => {
  MyAccount.typeZipCode(addressData[0].zipCode)
  MyAccount.typeNumber(customNumberFaker)
  MyAccount.typeComplement(complementFaker)
  MyAccount.clickSaveNewAddress()
})

And('I edit an address', () => {
  MyAccount.clickEditAddress()
  MyAccount.typeZipCode(addressData[1].zipCode)
  MyAccount.typeNumber(customNumberFaker)
  MyAccount.typeComplement(complementFaker)
  MyAccount.clickSaveEditedAddress()
})

And('I access the edition address page', () => {
  MyAccount.clickEditAddress()
})

And('I see the lead capture modal', () => {
  CrossPage.closeLeadCaptureModal()
})

Then('I select bank invoice', () => {
  CheckoutPage.selectBankInvoice()
})

And('Check release version', () => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2500)
  cy.get('link[href*="theme@"]')
    .should('exist')
    .invoke('attr', 'href')
    .then((href) => {
      cy.log('HREF encontrado:', href)
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(3000)
    })
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000)
})

When('Open the minicart', () => {
  Header.clickIconCard()
})

When('Close the minicart', () => {
  MinicartPage.clickCloseMinicart()
})

Then('Check if the cart is empty', () => {
  MinicartPage.validateTextEmptyMinicart()
})

And('I add the product to the cart via floating button', () => {
  PdpPage.clickFloatingbutton()
})

When("I'm on the PLP with product unavailable", () => {
  PLPPage.visitPLP(PLP.url, siteTitle.title)
})

And('I validate the text from product unavailable', () => {
  PLPPage.searchUnavailableProduct()
})

When('Click in a product from shelf', () => {
  HomePage.clickProductFromShelf()
})

And('Add a product to minicart from minishelf', () => {
  PdpPage.addProductFromMinishelf()
})

Then('Validate the language on minicart', () => {
  MinicartPage.validateLanguageMinicart()
})

And('On the product page calculate unavailable shipping', () => {
  PdpPage.clickBtnCalcShippingModal()
  PdpPage.typeZipCode(addressData[3].zipCode)
  PdpPage.clickBtnCalcShipping()
})

And('The unavailable shipping table should be displayed', () => {
  PdpPage.clickBtnCloseShippingModalMobile()
  PdpPage.validateUnavailableShippingDataTable()
})

And('I try to add the product to the cart', () => {
  PdpPage.addUnavailableProductToCart()
})

And('I validate I am still on PDP', () => {
  PdpPage.validateStillPdp(Cypress.env('produto-01-url'))
})

And('I try to add the product to the cart by floating button', () => {
  PdpPage.addUnavailableProductbyFloatingbutton()
})

And('I am on the PDP with minishelf', () => {
  PdpPage.urlPDP(product[14].url, siteTitle.title)
})

When('Add a product from minishelf', () => {
  PdpPage.addProductFromMinishelf()
})

And('Add a second product from minishelf', () => {
  PdpPage.addSecondProductFromMinishelf()
})

And('Increase quantity product in minicart', () => {
  if (Cypress.env('environment') == 'desktop') {
    MinicartPage.clickXpFnIncrementQuantity(1, 1, 1)
  } else {
    MinicartPage.clickXpFnIncrementQuantityMobile(product[7].SKU, 2)
  }
})

And('Go to cart', () => {
  MinicartPage.clickGoToCart()
})

And('Click on Choose more products', () => {
  CartPage.clickChooseMoreProducts()
})

Then('I remove all items from minicart', () => {
  MinicartPage.clickFnItemRemove(product[7].SKU)
  MinicartPage.clickFnItemRemove(product[8].SKU)
})

And('Open the minicart on home', () => {
  cy.wait(20000)
  Header.cl()
})

And('I do fill in the newsletter form', () => {
  HomePage.scrollPage()
  HomePage.typeFirstNameProfile(firstNameFaker)
  HomePage.typeEmail(correctEmailFaker)
})

And('I send to the Masterdata', () => {
  HomePage.sendNewsletterForm()
})

Then('The success message is displayed', () => {
  HomePage.validateMessage()
})

Given("I'm on an out of stock product page", () => {
  PdpPage.urlPDP(
    'https://www.lojatcl.com.br/smart-tv-tcl-43-polegadas-full-hd-qled-s5k-wifi-bluetooth-google-tv-2-hdmi-hdr10-dolby-audio-43s5k-32536/p',
  )
})

When('I fill in the form data out of stock', () => {
  PdpPage.typeNameNotification(firstNameFaker)
  PdpPage.typeEmailNotification(correctEmailFaker)
})

And('I click on the register notification button', () => {
  PdpPage.clickBtnRegisterNotification()
})

Then('I validate the successful registration message notify me', () => {
  PdpPage.validateMessageNotifyMe()
})

Given('Access a PLP that contains products with free shipping', () => {
  PLPPage.visitPLP(PLP.url_plp_toggle, siteTitle.title)
})

When('Turn on the free shipping toggle', () => {
  PLPPage.clickToggleFreeShipping()
})

Then('Validate cards with the information Free shipping', () => {
  PLPPage.validateTagToggleFreeShipping()
})

When('I access the reduced header', () => {
  HomePage.displayMenuReduced()
})

And('I access the PLP', () => {
  PLPPage.accessPlpPageFromMenu()
})

And('I access a PDP with options voltage', () => {
  PLPPage.listOption()
  PLPPage.selectProductFromPlp()
})

Then('each variation option should update the product name', () => {
  PdpPage.validateSizeButtonsNavigation()
})

Then('the product name should remain the same', () => {
  PdpPage.validateProductNameDidNotChange()
})

Then('I validate the alert message', () => {
  PdpPage.validateAlertMessage()
})

When('I click on the anchor with the description summary', () => {
  PdpPage.clickBtnAnchorDescriptionSummary()
})

Then('I am redirected to the product summary', () => {
  PdpPage.validateRedirectProductSummary()
})

Given('I am on the product detail page with R2U and video options', () => {
  PdpPage.urlPDP(Cypress.env('produto-03-url'))
})

When('I click on the video option', () => {
  PdpPage.videoButtonClick()
})

And('I check the video displayed on the modal', () => {
  PdpPage.videoModal()
})

And('I click on the R2U option', () => {
  PdpPage.r2UButton()
})

Then('I check the R2U displayed on the modal', () => {
  PdpPage.r2UModal()
})

And('I open the payment options modal', () => {
  PdpPage.clickTextPaymentOptionsModal()
  PdpPage.validatePaymentOptionsLanguage()
})

Then('I click to close the payment options modal', () => {
  PdpPage.clickBtnClosePaymentOptionsModal()
})

And("Select 2 products by clicking Compare on each item's cards", () => {
  PLPPage.clickCompareCard(product[2].id_plp_compare)
  cy.wait(10000)
  Header.typeSearchBarPLP(product[0].Product)
  cy.wait(10000)
  PLPPage.clickCompareCard(product[0].id_plp_compare)
  cy.wait(5000)
})

And('I click on the Compare button of the modal', () => {
  PLPPage.clickBtnCompareModal()
})

Then('I check the selected products on the product comparison page', () => {
  PLPPage.checkTitleProductComparisonPage()
  PLPPage.checkFirstImageProductComparisonPage()
  PLPPage.checkSecondImageProductComparisonPage()
})

When('I type a valid discount coupon', () => {
  CartPage.clickBtnCartCouponAdd()
  CartPage.typeInputCartValidCoupon(validCoupon)
})

Then('The discount coupon should be valid', () => {
  CartPage.validateValidDiscountCoupon()
})

And('I click on the  cart share option', () => {
  CartPage.clickCartShareOption()
})

Then('The cart share modal is displayed', () => {
  CartPage.validateShareModal()
})
And('I type a valid discount coupon on the checkout', () => {
  CheckoutPage.clickBtnCheckoutCouponAdd()
  CheckoutPage.typeInputCheckoutValidCoupon(validCoupon)
})

Then('The discount coupon should be valid on the checkout', () => {
  CheckoutPage.validateValidDiscountCouponOnCheckout()
})

And('I click on button from checkout', () => {
  CartPage.clickBtnCartToOrderForm()
})

When('I click on button return to cart', () => {
  CartPage.clickBtnReturnToCart()
})

Then('Click the store logo to homepage', () => {
  CartPage.clickLogoToHome()
})

When('I search for the product Compre Junto on the search bar', () => {
  Header.typeSearchBar(product[6].Product)
})

And('Adds Compre Junto products', () => {
  PdpPage.addCompreJuntoProducts()
})

Then('The minicart should open automatically', () => {
  MinicartPage.miniCartAutomatically()
})

And('Validate open cart', () => {
  CartPage.clickTitleCart()
})

When('I look for the product with extended warranty in the search bar', () => {
  Header.typeSearchBar()
})

And('Access the PDP extended warranty', () => {
  PLPPage.clickFnSrcResultCompreJunto()
})

And('Add extended warranty', () => {
  PdpPage.addExtendedWarrantyProducts()
})

And('Add product by buy floating', () => {
  PdpPage.clickBuyFloating()
})

And('Change voltage', () => {
  CartPage.clickOnTheSlector()
  CartPage.clickConfirmVoltage()
})

And('Check voltage change', () => {
  CartPage.checkChangedVoltage()
  CartPage.checkUpdateExtendedWarrant()
})

Given('I am on the product details page with voltage change', () => {
  PdpPage.urlPDP(product[16].url)
})

And('I click on the voltage option', () => {
  PdpPage.clickVoltageOption(product[14].SKU[0])
})

And('I click on add warranty extended button', () => {
  PdpPage.addWarrantyExtended()
})

Then('I validate if the product with voltage is in the cart', () => {
  CartPage.validateFnImgProduct(product[16].Product, 'visible')
})

And('I click on button to remove the warranty extended', () => {
  CartPage.clickFnItemRemove(product[16].SKU_garantia[1])
  CartPage.validateBtnWarrantyExtendedOnCart()
})

Then('I validate if the product stays in the cart', () => {
  CartPage.validateFnImgProduct(product[16].Product, 'visible')
})

And('I add the product with warranty extended to the cart', () => {
  PdpPage.clickBuyFloating()
  CartPage.accessCartPage()
})

And('I click on the product color variant', () => {
  PdpPage.clickColorVariant()
})

And('I click to add the product frequency', () => {
  PdpPage.clickProductFrequency()
  PdpPage.selectProductFrequency()
  PdpPage.clickConfirmProductFrequency()
})

When('I add the product to intermediate page', () => {
  PdpPage.clickBtnAddToIntermediatePage()
})

And('Middle page of the extended warranty I click to go to the cart', () => {
  PdpPage.clickButtonAddToCart()
})

Then('The recurrence and product are added to the cart', () => {
  CartPage.validateRecurrenceAdded()
  //CartPage.validateFnImgProduct(Cypress.env('produto-02-name'), 'visible')
})

When('I search for the product with in-store pickup in the search bar', () => {
  Header.typeSearchBar(Cypress.env('produto')[1].name)
})

When('Access the PDP in-store pickup', () => {
  PLPPage.clickFnSrcResultCompreJunto()
})

When('I calculate in-store pickup shipping', () => {
  CartPage.typeZipCode(addressData[4].zipCode)
})

And('Click on Pick up in store', () => {
  CartPage.clickbtnPickUoInStore()
})

When('I increase the quantity for 2 units', () => {
  CartPage.clickIncreaseQuantity()
})

And('I decrease the quantity for 1 units', () => {
  MinicartPage.clickDecreaseQuantity()
})

And('Click collect in store', () => {
  CheckoutPage.clickInStore()
})

And('Search by address', () => {
  CheckoutPage.searchAddress()
})

And('I put the zip code', () => {
  CheckoutPage.typeZipCode(addressData[4].zipCode)
})

And('Choose a store to pick up', () => {
  CheckoutPage.chooseStore()
})

And('I click on the withdraw button', () => {
  CheckoutPage.confirmStore()
})

Then('Check the selected store', () => {
  CheckoutPage.validateStore()
})

And('Click on a category {}', (category) => {
  if (Cypress.env('environment') == 'mobile') {
    // access category Eletrodomesticos
    HomePage.clickItemMenuCategories()
  }
  HomePage.clickItemSubMenuCategories(category)
})

And('Click on the header menu', () => {
  HomePage.clickMenuCategories()
})

When('Click on the image to open the modal', () => {
  PdpPage.clickProductImage()
})

Then('I check if the image is visible in the modal', () => {
  PdpPage.validateProductImageModal()
})

And('Click on the first card to access the PDP', () => {
  PLPPage.clickFirstCardProduct()
})

Then('I do Loggout from the site in MyAccount', () => {
  if (Cypress.env('environment') == 'mobile') {
    MyAccount.accessMyAccountPage()
  }
  MyAccount.myAccountClickBtnExit()
  MyAccount.clickConfirmExitPopup('myaccount')
})

Then('I select Pix option', () => {
  CheckoutPage.selectPixOption()
})

Given('I am on the product detail page with variations', () => {
  PdpPage.urlPDP(Cypress.env('produto-voltagem')[0].link)
})
