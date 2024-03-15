
import basePage from "./basePage";

class loginPage extends basePage {
  login(username, password) {
    this.getUserNameField().type(username);
    this.getPassWordField().type(password);
    this.getLoginButton().click({ force: true });
  }

  openLoginPage() {
    this.homePage();
    /* cy.visit('https://www.demoblaze.com/'); */
    cy.get("#login2", { timeout: 3000 })
      .should("be.visible")
      .click({ force: true });
  }

  getUserNameField() {
    // sigo teniendo dudas de este locator del modal
    cy.get("#logInModal.modal.fade", { timeout: 5000 })
      .should("exist", { force: true })
      .should("be.visible");
    return cy.get("#loginusername", { timeout: 3000 }).should("be.visible");
  }

  getPassWordField() {
    return cy.get("#loginpassword").should("be.visible");
  }

  getLoginButton() {
    return cy
      .contains(".btn.btn-primary", "Log in", { timeout: 2000 })
      .should("be.visible");
  }

  loginWithValidUsers() {
    return cy.fixture("users.json").then((data) => {
      const validUsers = data.validUsers;
      return validUsers.map((validUsers) => ({
        username: validUsers.username,
        password: validUsers.password,
      }));
    });
  }

  loginWithInvalidusers(){
    return cy.fixture("users.json").then((data) => {
      const invalidUser = data.invalidUser;
      return invalidUser.map((invalidUser) => ({
        username: invalidUser.username, 
        password: invalidUser.password,
      }))
    })
  }
}


export default loginPage;
