import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

export class PanelActionsComponent {

    constructor(private rootElement: ElementFinder) { }

    get root(): ElementFinder {
        return this.rootElement;
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
        await browser.wait(async () => await this.loggedUserDiv.getText() !== '')
        return await this.loggedUserDiv.getText();
    }

    async logout() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.userMenuButton),10000 , "User Menu isn't clickable");
        this.userMenuButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.logoutButton),10000 , "User Menu isn't clickable");
        this.logoutButton.click();
    }
}