/// <reference types="Cypress" />

describe('Login test cases', () => {
    it('Go to gallery page', () => {
        cy.visit('')
    })

    it('Go to login page', () => {
        cy.get("a[href='/login']").click()
    })

    it('Login with valid credentials', () => {
        cy.get('#email').type('danilo.todorovic@vivifyideas.com')
        cy.get('#password').type('Password1')
        cy.get("button[type='submit']").click()
    })
    it('Logout',() => {
        cy.get('a[role="button "]').click()
    })

    it('Go to login page', () => {
        cy.get("a[href='/login']").click()
    })

    it('Login with invalid email', () => {
        cy.get('#email').clear().type('a22.com')
        cy.get('#password').clear().type('Password1')
        cy.get("button[type='submit']").click()
    })
   

    it('Login with invalid password', () => {
        cy.get('#email').clear().type('danilo.todorovic@vivifyideas.com')
        cy.get('#password').clear().type('123456')
        cy.get("button[type='submit']").click()
            })
           
   it('Login with invalid password', () => {
          cy.get('#email').clear().type('danilo.todorovic@vivifyideas.com')
          cy.get('#password').clear().type('123456')
          cy.get("button[type='submit']").click() })
          
   it('Login with no password', () => {
          cy.get('#email').clear().type('danilo.todorovic@vivifyideas.com')
          cy.get("button[type='submit']").click() })   
          
    it('Login with no email no password', () => {
        cy.get('#email').clear()
        cy.get('#password').clear()
        cy.get("button[type='submit']").click() } )    
})