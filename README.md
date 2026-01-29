# TCL BR Cypress Automation

[![Version](https://img.shields.io/badge/version-1.2.0-blue)](https://github.com/ELX-LATAM-DevOps/tcl-d2c-tclbrasil-cypress-automation/releases)
[![Cypress](https://img.shields.io/badge/Cypress-f0fcf8?logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-1dbb68?logo=cucumber&logoColor=212529)](https://cucumber.io/)
[![BrowserStack](https://img.shields.io/badge/BrowserStack-142434?logo=browserstack&logoColor=ff7102)](https://www.browserstack.com/docs/automate/cypress)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Dotenv CLI](https://img.shields.io/badge/Dotenv%20CLI-09090b?logo=dotenv&logoColor=ecd53f)](https://www.npmjs.com/package/dotenv-cli)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-c596c7?logo=prettier&logoColor=white)](https://prettier.io/)
[![Commitlint](https://img.shields.io/badge/Commitlint-121212?logo=commitlint)](https://commitlint.js.org/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-ff69b4.svg?logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org/en/v1.0.0/)
[![Node](https://img.shields.io/node/v/cypress)](https://nodejs.org/)

End-to-End automation tests for tcl BR using Cypress.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Cypress Test Runner](#cypress-test-runner)
  - [BrowserStack Integration](#browserstack-integration)
    - [Authentication](#authentication)
    - [Run Tests](#run-tests)
    - [CI/CD Environment Variable](#cicd-environment-variable)
- [Cucumber Expressions](#cucumber-expressions)
- [Cypress Workflows](#cypress-workflows)
  - [Running Tests on GitHub Actions](#running-tests-on-github-actions)
  - [Understanding the Workflow](#understanding-the-workflow)
- [Code Style](#code-style)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
- [Git Commit](#git-commit)
  - [Conventional Commits](#conventional-commits)
  - [Commitizen](#commitizen)
- [Changelog](#changelog)

## Installation

Node.js is required to run this project. Download and install the latest version from the [official website](https://nodejs.org/) or use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to manage multiple active Node.js versions (recommended).

Clone this repository and install the dependencies:

```shell
npm install
```

## Usage

### Cypress Test Runner

To open the Cypress Test Runner, run any of the following scripts:

- `cy:run`: Run the tests in the terminal.
- `cy:open:desktop`: Open the desktop tests in the Cypress Test Runner.
- `cy:open:mobile`: Open the mobile tests in the Cypress Test Runner.

Examples:

```shell
# Desktop Tests
npm run cy:open:desktop

# Mobile Tests
npm run cy:open:mobile
```

### BrowserStack Integration

#### Authentication

Create a `.env` file in the root directory and add the following variables for BrowserStack integration.

```shell
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
```

See [Setting the environment variables](https://www.browserstack.com/docs/automate/cypress/authentication#setting-the-environment-variables) for more information.

See example `.env` file in the [.env.example](.env.example) file.

> :information_source: **Note**
>
> - You can find your BrowserStack username and access key in the [BrowserStack Automate dashboard](https://www.browserstack.com/accounts/automate).

> :warning: **Warning**
>
> - Never hardcode your BrowserStack access credentials in your tests for security reasons.
> - Do not commit the `.env` file to the repository.
> - Keep the `.env` file in the `.gitignore` file.
> - Do not use `browserstack.json` file for authentication for security reasons.

#### Run Tests

To run the tests on BrowserStack, use any of the following scripts:

- `bs:run:desktop`: Run the desktop tests on BrowserStack.
- `bs:run:mobile`: Run the mobile tests on BrowserStack.
- `bs:regressive:desktop`: Run the desktop regressive tests on BrowserStack.
- `bs:regressive:mobile`: Run the mobile regressive tests on BrowserStack.
- `bs:smoke:desktop`: Run the desktop smoke tests on BrowserStack.
- `bs:smoke:mobile`: Run the mobile smoke tests on BrowserStack.
- `bs:spec:desktop`: Run the desktop tests on BrowserStack with a specific spec file.
- `bs:spec:mobile`: Run the mobile tests on BrowserStack with a specific spec file.
- `bs:smoke:theme:desktop`: Run desktop Smoke Test on CI/CD with BrowserStack.
- `bs:smoke:theme:mobile`: Run mobile Smoke Test on CI/CD with BrowserStack.

Examples:

```shell
npm run bs:run:desktop
```

#### CI/CD Environment Variable

The CI/CD pipeline injects `CYPRESS_DEPLOY_ENV` (e.g., `PRE` or `POS`) through the [reusable workflow](https://github.com/ELX-LATAM-DevOps/eluxlab-actions/blob/main/.github/workflows/cypress.yml).
This variable identifies the deploy stage in BrowserStack build names and is consumed by the CI-only scripts below:

```json
"bs:smoke:theme:desktop": "npm run bs:run:desktop -- --spec cypress/e2e/features/SmokeTest.feature -b \"[CI/CD][${CYPRESS_DEPLOY_ENV}] - tcl BR - Store Theme - Smoke Test Desktop\"",
"bs:smoke:theme:mobile":  "npm run bs:run:mobile  -- --spec cypress/e2e/features/SmokeTest.feature -b \"[CI/CD][${CYPRESS_DEPLOY_ENV}] - tcl BR - Store Theme - Smoke Test Mobile\""
```

> **Notes**
>
> - These scripts are intended for **CI/CD usage** and rely on the reusable workflow to set `CYPRESS_DEPLOY_ENV`.
> - On native **Windows** shells (cmd/PowerShell), conventional variable interpolation in `npm scripts` may not resolve `CYPRESS_DEPLOY_ENV`, causing empty brackets in the build name. Prefer running via GitHub Actions or WSL; for local runs on Windows, consider using a fixed build name.
> - `CYPRESS_DEPLOY_ENV` is also included in BrowserStack `system_env_vars` so the value is available to the BrowserStack workers.

## Cucumber Expressions

See the [Cucumber Expressions](https://github.com/cucumber/cucumber-expressions#readme) documentation to parse the `.feature` files.

## Cypress Workflows

This project configures two workflows in GitHub Actions for running Cypress tests:

- **Cypress Regression Tests**: Executes regression tests.
- **Cypress Smoke Tests**: Executes smoke tests.

### Running Tests on GitHub Actions

To run tests manually on GitHub Actions:

1. Go to the **Actions** tab in the repository.
2. Select the desired workflow.
3. Click the **Run workflow** button to trigger the workflow manually.

For more information on how to manually run a workflow, see the [official GitHub Actions documentation](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow).

### Understanding the Workflow

These workflows are designed to be reusable and can be incorporated into other workflows or projects.
To understand how the Cypress workflows are set up and how they can be reused, visit the [tcl Actions](https://github.com/ELX-LATAM-DevOps/eluxlab-actions?tab=readme-ov-file#test_tube-cypress) repository.
This repository contains GitHub Actions workflows for tcl projects, providing examples of how these reusable workflows are configured and used.

For more details on reusing workflows, see [Reusing workflows](https://docs.github.com/actions/using-workflows/reusing-workflows).

## Code Style

### ESLint

This project uses [ESLint](https://eslint.org/) with [Cypress ESLint Plugin](https://github.com/cypress-io/eslint-plugin-cypress) to lint the code.

To lint the code using ESLint, run the following command:

```shell
npm run lint
```

You can also fix the linting issues using the following command:

```shell
npm run lint:fix
```

### Prettier

This project uses [Prettier](https://prettier.io/) to format the code.

This project uses [Prettier Plugin Gherkin](https://www.npmjs.com/package/prettier-plugin-gherkin) to format the Gherkin files (`.feature` files).

To format the code using Prettier, run the following command:

```shell
npm run format
```

## Git Commit

### Conventional Commits

This repository uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for better standardization of commits.

The commit message should be structured as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Examples:

```text
feat: add shipping calculator
chore(release): 1.0.0
```

Common types according to [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) can be:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- **chore**: Other changes that don't modify src or test files.
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
- **docs**: Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **revert**: Reverts a previous commit.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **test**: Adding missing tests or correcting existing tests.

### Commitizen

You can use the [Commitizen](https://commitizen-tools.github.io/commitizen) CLI interface to create Conventional Commits:

```bash
yarn commit
```

![Commitizen](https://github.com/ELX-LATAM-DevOps/tcl-theme-template/assets/167758042/8775a562-9787-4dbb-aa8b-e3dbbf049191)

## Changelog

All notable changes to this project will be documented in the [CHANGELOG.md](CHANGELOG.md) file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
