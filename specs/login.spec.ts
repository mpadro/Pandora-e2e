import loginPage from '../pages/loginPage';
import dashboardPage from '../pages/dashboardPage';
import { browser, ExpectedConditions } from 'protractor';

describe('Login - ', () => {
  beforeAll(async () => {
    await loginPage.visit();
  })

  it('should allow a user to login', async () => {
    await loginPage.login("tester", "test_1234");
    expect(await dashboardPage.root.isPresent()).toBe(true);
  });

});
