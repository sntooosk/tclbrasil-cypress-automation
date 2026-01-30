/* eslint-disable cypress/no-assigning-return-values */
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
import Login from '../pages/Login'

const faker = require('faker-br')

const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const correctEmailFaker = faker.internet.email(firstNameFaker, lastNameFaker)
const invalidEmailFaker = faker.internet.email(
  firstNameFaker,
  lastNameFaker,
  '@invalidprovider',
)
const customNumberFaker = faker.internet.password(4)
const complementFaker = faker.address.direction()
const invalidCoupon = faker.helpers.replaceSymbolWithNumber('TEST###')
const validCoupon = 'BEMVINDO5'

import PLP from '../../fixtures/plp.json'
import itemsCategories from '../../fixtures/itemsCategories.json'
import addressData from '../../fixtures/addressData.json'
import accessData from '../../fixtures/accessData.json'
import productUnavailable from '../../fixtures/productUnavailable.json'
import personalData from '../../fixtures/personalData.json'
import siteTitle from '../../fixtures/siteTitle.json'

// Navigation
Given("I'm on the home page", () => {
  HomePage.accessHomepage(siteTitle.title)
})

Given("I'm on the product list page", () => {
  PLPPage.visitPLP(PLP.url, siteTitle.title)
})

Given("I'm on the product detail page", () => {
  PdpPage.urlPDP(Cypress.env('produto-01-url'))
})

Given('I am on the product detail page with variations', () => {
  PdpPage.urlPDP(Cypress.env('produto-02-url'))
})

Given("I'm on an out of stock product page", () => {
  PdpPage.urlPDP(
    '/smart-tv-tcl-85-polegadas-qled-mini-led-4k-c8k-wifi-bluetooth-google-tv-288hz-vrr-hdr10-85c8k-32418/p',
  )
})

// Cart preconditions
Given('I have one item in the cart with {} units', (quantity) => {
  CartPage.accessCartPageWithProduct(Number(quantity))
})

Given('I have two items in the cart with {} units each one', (quantity) => {
  CartPage.accessCartPageWithProducts1and2(Number(quantity))
})

// Login
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

// Search and navigation
When('I search for the product on the search bar', () => {
  Header.typeSearchBar(Cypress.env('produto-01-name'))
})

When('I search for a non-existent product', () => {
  Header.typeSearchBar(productUnavailable.name)
})

When('Access the PDP', () => {
  PLPPage.clickBySku(Cypress.env('produto-01-sku'))
})

// PDP interactions
When('Add product to cart', () => {
  PdpPage.clickBtnAddToCart()
})

When('I add the product variation to the cart', () => {
  PdpPage.clickConfirmModalVariation()
})

When('I open the payment options modal', () => {
  PdpPage.clickTextPaymentOptionsModal()
  PdpPage.validatePaymentOptionsLanguage()
})

When('On the product page calculate valid shipping', () => {
  PdpPage.typeZipCode(addressData[0].zipCode)
  PdpPage.clickBtnCalcShipping()
})

When('On the product page calculate invalid shipping', () => {
  PdpPage.typeZipCode(addressData[2].zipCode)
  PdpPage.clickBtnCalcShipping()
})

When('I fill in the form data out of stock', () => {
  PdpPage.typeNameNotification(firstNameFaker)
  PdpPage.typeEmailNotification(correctEmailFaker)
})

When('I click on the register notification button', () => {
  PdpPage.clickBtnRegisterNotification()
})

// Cart actions
When('I proceed to checkout', () => {
  CartPage.clickBtnCartToOrderForm()
})

When('Click the store logo to homepage', () => {
  CartPage.clickBtnBackButton()
})

When('Avanced to checkout', () => {
  CartPage.clickBtnCartToOrder()
})

When('I add the quantity for {} units', (quantity) => {
  CartPage.clickXpFnIncrementQuantity(Cypress.env('produto-01-name'), quantity)
})

When('I reduce the quantity for {} units', (quantity) => {
  CartPage.clickXpFnDecrementQuantity(Cypress.env('produto-01-name'), quantity)
})

When('I type a invalid discount coupon', () => {
  CartPage.clickBtnCartCouponAdd()
  CartPage.typeInputCartCoupon(invalidCoupon)
})

When('I type a valid discount coupon', () => {
  CartPage.clickBtnCartCouponAdd()
  CartPage.typeInputCartValidCoupon(validCoupon)
})

