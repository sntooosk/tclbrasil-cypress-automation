# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-01-29

### Added

- Regressive test execution for both desktop and mobile.
- GitHub Actions workflow for regressive execution (`regressive.yml`).

### Changed

- Updated `getAvailabeProducts` to return an object instead of an array.
- Adjusted product consumption to use `Object.values(...)`.

### Fixed

- Fixed undefined index errors in `before()` hooks.
- Stabilized product selection for `Cypress.env('produto-XX-*')`.

## [1.1.0] - 2026-01-19

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
- Smoke test suite covering critical paths to validate application health quickly.

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
