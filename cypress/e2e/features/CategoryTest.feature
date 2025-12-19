Feature: Category tests
  As a customer, I want to test the category functionalities

  Scenario: Validate product card
    When I'm on the product list page
    Then The product card should be visible
@focus
  Scenario: Validate filter by product
    When I'm on the product list page
    And I select the filter Cor preto
    Then The filter parameter must be in the url preto

  Scenario: Validate ordenation by Launch
    When I'm on the product list page
    And I select the ordination by Lançamento
    Then I validate the page ordenation by Lançamento

  Scenario: Validate ordenation by Discount
    When I'm on the product list page
    And I select the ordination by Desconto
    Then I validate the page ordenation by Desconto

  Scenario: Validate ordenation by Higher prices
    When I'm on the product list page
    And I select the ordination by Maior Preço
    Then I validate the page ordenation by Maior Preço

  Scenario: Validate ordenation by Lower prices
    When I'm on the product list page
    And I select the ordination by Menor Preço
    Then I validate the page ordenation by Menor Preço

  Scenario: Validate ordenation by Name crescent
    When I'm on the product list page
    And I select the ordination by Nome, A-Z
    Then I validate the page ordenation by Nome, A-Z

  Scenario: Validate ordenation by Name decreasing
    When I'm on the product list page
    And I select the ordination by Nome, Z-A
    Then I validate the page ordenation by Nome, Z-A
