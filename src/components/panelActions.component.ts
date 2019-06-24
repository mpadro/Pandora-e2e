import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

class PanelActionsComponent {

    get root(): ElementFinder {
        return element(by.tagName('panel-actions'));
    }

    get userMenuButton(): ElementFinder {
        return this.root.element(by.css('button[data-test-id="user-menu-trigger"'));
    }

    get logoutButton(): ElementFinder {
        return element(by.css('button[data-test-id=logout-trigger]'));
    }

    get loggedUserDiv(): ElementFinder {
        return this.userMenuButton.element(by.css('div.panel-actions-component__user-description > div'));
    }

    async getLoggedUser(): Promise<string> {
        await browser.actions().mouseMove(this.root).perform();
        await browser.wait( async () => await this.loggedUserDiv.getText() !== '')
        return await this.loggedUserDiv.getText();  
    }

    async logout() {
        this.userMenuButton.click();
        this.logoutButton.click();
    }
}
export default new PanelActionsComponent();