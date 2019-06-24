import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

class LoginPage {

    get root(): ElementFinder {
        return element(by.css('identityserver-app'));
    }

    get loginRoot(): ElementFinder {
        return this.root.element(by.css_sr('::sr login-view'));
    }

    get spinnerContainer(): ElementFinder {
        return this.root.element(by.css_sr('::sr div.spinner-container'));
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

    get errorMessage(): ElementFinder {
        return this.loginRoot.element(by.css_sr('::sr span.text-error'));
    }

    async visit() {
        await browser.get('/');
    }

    async login(user: string, password: string) {
        await browser.wait(ExpectedConditions.presenceOf(this.nameInput), 10000, "Username input is not present");
        await this.nameInput.sendKeys(user);
        await this.proceedButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.passwordInput), 10000, "Password input is not displayed");
        await this.passwordInput.sendKeys(password);
        await this.proceedButton.click();
        await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(this.spinnerContainer)), 10000, "Login wasn't processed in the expected time");
    }

    async waitForLoginToBeProcessed() {
        await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(this.proceedButton)), 10000, "Login wasn't processed in the expected time");
    }

    async verifyLoginError() {
        expect(await this.errorMessage.isDisplayed()).toBe(true);
        expect(await this.errorMessage.getText()).toBe("The provided username and password combination was incorrect.");
    }
}
export default new LoginPage();