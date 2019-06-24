import { LocatorHelper } from "./helpers/shadowRootLocator";
import { browser } from "protractor";
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  allScriptsTimeout: 60000,
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  specs: ['specs/*spec.js'],
  baseUrl: 'https://p112client.test.pandoraintelligence.com/',
  directConnect: true,
  onPrepare: async () => {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    await LocatorHelper.addShadowLocator();
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
};
