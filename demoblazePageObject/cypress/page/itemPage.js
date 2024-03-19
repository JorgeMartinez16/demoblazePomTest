import BasePage from "./basePage";

class ItemPage extends BasePage {
/*   chooseCategories() {
    cy.contains('Phones')
      .should('exist')
      .click({ force: true });
  } */

  chooseCategories(category) {
    cy.get('.list-group')
    .contains(category)
      .should('exist')
      .click({ force: true });
}


  chooseItem(itemName) {
    cy.contains(itemName, { timeout: 3000 } )
      .should('be.visible')
      .click({ force: true });
    cy.go(-1); 
  }

  choosePhones(itemName) {
    this.chooseCategories('Phones'); 
    this.chooseItem(itemName); 
  }

  chooseLaptops(itemName){
    this.chooseCategories('Laptops');
    this.chooseItem(itemName);
  }
}

export default ItemPage;
