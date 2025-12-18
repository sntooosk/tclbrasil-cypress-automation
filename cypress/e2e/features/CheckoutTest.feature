Feature: Checkout tests
  As a customer, I want to test the checkout functionalities

  Background:
    Given I have one item in the cart with 1 units
    And I proceed to checkout

  Scenario: fill all fields
    And I fill in the checkout data
    And I fill the address data
    Then I select Pix option

  Scenario: Validade mandatory firstname alert is displayed
    And I fill in the checkout data without firstname
    Then mandatory firstname alert is displayed

  Scenario: Validade mandatory lastname alert is displayed
    And I fill in the checkout data without lastname
    Then mandatory lastname alert is displayed

  Scenario: Validade mandatory document alert is displayed
    And I fill in the checkout data without document
    Then mandatory document alert is displayed

  Scenario: Validade mandatory phone alert is displayed
    And I fill in the checkout data without phone number
    Then mandatory phone number alert is displayed

  Scenario: In-store pickup finalize purchase
    Given I'm on the home page
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
