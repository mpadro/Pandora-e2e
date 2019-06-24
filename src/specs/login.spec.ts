import loginPage from '../pages/login.page';
import dashboardPage from '../pages/dashboard.page';
import { browser, ExpectedConditions } from 'protractor';
import { UserData } from '../app-config';

describe('Login', () => {
  const USER = UserData.USER;
  const PASSWORD = UserData.PASSWORD;
  const INVALID_PASSWORD = "test_123";

  beforeEach(async () => {
    await loginPage.visit();
  });

  afterAll(async () => {
    if(await dashboardPage.panelActions.root.isPresent()){
      await dashboardPage.panelActions.logout();
      await browser.wait(ExpectedConditions.presenceOf(loginPage.nameInput), 20000, "The user wasn't logged out correctly");
    }
  });

  it('should display an error message when invalid credentials are set', async () =>{
    await loginPage.login(USER, INVALID_PASSWORD);
    expect(await loginPage.isErrorMessagePresent()).toBe(true, "Error message is not displayed");
    expect(await loginPage.getErrorMessageText()).toBe("The provided username and password combination was incorrect.");
  });

  it('should correctly login', async () => {
    await loginPage.login(USER, PASSWORD);
    await loginPage.waitForLoginToBeProcessed();
    await dashboardPage.dashboardComponent.waitForDashboardToLoad();
    expect(await dashboardPage.panelActions.getLoggedUser()).toBe(USER);
  });

});
