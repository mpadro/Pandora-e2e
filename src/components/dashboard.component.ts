import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

export class DashboardComponent {

    constructor(private rootLocator: ElementFinder) {}

    get root(): ElementFinder {
        return this.rootLocator;
    }
    // get root(): ElementFinder {
    //     return element(by.tagName('app-dashboard'));
    // }

    get addCaseButton(): ElementFinder {
        return this.root.element(by.css('button[data-test-id="create-case-trigger"]'));
    }

    async waitForDashboardToLoad(){
        await browser.wait(ExpectedConditions.presenceOf(this.root), 20000, "The dashboard didn't load on the expected time");
    }
}