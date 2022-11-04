/// <reference types="cypress" />

describe('Teste de ponta a ponta em Saucelabs', () => {

    before(() => {
        cy.visit("https://www.saucedemo.com/")
    });

    it('Deve fazer  o pedido de ponta a ponta', () => {

        cy.login('standard_user', "secret_sauce")

        cy.adicionarProduto('Sauce Labs Backpack')
        cy.adicionarProduto('Sauce Labs Bike Light')
        cy.adicionarProduto('Sauce Labs Onesie')
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.cadastro('Ana', 'Lucia', "15768-486")
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')

    });
});