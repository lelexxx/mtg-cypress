# Cypress

## Install Cypress

Run the following command on your project : `npm i cypress --save-dev`

## First launch and Configuration

At first launch (with command `run npm cypress:open`), a wizard help you to configure Cypress

## Usefull commands

The following commands have to be writed in the `scripts` section of your `package.json` :

- `"cypress:open": "cypress open"` : allow you to run tests with UI
- `"cypress:run": "cypress run"` : allow you to run all the tests in the CLI. Use this commands in your CI.

## Configure Cypress with TypeSctipt

1 - Create a `tsconfig.json`
2 - Rename `cypress.config.js` to `cypress.config.ts`
3 - Rename `commands.js` to `commands.ts`
4 - Rename `e2e.js` to `e2e.ts`

## Create your first test

In the `cypress` folder add a `e2e` folder. You are ready to create your first !
You just have to add a `*.spec.ts` file in the previous folder created.

### File spec.ts

This is the core of the tests. These files will gather all the scenarios and stages that compose them.

### Fixtures

These are the input data placed by the developer for testing purposes.
