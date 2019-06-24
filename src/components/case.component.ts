import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

export class CaseComponent {

    constructor(private rootElement: ElementFinder) {}

    get root(): ElementFinder {
        return this.rootElement;
    }

    get addCaseEntityButton(): ElementFinder {
        return this.root.element(by.css('button.primary-action'));
    }

    async isCaseComponentPresent(){
        return await this.root.isPresent(); 
    }
}