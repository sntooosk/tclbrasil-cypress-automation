Feature: Minicart tests TCL BR
  As a customer, I want to validate the minicart on TCL BR

  Scenario: Check language in empty cart
    Given I'm on the home page
    When Open the minicart
    Then Check if the cart is empty
@focus
  Scenario: Check language in minicart with products
    Given I'm on the home page
    When Click in a product from shelf
    And Add a product to minicart from minishelf
    And Open the minicart
    Then Validate the language on minicart

  Scenario: Minicart Addition and Cleaning Journey
    Given I am on the PDP with minishelf
    When Add a product from minishelf
    And Open the minicart
    And Increase quantity product in minicart
    And Close the minicart
    And Add a second product from minishelf
    And Open the minicart
    And Go to cart
    Then I validate if the quantity of product one minishelf has been changed to 2
    And I validate if the quantity of product second minishelf has been changed to 1
    And Click on Choose more products
    And Open the minicart on home
    Then I remove all items from minicart
    Then Check if the cart is empty

  Scenario: Adding products to Minicart and proceeding to Checkout Cart
    Given I'm on the home page
    When I search for the product Compre Junto on the search bar
    And Access the PDP Compre Junto
    And Adds Compre Junto products
    Then The minicart should open automatically
    And Go to cart
    And Validate open cart
