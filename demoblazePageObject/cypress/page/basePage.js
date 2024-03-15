export default class basePage {
  constructor() {
    this.driver = cy;
    this.wait = 5000;
  }

  homePage() {
    cy.visit("https://www.demoblaze.com/");
  }



  logoff() {
    cy.contains("Log out", { timeout: 5000 })
      .invoke("show") // Forzar la visibilidad del elemento
      .should("be.visible")
      .click({ force: true });
  }
}
