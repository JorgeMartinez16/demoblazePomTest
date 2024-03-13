import LoginPage from "../page/loginPage";

describe("Login Test", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it("should login with only valid credential", () => {
    loginPage.openLoginPage();
    loginPage.login("123", "123");
    loginPage.logoff();
  });

  it("should login various valid credentials", () => {
    loginPage.loginWithValidUsers().then((users) => {
      users.forEach((user) => {
        loginPage.openLoginPage();
        loginPage.login(user.username, user.password);
        cy.url().should("not.include", "/login");
        cy.log(`Usuario ${user.username} y contraseña ${user.password} son válidos`);
        loginPage.logoff();
      });
    });
  });

  it("should login various invalid credentials", () => {
    loginPage.loginWithInvalidusers().then((user) => {
      user.forEach((user) => {
        loginPage.openLoginPage();
        loginPage.login(user.username, user.password);
        cy.url().should("not.include", "/logout");
        cy.log(`Usuario ${user.username} y contraseña ${user.password} son inválidos`);
        loginPage.logoff();
      })
    })
  })
});
