/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Site Seu Barriga - Avaliação Prática', () => {
  const fakeEmail = faker.internet.email(); // E-mail falso gerado pelo Faker
  const fakeName = 'Home Loan Account'; // Nome fixo para o teste
  const usuario = {
    nome: 'Vitor',
    email: fakeEmail, // Usando o email falso gerado
    senha: '123456',
  };

  it('Cadastro de novo usuário', () => {
    cy.cadastro(usuario.nome, usuario.email, usuario.senha); // Usando o comando customizado de cadastro com o email falso
    cy.contains('Usuário inserido com sucesso').should('be.visible');
  });

  it('Tentativa de login com senha inválida', () => {
    cy.login(usuario.email, 'senhaInvalida'); // Usando o comando customizado de login
    cy.contains('Problemas com o login do usuário').should('be.visible');
  });

  it('Login com email e senha válidos', () => {
    cy.login(usuario.email, usuario.senha); // Usando o comando customizado de login
    cy.contains(`Bem vindo, ${usuario.nome}!`).should('be.visible');
  });

  it('Cadastro de nova conta', () => {
    cy.login(usuario.email, usuario.senha); // Usando o comando customizado de login
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('#nome').type(fakeName);
    cy.get('.btn').click();
  });

  it('Cadastro de movimentação', () => {
    cy.login(usuario.email, usuario.senha); // Usando o comando customizado de login
    cy.get(':nth-child(3) > a').click();
    cy.get('#tipo').select('Receita');
    cy.get('#data_transacao').type('01/01/2024');
    cy.get('#data_pagamento').type('01/02/2024');
    cy.get('#descricao').type('Descrição da movimentação');
    cy.get('#interessado').type(usuario.nome);
    cy.get('#valor').type('100');
    cy.get('#conta').select(0);
    cy.get('[for="status_pago"]').click();
    cy.get('.btn').click();
    cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
  });

  it('Validação da movimentação', () => {
    cy.login(usuario.email, usuario.senha); // Usando o comando customizado de login
    cy.get(':nth-child(4) > a').click();
    cy.wait(500);

    cy.get('#mes').select('Janeiro');
    cy.get('#ano').select('2024');
    cy.get('.btn').click();
    cy.wait(500);

    cy.contains('Descrição da movimentação').should('be.visible');
    cy.contains('01/02/2024').should('be.visible');
    cy.contains(fakeName).should('be.visible');
    cy.contains('100.00').should('be.visible');
    cy.contains('Pago').should('be.visible');
  });

  it('Validação de e-mail já cadastrado', () => {
    cy.cadastro(usuario.nome, usuario.email, usuario.senha); // Usando o comando customizado de cadastro com o email falso
    cy.contains('Endereço de email já utilizado').should('be.visible');
  });
});
