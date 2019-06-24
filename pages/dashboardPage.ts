import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

class DashboardPage {

    get root(): ElementFinder {
        return element(by.tagName('app-dashboard'));
    }
}
export default new DashboardPage();