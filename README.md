# Pandora Protractor project

This is a Protractor demo project to test Pandora App


## File organization

```
Padora-e2e/
|- node_modules/       // downloaded node modules
|- src
  |- components/         // components on the pages
  |- helpers/            // helper functions
  |- pages/              // pages represented with page objects framework
  |- specs/              // it contains all of the test classes
  |- dev.conf.ts         // configuration file for dev/test environment
  |- local.conf.ts       // configuration file for local environment
|- .gitignore          // files that we don't want to commit to git
|- package.json        // node dependencies for the project
|- README.md           // this file
|- tsconfig.json       // typescript transpile configuration
```

## Getting started

Install the node_modules with:

```
npm install
```

## Running Protractor

Use the command `npm run test` to transpile and run tests

## Transpiling your code

If you want to convert your typescript to javascript (transpiling) without executing the tests, you'll use the Typescript compiler (tsc). If you install typescript globally, the command is `tsc`. If it is not installed globally, the typescript compiler can be executed with `npm run tsc`.


