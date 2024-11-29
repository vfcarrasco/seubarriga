// Comando customizado de login
Cypress.Commands.add('login', (email, senha) => {
    cy.visit('/login');
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('.btn').click();
  });
// Comando customizado de cadastro
  Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.visit('/cadastro');
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('.btn').click();
  });