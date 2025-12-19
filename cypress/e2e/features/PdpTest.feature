Feature: Product Detail Page tests
  As a customer, I want to test the product detail page functionalities

  Scenario: Calculate valid shipping in the product page
    Given I'm on the product detail page
    And On the product page calculate valid shipping
    Then The shipping table should be displayed

  Scenario: Calculate invalid shipping in the product page
    Given I'm on the product detail page
    And On the product page calculate invalid shipping
    Then The shipping table should not be displayed

  Scenario: Add item to cart
    Given I'm on the product detail page
    When Add product to cart
    Then the product should be displayed in the cart

  Scenario: Add item to cart with variation
    Given I am on the product detail page with variations
    When I add the product variation to the cart
    Then the product variation should be displayed in the cart

  Scenario: Validate price block
    Given I'm on the product detail page
    Then the product value is visible

  Scenario: Validate product image
    Given I'm on the product detail page
    Then The product image should be displayed
    When I can browse the gallery thumbnails

  Scenario: Validate out of stock product - notify me
    Given I'm on an out of stock product page
    When I fill in the form data out of stock
    And I click on the register notification button
    Then I validate the successful registration message notify me
@focus
  Scenario: Validate variation updates product name
    Given I am on the product detail page with variations
    Then each variation option should update the product name

  Scenario: Validate Payment option modal
    Given I'm on the product detail page
    When I open the payment options modal
    Then I click to close the payment options modal
