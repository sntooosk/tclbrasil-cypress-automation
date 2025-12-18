Feature: Cart tests
  As a customer, I want to test the cart functionalities

  Scenario: Remove item from the cart
    And I have one item in the cart with 1 units
    When I remove the item from cart
    Then I validate if the product is not in the cart

  Scenario: Clear all cart
    And I have two items in the cart with 1 units each one
    When I remove all items from cart
    Then I validate if is clean cart

  Scenario: Add two items to cart
    And I have two items in the cart with 1 units each one
    Then I validate if the two items are in cart

  Scenario: Add item with two units
    And I have one item in the cart with 1 units
    When I add the quantity for 4 units
    Then I validate if the quantity has been changed to 4

  Scenario: Reduce item units in the cart
    And I have one item in the cart with 4 units
    When I reduce the quantity for 2 units
    Then I validate if the quantity has been changed to 2

  Scenario: Calculate valid shipping at Cart
    And I have one item in the cart with 1 units
    When I calculate valid shipping
    Then The shipping table should be displayed at Cart

  Scenario: Calculate invalid shipping at Cart
    And I have one item in the cart with 1 units
    When I calculate invalid shipping
    Then The shipping table should not be displayed at Cart

  Scenario: Calculate shipping unavailable in Cart
    And I have one item in the cart with 1 units
    When I calculate shipping unavailable
    Then The unavailable shipping table should be displayed at Cart

  Scenario: Add invalid discount coupon
    And I have one item in the cart with 1 units
    When I type a invalid discount coupon
    Then The discount coupon should be invalid

  Scenario: Add valid discount coupon
    And I have one item in the cart with 1 units
    When I type a valid discount coupon
    Then The discount coupon should be valid

  Scenario: Navigation return to homepage
    And I have one item in the cart with 1 units
    And I click on button from checkout
    When I click on button return to cart
    Then Click the store logo to homepage
