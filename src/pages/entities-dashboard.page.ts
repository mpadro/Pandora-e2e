import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';
import { PandoraPage } from './pandora.page';
import { DashboardComponent } from '../components/dashboard.component';
import { CaseComponent } from '../components/case.component';
import { MatToolBarComponent } from '../components/mat-tool-bar.component';

export class EntitiesDashboardPage {

    get root(): ElementFinder {
        return element(by.tagName('entitites-dashboard'));
    }

}
export default new EntitiesDashboardPage();