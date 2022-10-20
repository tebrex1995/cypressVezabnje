/// <reference types="Cypress" />


const locators = require('../fixtures/locators.json')
import { faker } from '@faker-js/faker';

describe('Login test cases', () => {
    beforeEach('Go to gallery page and click on login button', () => {
        cy.visit(''),
        cy.get(locators.header.loginButton).click()
    })
    //   it('Go to gallery page', () => {
    //      cy.visit('')
    //  })

    //  it('Go to login page', () => {
    //      cy.get(locators.header.loginButton).click()
    //  })

    it('Login with valid credentials', () => {
        cy.get(locators.login.emailInput).type('danilo.todorovic@vivifyideas.com'),
        cy.get(locators.login.passwordInput).type('Password1'),
        cy.get(locators.login.submitButton).click(),
        cy.get(locators.header.logoutButton).click()
    })
    // it('Logout',() => {
    //     cy.get(locators.header.logoutButton).click()
    // })

    it('Go to login page', () => {
        cy.get(locators.header.loginButton).click()
    })

    it('Login with invalid email', () => {
        cy.get(locators.login.emailInput).clear().type(faker.internet.email())
        cy.get(locators.login.passwordInput).clear().type('Password1')
        cy.get(locators.login.submitButton).click()
    })
   

    it.only('Login with invalid password', () => {
        cy.get(locators.login.emailInput).clear().type('danilo.todorovic@vivifyideas.com')
        cy.get(locators.login.passwordInput).clear().type(faker.internet.password())
        cy.get(locators.login.submitButton).click()
            })
           
   it('Login with invalid password', () => {
          cy.get(locators.login.emailInput).clear().type('danilo.todorovic@vivifyideas.com')
          cy.get(locators.login.passwordInput).clear().type('123456')
          cy.get(locators.login.submitButton).click() })
          
   it('Login with no password', () => {
          cy.get(locators.login.emailInput).clear().type('danilo.todorovic@vivifyideas.com')
          cy.get(locators.login.submitButton).click() })   
          
    it('Login with no email no password', () => {
        cy.get(locators.login.emailInput).clear()
        cy.get(locators.login.passwordInput).clear()
        cy.get(locators.login.submitButton).click() } )    
})