Feature: My Account tests
  As a customer, I want to test the My Account functionalities

  Background:
    Given I'm on the home page
    When I do click button login
    And I do login using correct email and password

  Scenario: At Desktop edit personal data - Gender F
    And I Access the profile page
    When I edit my personal data - Gender F
    Then I check if the personal data was edited correctly - Gender F

  Scenario: At Desktop edit personal data - Gender M
    And I Access the profile page
    When I edit my personal data - Gender M
    Then I check if the personal data was edited correctly - Gender M

  Scenario: At Desktop add a new address
    And I Access the address page
    And I access the new address page
    When I add a new address
    Then I check if the address was added correctly

  Scenario: At Desktop edit an address
    And I Access the address page
    And I edit an address
    Then I check if the address was edited correctly

  Scenario: At Desktop check my orders
    And I Access my orders page
    Then I check that I am in the correct page

  Scenario: Remove an address
    And I Access the address page
    And I remove an address
    Then I check the removal success message
@focus
  Scenario: Loggout in MyAccount
    And I Access the profile page
    When I do Loggout from the site in MyAccount
    Then I must not be logged into the site
