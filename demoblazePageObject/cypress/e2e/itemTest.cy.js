import BasePage from "../page/basePage";
import ItemPage from "../page/itemPage";
import LoginPage from "../page/loginPage";

describe("Login Test", () => {
  const itemPage = new ItemPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    const basePage = new BasePage();
    basePage.homePage();
  });

  it("should click to categories", () => {
    loginPage.openLoginPage();
    loginPage.login('123', '123');
    itemPage.chooseCategories();
  });
});

