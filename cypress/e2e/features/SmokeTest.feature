Feature: Smoke Test
  As a customer, I want to Smoke Test valid

  Scenario: Close an order and pay with Pix
    And I'm on the home page
    When I search for the product on the search bar
    And Access the PDP
    And Add product to cart
    And Avanced to checkout
    And I proceed to checkout
    And I fill in the checkout data
    And I fill the address data
    And I select Pix option
    And I click button pagament
    Then The modal pix is displayed

  Scenario: Validate price block
    Given I'm on the product detail page
    Then the product value is visible

  Scenario: Calculate valid shipping in the product page
    Given I'm on the product detail page
    And On the product page calculate valid shipping
    Then The shipping table should be displayed

  Scenario: Login with valid e-mail and password
    Given I'm on the home page
    When I do click button login
    And I do login using correct email and password
    Then I must be logged on the site
