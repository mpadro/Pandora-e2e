import loginPage from '../pages/login.page';
import dashboardPage from '../pages/dashboard.page';
import { browser, ExpectedConditions } from 'protractor';
import { UserData } from '../app-config';
import casesPage from '../pages/cases.page';
import entitiesDashboardPage from '../pages/entities-dashboard.page';

describe('Cases', () => {

  beforeAll(async () => {
    await loginPage.visit();
    await loginPage.login(UserData.USER, UserData.PASSWORD);
    await browser.wait(ExpectedConditions.presenceOf(dashboardPage.dashboardComponent.root), 10000);
  });

  afterAll(async () => {
    await dashboardPage.panelActions.logout();
    await browser.wait(ExpectedConditions.presenceOf(loginPage.nameInput), 20000, "The user wasn't logged out correctly");
  });

  it('Should open new case dashboard', async () => {
    await dashboardPage.dashboardComponent.addCaseButton.click();
    await casesPage.waitForNewCasePageToLoad();
    expect(await casesPage.caseComponent.isCaseComponentPresent()).toBe(true, "Case component is not loaded");
  });

});
