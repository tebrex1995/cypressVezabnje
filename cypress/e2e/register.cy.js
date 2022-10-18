/// <reference types="Cypress" />

describe('Register test cases', () => {
    it('Go to gallery page', () => {
        cy.visit('')
    })

    it('Go to register page', () => {
        cy.get("a[href='/register']").click()
    })
})
