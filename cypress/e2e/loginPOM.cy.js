/// <reference types="Cypress" />


const locators = require('../fixtures/locators.json')
import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general }  from '../page_objects/general'
import data from '../fixtures/data.json'

describe('Login test cases', () => {
    beforeEach('Go to gallery page and click on login button', () => {
        cy.visit(''),
        cy.url('').should('contain', 'https://gallery-app.vivifyideas.com/')
        general.headerTitle.should('have.text', data.headers.allGalleries)
        navigation.clickOnLoginButton()
        cy.url().should('contain','/login')
        general.headerTitle.should('have.text', data.headers.login)

    })
   
    it('Login with valid credentials', () => {
        loginPage.login(data.login.validEmail,data.login.validPassword)
        navigation.loginButton.should('not.exist')
        navigation.logoutButton.should('exist')
        navigation.clickOnLogOutButton()
        navigation.logoutButton.should('not.exist')
        navigation.loginButton.should('exist')
    })
    
    

    it('Login with invalid email', () => {
       loginPage.login(faker.internet.email(), data.login.validPassword)
       navigation.clickOnLoginButton()
       general.errorMessage.should('be.visible')
        .and('have.text','Bad Credentials')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)')


    })
   

    it('Login with invalid password', () => {
        loginPage.login( data.login.validEmail, data.login.passwordLessThan8Characters())
        general.errorMessage.should('be.visible')
            .and('have.text','Bad Credentials')

     })

           
   it('Login with invalid password', () => {
          loginPage.login(data.login.validEmail, faker.internet.password())
          general.errorMessage.should('be.visible')
            .and('have.text','Bad Credentials')
        })
          
   it('Login with no password', () => {
          loginPage.login(data.login.validEmail ,"{backspace}")
          general.errorMessage.should('be.visible')
            .and('have.text','Bad Credentials')
        })
          
          
    it('Login with no email no password', () => {
        loginPage.login("{backspace}","{backspace}") 
        general.errorMessage.should('be.visible')
        .and('have.text','Bad Credentials')
    })
})