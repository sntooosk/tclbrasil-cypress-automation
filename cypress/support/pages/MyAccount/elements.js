export const ELEMENTS = {
  buttonAddNewAddress:
    '//div[@class="db-m dn"][not(contains(@style,"display:none"))]//a[(@href="#/addresses/new")]',
  buttonEditAddress:
    '(//div[contains(@class,"vtex-button__label flex items-center justify-center h-100 ph5")][normalize-space()="Editar"])',
  btnDeleteAddress:
    '//div[contains(@class, "vtex-button__label") and contains(text(), "Remover endereço")]',
  buttonSaveEditedAddress: '.vtex-button__label',
  buttonSaveNewAddress: '.vtex-button__label',
  inputZipCode: 'input[name=postalCode]',
  inputNumber: 'input[name=number]',
  inputComplement: 'input[name=complement]',
  messageInfo: '.vtex-alert > .flex-ns > .items-start',
  tableMyAddress: '.vtex-my-account-1-x-addressBox',
  labelMyAddressSavedStreet:
    '.vtex-my-account-1-x-boxContainerBody span.street',
  labelMyAddressSavedNumber:
    '.vtex-my-account-1-x-boxContainerBody span.number',
  labelMyAddressSavedZipCode:
    '.vtex-my-account-1-x-boxContainerBody span.postalCode',
  labelMyAddressSavedComplement:
    '.vtex-my-account-1-x-boxContainerBody span.complement',
  labelMyAddressSavedCity: '.vtex-my-account-1-x-boxContainerBody span.city',
  labelMyAddressSavedCountry:
    '.vtex-my-account-1-x-boxContainerBody span.country',

  buttonEditPersonalData: '.vtex-button__label', //contains("Editar")
  inputName: 'input[name=firstName]',
  inputLastName: 'input[name=lastName]',
  inputDocument: 'input[name=document]',
  inputHomePhone: 'input[name=homePhone]',
  comboBoxGender: 'select[name=gender]',
  inputBirthDate: 'input[name=birthDate]',
  buttonSavePersonalData: '//div[normalize-space()="Salvar alterações"]',
  labelNameSaved:
    'div[class="mb8 flex-auto vtex-my-account-1-x-firstNameSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  labelLastNameSaved:
    'div[class="mb8 w-50-ns vtex-my-account-1-x-lastNameSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  labelDocumentSaved:
    'div[class="mb8 flex-auto vtex-my-account-1-x-documentsSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  labelGenderSaved:
    'div[class="mb8 w-50-ns vtex-my-account-1-x-genderSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  labelBirthDate:
    '.vtex-my-account-1-x-phoneNumberContainer > .flex-auto > .light',
  labelHomePhone:
    '.vtex-my-account-1-x-phoneNumberContainer > .w-50-ns > .light',
  buttonPopupExit: '.bg-action-primary > .vtex-button__label',
  clickBtnExit: '.vtex-my-account-1-x-menuLink',
}
