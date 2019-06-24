import { ElementFinder, element, by, browser, protractor, ExpectedConditions } from 'protractor';
import { PanelActionsComponent } from '../components/panel-actions.component';

export abstract class PandoraPage {

    get panelActions(): PanelActionsComponent {
        return new PanelActionsComponent(element(by.tagName('panel-actions')));
    }
    
}