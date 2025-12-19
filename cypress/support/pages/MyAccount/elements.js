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
  tableMyAddress: '[class*="addressBox"]',
  labelMyAddressSavedStreet: '[class*="boxContainerBody"] span.street',
  labelMyAddressSavedNumber: '[class*="boxContainerBody"] span.number',
  labelMyAddressSavedZipCode: '[class*="boxContainerBody"] span.postalCode',
  labelMyAddressSavedComplement: '[class*="boxContainerBody"] span.complement',
  labelMyAddressSavedCity: '[class*="boxContainerBody"] span.city',
  labelMyAddressSavedCountry: '[class*="boxContainerBody"] span.country',

  //Personal Data
  buttonEditPersonalData: '.vtex-button__label', //contains("Editar")
  inputName: 'input[name=firstName]',
  inputLastName: 'input[name=lastName]',
  inputDocument: 'input[name=document]',
  inputHomePhone: 'input[name=homePhone]',
  comboBoxGender: 'select[name=gender]',
  inputBirthDate: 'input[name=birthDate]',
  buttonSavePersonalData: '//div[normalize-space()="Salvar alterações"]',
  //Personal Data Saved
  labelNameSaved: '[class*="firstNameSubContainer"] [class*="dataEntry"]',
  labelLastNameSaved: '[class*="lastNameSubContainer"] [class*="dataEntry"]',
  labelDocumentSaved: '[class*="documentsSubContainer"] [class*="dataEntry"]',
  labelGenderSaved: '[class*="genderSubContainer"] [class*="dataEntry"]',
  labelBirthDate: '[class*="phoneNumberContainer"] > .flex-auto > .light',
  labelHomePhone: '[class*="phoneNumberContainer"] > .w-50-ns > .light',
  buttonPopupExit: '.bg-action-primary > .vtex-button__label',
  clickBtnExit: '[class*="menuLink"]',
  enderecoEmpty: '.vtex-account__page-body',
}
