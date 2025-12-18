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
@focus
  Scenario: Change voltage of product with extended warranty
    Given I'm on the home page
    When I look for the product with extended warranty in the search bar
    And Access the PDP extended warranty
    And Add extended warranty
    And Add product by buy floating
    And Change voltage
    And Check voltage change

  Scenario: Validate voltage addition to a product
    Given I am on the product details page with voltage change
    And Add a product from minishelf
    And Add extended warranty
    And I add the product with warranty extended to the cart
    And I validate if the product with voltage is in the cart
    And I click on button to remove the warranty extended
    When Change voltage
    Then I validate if the product stays in the cart

  Scenario: In-store pickup
    Given I'm on the home page
    When I search for the product with in-store pickup in the search bar
    And Access the PDP in-store pickup
    When I add the product to the cart
    When I calculate in-store pickup shipping
    And Click on Pick up in store
    When I increase the quantity for 2 units
    And Click on Choose more products
    And Open the minicart on home
    And I decrease the quantity for 1 units
