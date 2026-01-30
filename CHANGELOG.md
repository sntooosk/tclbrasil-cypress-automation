# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.1] - 2026-01-30

### Added

- GitHub Actions workflow to run feature-based tests (`cypress-run-feature.yml`).

### Changed

- Updated selectors to improve test stability.
- Updated the product returned by the search API.

### Fixed

- Removed the `focus` call that was causing execution errors.

## [1.2.0] - 2026-01-29

### Added

- Regression test execution for both desktop and mobile.
- GitHub Actions workflow for regression execution (`regression-tests.yml`).

### Changed

- Updated `getAvailableProducts` to return an object instead of an array.
- Adjusted product handling to use `Object.values(...)`.

### Fixed

- Fixed undefined index errors in `before()` hooks.
- Stabilized product selection using `Cypress.env('produto-XX-*')`.

## [1.1.0] - 2026-01-19

### Added

- Initial Cypress automation framework setup.
- Support for desktop and mobile execution.
- End-to-end purchase flow coverage.
- Authentication and My Account scenarios.
- Cart, minicart, and checkout validations.
- Product search, PLP, and PDP validations.
- Reusable custom commands and test data fixtures.
- API usage to support test setup.
