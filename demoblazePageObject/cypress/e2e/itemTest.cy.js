import BasePage from "../page/basePage";
import ItemPage from "../page/itemPage";
import LoginPage from "../page/loginPage";

describe("Login Test", () => {
  const itemPage = new ItemPage();
  const loginPage = new LoginPage();
  const itemName = ""; 
  beforeEach(() => {
    const basePage = new BasePage();
    basePage.homePage();
  });

  it("should choose phones", () => {
    cy.fixture('items.json').then((data) => {
      const phones = data.phones;
      itemPage.chooseCategories('Phones');
      phones.forEach((phone) => {
        itemPage.choosePhones(phone.itemName); 
      });
    });
  });

  it('should choose laptops,', () => {
    cy.fixture('items.json').then((data) => {
      const laptops = data.laptops;
      laptops.forEach((laptop) => {
        itemPage.chooseLaptops(laptop.itemName);
      });
    });
  });

});
