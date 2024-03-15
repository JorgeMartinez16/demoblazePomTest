import BasePage from "./basePage";

class ItemPage extends BasePage {
  chooseCategories() {
    cy
      .contains('Phones')
      .should('exist')
      .click({ force: true });
  }

  chooseItem() {
    
  }
}

export default ItemPage;