When('I remove the item from cart', () => {
  CartPage.clickFnItemRemove(Cypress.env('produto-01-sku'))
})

When('I remove all items from cart', () => {
  CartPage.clickClearCart(
    Cypress.env('produto-01-sku'),
    Cypress.env('produto-02-sku'),
  )
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

When('I click on button from checkout', () => {
  CartPage.clickBtnCartToOrderForm()
})

When('I click on button return to cart', () => {
  CartPage.clickBtnReturnToCart()
})

// Checkout data
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

When('I fill in the checkout data without phone number', () => {
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(personalData[0].areaCodePhone)
  CheckoutPage.clickBtnGoToShipping()
})

And('I fill the address data', () => {
  CheckoutPage.typeZipCode(addressData[0].zipCode)
  CheckoutPage.typeFullNameShipping(firstNameFaker)
  CheckoutPage.typeCustomNumberShipping()
  CheckoutPage.clickBtnGoToPayment()
})

When('I select Pix option', () => {
  CheckoutPage.selectPixOption()
})

When('I click button pagament', () => {
  CheckoutPage.clickBtnGoToBuy()
})

// My Account navigation
And('I Access the address page', () => {
  MyAccount.visitAddress()
})

And('I access the new address page', () => {
  MyAccount.clickNewAddress()
})

And('I Access my orders page', () => {
  MyAccount.visitMyOrders()
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

And('I remove an address', () => {
  MyAccount.clickEditAddress()
  MyAccount.clickDeleteAddress()
})

And('I Access the profile page', () => {
  MyAccount.visitProfile()
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

When('I do Loggout from the site in MyAccount', () => {
  if (Cypress.env('environment') == 'mobile') {
    MyAccount.accessMyAccountPage()
  }
  MyAccount.myAccountClickBtnExit()
  MyAccount.clickConfirmExitPopup('myaccount')
})

// Checkout assertions
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

Then('the product should be displayed in the cart', () => {
  CartPage.validateProductInCartBySku(Cypress.env('produto-01-sku'), 'visible')
})

Then('the product variation should be displayed in the cart', () => {
  CartPage.validateProductInCartBySku(Cypress.env('produto-02-sku'), 'visible')
})

Then('I validate if the product is not in the cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct(Cypress.env('produto-01-name'), 'not visible')
})

Then('I validate if is clean cart', () => {
  CartPage.validateCartEmpty()
})

Then('I validate if the two items are in cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct(Cypress.env('produto-01-name'), 'visible')
  CartPage.validateFnImgProduct(Cypress.env('produto-02-name'), 'visible')
})

Then('I validate if the quantity has been changed to {}', (quantity) => {
  CartPage.validateXpFnItemQuantity(Cypress.env('produto-01-name'), quantity)
})

Then('The shipping table should be displayed', () => {
  PdpPage.validateShippingDataTable()
})

Then('The shipping table should not be displayed', () => {
  PdpPage.validateShippingDataTableNotAvailable()
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

Then('the store logo has a link to homepage', () => {})

Then('No results should be displayed', () => {
  PLPPage.validateResultEmpty()
})

Then('I verify the categories available on menu', () => {
  HomePage.clickMenuCategories()
  cy.scrollTo('top')
  itemsCategories.forEach((itemCategory) => {
    HomePage.validateLinksOnMenuCategories(itemCategory.text)
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

Then('I check the body empty', () => {
  MyAccount.validateBodyEmptyEndereco()
})

And('I see the lead capture modal', () => {
  CrossPage.closeLeadCaptureModal()
})

When('Open the minicart', () => {
  Header.clickIconCard()
})

Then('Check if the cart is empty', () => {
  MinicartPage.validateTextEmptyMinicart()
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

Then('the product value is visible', () => {
  PdpPage.validatePrice()
})

Then('The product image should be displayed', () => {
  PdpPage.validateGalleryVisibility()
})

Then('I can browse the gallery thumbnails', () => {
  PdpPage.validateGalleryNavigation()
})

Then('I validate the successful registration message notify me', () => {
  PdpPage.validateMessageNotifyMe()
})

Then('each variation option should update the product name', () => {
  PdpPage.validateSizeButtonsNavigation()
})

Then('I click to close the payment options modal', () => {
  PdpPage.clickBtnClosePaymentOptionsModal()
})

Then('The discount coupon should be valid', () => {
  CartPage.validateValidDiscountCoupon()
})

Then('The modal pix is displayed', () => {
  CheckoutPage.validateModalPix()
})
