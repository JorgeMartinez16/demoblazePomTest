/* it("should login various valid credentials", () => {
    loginPage.loginWithValidUsers().then((users) => {
        users.forEach((validUsers) => {
            loginPage.openLoginPage();
            loginPage.login(validUsers.username, validUsers.password);
            cy.url().should("not.include", "/login");
            cy.get('#nameofuser', { timeout: 5000 }).should(($elem) => {
                // Verificar si el elemento existe en el DOM
                expect($elem).to.exist;
                // Verificar si el elemento contiene el texto de bienvenida esperado
                const welcomeText = $elem.text();
                expect(welcomeText).to.include(`Welcome ${validUsers.username}`);
            });
            cy.log(`Usuario ${validUsers.username} y contraseña ${validUsers.password} son válidos`);
            loginPage.logoff();
        });
    });
}); */


 /*  it("should login various valid credentials", () => {
    loginPage.loginWithValidUsers().then((users) => {
      users.forEach((validUsers) => {
        loginPage.openLoginPage();
        loginPage.login(validUsers.username, validUsers.password);
        cy.url().should("not.include", "/login");
        cy.contains(`Welcome ${validUsers.username}`, { timeout: 6000 }).should(
          "be.visible",
          { force: true }
        );
        cy.log(
          `Usuario ${validUsers.username} y contraseña ${validUsers.password} son válidos`
        );
        loginPage.logoff();
      });
    });
  }); */