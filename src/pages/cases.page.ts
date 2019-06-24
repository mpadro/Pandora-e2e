import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';
import { PandoraPage } from './pandora.page';
import { DashboardComponent } from '../components/dashboard.component';
import { CaseComponent } from '../components/case.component';
import { MatToolBarComponent } from '../components/mat-tool-bar.component';

export class CasesPage extends PandoraPage {

    get root(): ElementFinder {
        return element(by.tagName('p112-case'));
    }
    get caseComponent(): CaseComponent {
        return new CaseComponent(this.root.element(by.css('div.case-component__content')));
    }

    get matToolBarComponent(): MatToolBarComponent {
        return new MatToolBarComponent(this.root.element(by.tagName('mat-toolbar-row')));
    }

    async waitForNewCasePageToLoad() {
        await browser.wait(ExpectedConditions.presenceOf(this.root), 10000, "The new case page is not present");
    }
}

export default new CasesPage();