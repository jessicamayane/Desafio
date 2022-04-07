///<reference types="cypress" />


describe('testeLupa', () => {
    it('deve poder encontrar a pagina inicial', () => {
         cy.visit('https://blogdoagi.com.br/', {failOnStatusCode: false})      
        //cy.get - busca um elemento
        // .type - insere um texto        
    })
   });