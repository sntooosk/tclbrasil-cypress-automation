# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- New scenarios and improvements based on learning and refactoring cycles.
- Expansion of regression coverage and stability improvements.

## [1.0.0] - 2026-01-19

### Added

#### Project Foundation

- Initial Cypress automation framework setup for a VTEX e-commerce.
- Project structure organized by responsibility (features, steps, pages, fixtures).
- BDD approach using Cucumber with readable and reusable feature files.
- Page Object Model to encapsulate UI interactions and reduce test coupling.

#### Core E2E Coverage

- Full end-to-end purchase journey:
  - Product discovery (home, PLP and search).
  - Product detail page (PDP) with price, gallery and variations.
  - Add to cart, minicart and cart management.
  - Checkout flow including customer data, shipping and payment.
  - Payment validation using Pix.
- Smoke Test suite covering critical paths to validate application health quickly.

#### Functional Scenarios

- Authentication flows:
  - Login with valid and invalid credentials.
  - Logout validation.
- My Account flows:
  - Profile data update.
  - Address creation, edition and removal.
  - Orders page navigation.
- Cart and minicart scenarios:
  - Quantity increase and decrease.
  - Product removal and empty cart validation.
  - Coupon application (valid and invalid).
- Shipping calculation scenarios:
  - Valid, invalid and unavailable postal codes.
- Product and catalog validation:
  - Search results and empty states.
  - Filters and sorting on PLP.
  - Stock availability and out-of-stock behavior.
  - Product variations and SKU validation.

#### Test Data and Utilities

- Use of fixtures to centralize static test data.
- Dynamic data generation for users, emails and addresses.
- Reusable custom commands to simplify complex flows.
- API usage to support test setup (product availability, cart cleanup).

#### Execution and Environment Support

- Support for desktop and mobile execution.
- Environment-based behavior to reflect real user experience.
- Clear separation between smoke and regression execution paths.

### Changed

- N/A (initial release).

### Fixed

- N/A (initial release).

### Removed

- N/A (initial release).
