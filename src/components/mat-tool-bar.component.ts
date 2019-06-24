import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';

export class MatToolBarComponent {

    constructor(private root: ElementFinder) {}

    get element(): ElementFinder {
        return this.root;
    }
}