/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')
import { faker } from '@faker-js/faker'
import data from '../fixtures/data.json'
import { register} from '../page_objects/register'
import { navigation } from '../page_objects/navigation'
import { general } from '../page_objects/general'

describe('Register test cases', () => {

	beforeEach("Go to gallery page and click the register button", () => {
		cy.visit(''),
		navigation.registerButton.click()
	})
	


	it('Invalid First name', () => {
		
	register.RegisterAccount(data.register.invalidFirstName, faker.name.lastName(), faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
		
	
	});
	
	it('Invalid Last name', () => {
		register.RegisterAccount(faker.name.firstName(), data.register.invalidLastName, faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
	}),
	it('Invalid email', () => {
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(), data.register.invalidEmail, data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
	}),
	

	it('Register an existing user', () 	=> {
		register.RegisterAccount(faker.name.firstName(), data.register.invalidLastName, data.login.validEmail, data.register.validPassword, data.register.validPassword)
		general.errorMessage.should('contain', 'The email has already been taken.')
	
	}),

	it('Passwords mush mactch', () =>{
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.validPassword, faker.internet.password())
		cy.url().should('contain', '/register')
		general.errorMessage.should('contain', 'The password confirmation does not match.')
	})

	it('Password must be longer than 8 characters', () =>{
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.invalidPassword, data.register.invalidPassword)
		cy.url().should('contain', '/register')
		general.errorMessage.should('contain', 'The password must be at least 8 characters.')
	 })
	
	it('box unchecked', () => {
		register.RegisterAccountUnchecked(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
		general.errorMessage.should('contain', data.register.uncheckedBox)
	}),
	
	it('Register successfully', () => {
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('not.contain', '/register')
	})
	
});

