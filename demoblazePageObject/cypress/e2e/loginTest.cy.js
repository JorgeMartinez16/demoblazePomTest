import LoginPage from "../page/loginPage";

describe("Login Test", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("should login with only valid credential", () => {
    loginPage.openLoginPage();
    loginPage.login("123", "123");
    loginPage.logoff();
  });

  it("should login various valid credentials", () => {
    loginPage.loginWithValidUsers().then((users) => {
      users.forEach((validUsers) => {
        loginPage.openLoginPage();
        loginPage.login(validUsers.username, validUsers.password);
        cy.url().should("not.include", "/login");
        cy.log(
          `Usuario ${validUsers.username} y contraseña ${validUsers.password} son válidos`
        );
        loginPage.logoff();
      });
    });
  });

  it("should login various invalid credentials", () => {
    loginPage.loginWithInvalidusers().then((user) => {
      user.forEach((invalidUser) => {
        loginPage.openLoginPage();
        loginPage.login(invalidUser.username, invalidUser.password);
        cy.url().should("not.include", "/logout");
        cy.log(
          `Usuario ${invalidUser.username} y contraseña ${invalidUser.password} son inválidos`
        );
        loginPage.logoff();
      });
    });
  });
});
