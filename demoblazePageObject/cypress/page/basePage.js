export default class basePage {
  constructor() {
    this.driver = cy;
    this.wait = 5000;
  }

  homePage() {
    cy.visit("https://www.demoblaze.com/");
  }

  openLoginPage() {
    this.homePage();
    /* cy.visit('https://www.demoblaze.com/'); */
    cy.get("#login2", { timeout: 3000 })
      .should("be.visible")
      .click({ force: true });
  }

  logoff() {
    cy.contains("Log out", { timeout: 5000 })
      .invoke("show") // Forzar la visibilidad del elemento
      .should("be.visible")
      .click({ force: true });
  }
}
