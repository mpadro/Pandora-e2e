import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

class DashboardComponent {

    get root(): ElementFinder {
        return element(by.tagName('app-dashboard'));
    }

    async waitForDashboardToLoad(){
        await browser.wait(ExpectedConditions.presenceOf(this.root), 20000, "The dashboard didn't load on the expected time");
    }
}
export default new DashboardComponent();