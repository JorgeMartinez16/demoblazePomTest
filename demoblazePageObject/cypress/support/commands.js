
Cypress.Commands.add('logoutSession', () => {
    cy.get('#logout2', { timeout: 3000})
      .should('exist')
      .click({ force: true });
      
  });

  Cypress.Commands.add('logout', () => {
    cy.get('#logout2', { timeout: 10000 })
    .should('exist');
    cy.wait(2000); // sin el wait no se ve el botón
    cy.url({ timeout: 15000, log: false }).should('not.include', '/login');
  });
  
  