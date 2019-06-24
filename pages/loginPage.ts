import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

class LoginPage {

    get root(): ElementFinder {
        return element(by.css('identityserver-app'));
    }

    get loginRoot(): ElementFinder {
        return this.root.element(by.css_sr('::sr login-view'));
    }

    get nameInput(): ElementFinder {
        return this.loginRoot.element(by.css_sr('::sr paper-input#usernameInput ::sr iron-input#input-1 > input'));
    }

    get passwordInput(): ElementFinder {
        return this.loginRoot.element(by.css_sr('::sr paper-input#passwordInput ::sr iron-input#input-2 > input'));
    }

    get proceedButton(): ElementFinder {
        return this.loginRoot.element(by.css_sr('::sr paper-button.primary'))
    }

    async visit() {
        await browser.get('/');
    }

    async login(user: string, password: string) {
        await browser.wait(ExpectedConditions.presenceOf(this.nameInput), 10000);
        await this.nameInput.sendKeys(user);
        await this.proceedButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.passwordInput), 5000);
        await this.passwordInput.sendKeys(password);
        await this.proceedButton.click();
        await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(this.proceedButton)), 5000);
    }
}
export default new LoginPage();