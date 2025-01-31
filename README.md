# Cypress Project

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download) (version 14 or higher recommended)
- npm or yarn
- A code editor such as [Visual Studio Code] (https://code.visualstudio.com/download)

Verify your installation by running:
  ```bash
    node -v
    npm -v
  ```

## Installation

1. Install Cypress

    Using npm:
    ```bash
      npm install cypress --save-dev
    ```

    Usign yarn:
    ```bash
      yarn add cypress --dev
    ```

    For more information, refer to the [official Cypress installation guide](https://docs.cypress.io/app/get-started/install-cypress).

2. Clone the project repository

    ```bash
      git clone https://github.com/lg-caceres/cypressTemplate
      cd <project-folder>
    ```

3. Install the project dependencies:

    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

## Running Tests

To execute Cypress tests:

1. Open Cypress Test Runner

    ```bash
      npx cypress open
    ```

2. Run Tests in Headless Mode

    ```bash
      npx cypress run
    ```

This will execute all tests in the terminal without launching the Test Runner UI.

For more information, check the [Cypress CLI documentation](https://docs.cypress.io/app/references/command-line).

# Project Structure

Below is an overview of the project structure along with a brief explanation of each folder and file

```bash
cypress/
├── e2e/
│   ├── pages/         
│   │   ├── myPage.js
│   ├── tests/
│   │   ├── myTest.js
│   ├── fixtures/     
├── ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
node_modules/
.gitignore
cypress.config.js
package-lock.json
package.json
README.md
```

Folder and File Descriptions:

- **cypress/fixtures:** Test data files used in tests.
- **cypress/e2e/pages:** Page object files to organize reusable elements.
- **cypress/e2e/tests:** Contains test files that define test cases.
- **cypress/support:** Reusable support commands and custom functions.
- **node_modules:** Installed npm dependencies.
- **cypress.config.js:** Cypress configuration file.
- **package-lock.json:** Specifies the exact versions of installed packages for consistency.
- **package.json:** Project metadata, including npm scripts and dependencies.
- **README.md:** Project documentation file with setup and usage instructions.