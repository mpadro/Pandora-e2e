import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';
import { PandoraPage } from './pandora.page';
import { DashboardComponent } from '../components/dashboard.component';

export class DashboardPage extends PandoraPage{

    get dashboardComponent(): DashboardComponent {
        return new DashboardComponent(element(by.tagName('app-dashboard')));
    }
}
export default new DashboardPage();