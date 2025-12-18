Feature: Order tests
  As a customer, I want to place an order

  Scenario: Close an order and pay with Pix
    And I'm on the home page
    When I search for the product on the search bar
    And Access the PDP
    And Add product to cart
    And Avanced to checkout
    And I proceed to checkout
    And I fill in the checkout data
    And I fill the address data
    Then I select Pix option
