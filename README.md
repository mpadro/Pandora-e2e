# Pandora Protractor project

This is a Protractor demo project to test Pandora App


## File organization

```
Padora-e2e/
|- helpers/            // helper functions
|- node_modules/       // downloaded node modules
|- pages/              // pages represented with page objects framework
|- specs/              // it contains all of the test classes
|- .gitignore          // files that we don't want to commit to git
|- conf.js             // configuration file
|- package.json        // node dependencies for the project
|- README.md           // this file
|- tsconfig.json       // typescript transpile configuration
```


## Getting started

Install the node_modules with:

```
npm install
```


## Protractor typings

To use Protractor types, you'll need to import `protractor`. After this is imported, you should have autocompletion hints when typing.

```
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
```

Although the Protractor configuration file can be written in javascript, creating it in typescript will have some hints. These hints and the reference configuration can be found in `lib/config.ts`. Below we are importing the Config interface and applying that interface to the config variable:

```
import {Config} from 'protractor';

export let config: Config = {
  ...
}
```

## Ambient typings

Protractor also uses ambient types including jasmine, jasminewd2, and node. These are brought in via the `tsconfig.json` file, which uses npm module resolution to get types from `node_modules/@types`.

If you are using the jasmine framework for your tests, make sure to do:

```
npm install --save-dev @types/jasmine @types/jasminewd2
```

## Running Protractor

Use the command `npm run test` to transpile and run tests

## Transpiling your code

If you want to convert your typescript to javascript (transpiling) without executing the tests, you'll use the Typescript compiler (tsc). If you install typescript globally, the command is `tsc`. If it is not installed globally, the typescript compiler can be executed with `npm run tsc`.


