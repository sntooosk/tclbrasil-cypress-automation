# TCL BR Cypress Automation

[![Version](https://img.shields.io/badge/version-1.2.1-blue)](#)
[![Cypress](https://img.shields.io/badge/Cypress-f0fcf8?logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-1dbb68?logo=cucumber&logoColor=212529)](https://cucumber.io/)
[![BrowserStack](https://img.shields.io/badge/BrowserStack-142434?logo=browserstack&logoColor=ff7102)](https://www.browserstack.com/docs/automate/cypress)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Node](https://img.shields.io/node/v/cypress)](https://nodejs.org/)

End-to-end test automation project for **TCL Brazil**, built with **Cypress** and **Cucumber (BDD)**, with optional **BrowserStack** integration.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Cypress Runner](#cypress-runner)
  - [BrowserStack Integration](#browserstack-integration)
- [Cucumber](#cucumber)
- [GitHub Actions](#github-actions)
- [Code Style](#code-style)
- [Git Commit Standards](#git-commit-standards)
- [Changelog](#changelog)

---

## Installation

This project requires **Node.js** (LTS recommended).

Clone the repository and install dependencies:

```bash
npm install
```

---

## Usage

### Cypress Runner

Available scripts to run Cypress locally:

- `cy:run` – Run tests in headless mode.
- `cy:open:desktop` – Open Cypress Runner for desktop tests.
- `cy:open:mobile` – Open Cypress Runner for mobile tests.

Examples:

```bash
npm run cy:open:desktop
npm run cy:open:mobile
```

---

### BrowserStack Integration

#### Authentication

Create a `.env` file in the project root with your BrowserStack credentials:

```bash
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
```

> **Important**
>
> - Do not commit the `.env` file.
> - Keep it listed in `.gitignore`.
> - Never hardcode credentials in the codebase.

---

#### Running Tests on BrowserStack

Available scripts:

- `bs:run:desktop`
- `bs:run:mobile`
- `bs:regressive:desktop`
- `bs:regressive:mobile`
- `bs:smoke:desktop`
- `bs:smoke:mobile`
- `bs:spec:desktop`
- `bs:spec:mobile`

Example:

```bash
npm run bs:run:desktop
```

---

## Cucumber

This project uses **Cucumber (BDD)** with `.feature` files to describe test scenarios.

For more details about syntax and expressions, see the official documentation:
[https://github.com/cucumber/cucumber-expressions](https://github.com/cucumber/cucumber-expressions)

---

## GitHub Actions

This project includes GitHub Actions workflows to execute Cypress tests:

- **Cypress Regression Tests**
- **Cypress Smoke Tests**
- **Cypress Run Feature** (manual execution by feature and device)

### Running Workflows Manually

1. Open the **Actions** tab in the repository.
2. Select the desired workflow.
3. Click **Run workflow** and choose the execution options.

---

## Code Style

### ESLint

Lint the codebase:

```bash
npm run lint
npm run lint:fix
```

---

### Prettier

Format JavaScript and Gherkin files:

```bash
npm run format
```

---

## Git Commit Standards

This repository follows **Conventional Commits**.

Commit message format:

```text
<type>[optional scope]: <description>
```

Examples:

```text
feat: add checkout validation
ci: add cypress run feature workflow
chore(release): bump version to 1.2.1
```

Common types include: `feat`, `fix`, `ci`, `docs`, `chore`, `refactor`, and `test`.

---

## Changelog

All notable changes are documented in the [CHANGELOG.md](CHANGELOG.md) file.

This project follows:

- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
