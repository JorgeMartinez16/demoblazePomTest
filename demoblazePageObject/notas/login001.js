
import basePage from "./basePage";

class loginPage extends basePage {
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  enterUsername(username) {
    this.getUserNameField().type(username);
  }

  enterPassword(password) {
    this.getPassWordField().type(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
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
    return cy.fixture("validUsers.json").then((data) => {
      const users = data.users;
      return users.map((user) => ({
        username: user.username,
        password: user.password,
      }));
    });
  }

  loginWithInvalidusers(){
    return cy.fixture("invalidUsers.json").then((data) => {
      const users = data.users;
      return users.map((user) => ({
        username: user.username, 
        password: user.password,
      }))
    })
  }
}


export default loginPage;
