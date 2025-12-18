Feature: Login tests
  As a customer, I want to test the login functionalities

  Background:
    Given I'm on the home page
    When I do click button login

  Scenario: Login with valid e-mail and password
    When I do login using correct email and password
    Then I must be logged on the site

  Scenario: Login with incorrect password
    When I do login using incorrect password
    Then Must be informed that the data access are wrong

  Scenario: Login with incorrect email
    When I do login using incorrect email
    Then Must be informed that the data access are wrong

  Scenario: Login with incorrect email and password
    When I do login using incorrect email and password
    Then Must be informed that the data access are wrong

  Scenario: Login with invalid email format
    When I do login using invalid format email
    Then Must be informed that the email is in a invalid format

  @focus
  Scenario: Loggout
    When I do login using correct email and password
    And I Access the profile page
    When I do Loggout from the site in MyAccount
    Then I must not be logged into the site
