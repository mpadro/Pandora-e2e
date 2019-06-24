import loginPage from '../components/loginPage.component';
import dashboardComponent from '../components/dashboard.component';
import { browser, ExpectedConditions } from 'protractor';
import panelActionsComponent from '../components/panelActions.component';

describe('Login', () => {
  const USER ="tester";
  const PASSWORD = "test_1234";
  const INVALID_PASSWORD = "test_123";

  beforeEach(async () => {
    await loginPage.visit();
  });

  afterAll(async () => {
    if(await panelActionsComponent.root.isPresent()){
      await panelActionsComponent.logout();
    }
  });

  it('should display an error message when invalid credentials are set', async () =>{
    await loginPage.login(USER, INVALID_PASSWORD);
    await loginPage.verifyLoginError();
  });

  it('should correctly login', async () => {
    await loginPage.login(USER, PASSWORD);
    await loginPage.waitForLoginToBeProcessed();
    await dashboardComponent.waitForDashboardToLoad();
    expect(await panelActionsComponent.getLoggedUser()).toBe(USER);
  });

});
