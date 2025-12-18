Feature: Minicart tests TCL BR
  As a customer, I want to validate the minicart on TCL BR

  Scenario: Check language in empty cart
    Given I'm on the home page
    When Open the minicart
    Then Check if the cart is empty

  Scenario: Check language in minicart with products
    Given I'm on the home page
    When Click in a product from shelf
    And Add a product to minicart from minishelf
    Then Validate the language on minicart
