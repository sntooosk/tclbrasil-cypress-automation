Feature: Navigation tests
  As a customer, I want to test the navigation functionalities
@focus
  Scenario: Browse for categories
    And I'm on the home page
    Then I verify the categories available on menu

  Scenario: Test the redirection of the logo from Home to Home
    And I'm on the home page
    And I see the lead capture modal
    Then the store logo has a link to homepage

  Scenario: Test the redirection of the logo from PLP to Home
    And I'm on the product list page
    And I see the lead capture modal
    Then the store logo has a link to homepage

  Scenario: Test the redirection of the logo from PDP to Home
    And I'm on the product detail page
    And I see the lead capture modal
    Then the store logo has a link to homepage

  Scenario: Test the search bar with non inexistent product
    And I'm on the home page
    And I see the lead capture modal
    When I search for a non-existent product
    Then No results should be displayed

  Scenario: Test the newsletter
    And I'm on the home page
    And I do fill in the newsletter form
    And I send to the Masterdata
    Then The success message is displayed
