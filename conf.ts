import { LocatorHelper } from "./helpers/shadowRootLocator";
import { browser } from "protractor";

exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['specs/*spec.js'],
  baseUrl: 'https://p112client.test.pandoraintelligence.com/',
  directConnect: true,
  onPrepare: async () => {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    await LocatorHelper.addShadowLocator();
  },
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
