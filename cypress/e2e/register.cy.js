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
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
	register.RegisterAccount(data.register.invalidFirstName, faker.name.lastName(), faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.statusCode).to.eq(422)
			expect(intercept.response.statusMessage).to.eq("Unprocessable Entity")
			expect(intercept.response.body.errors.first_name[0]).to.eq("The first name field is required.")
			expect(intercept.response.body.message).to.eq("The given data was invalid.")
		})
		
	
	});
	
	it.only('Invalid Last name', () => {
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
		register.RegisterAccount(faker.name.firstName(), data.register.invalidLastName, faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.statusCode).to.eq(422)
			expect(intercept.response.statusMessage).to.eq('Unprocessable Entity')
			expect(intercept.response.body.message).to.eq("The given data was invalid.")
			expect(intercept.response.body.errors.last_name[0]).to.eq("The last name field is required.")
		})
	}),
	it('Invalid email', () => {
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(), data.register.invalidEmail, data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
		
		
	}),
	

	it('Register an existing user', () 	=> {
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
		register.RegisterAccount(faker.name.firstName(), data.register.invalidLastName, data.login.validEmail, data.register.validPassword, data.register.validPassword)
		general.errorMessage.should('contain', 'The email has already been taken.')
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.body.message).to.eq("The given data was invalid.")
			expect(intercept.response.statusCode).to.eq(422)
			expect(intercept.response.statusMessage).to.eq('Unprocessable Entity')
			
		})
	}),

	it('Passwords mush mactch', () =>{
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.validPassword, faker.internet.password())
		cy.url().should('contain', '/register')
		general.errorMessage.should('contain', 'The password confirmation does not match.')
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.body.message).to.eq("The given data was invalid.")
			expect(intercept.response.statusCode).to.eq(422)
			expect(intercept.response.statusMessage).to.eq('Unprocessable Entity')
		})
	})

	it('Password must be longer than 8 characters', () =>{
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.invalidPassword, data.register.invalidPassword)
		cy.url().should('contain', '/register')
		general.errorMessage.should('contain', 'The password must be at least 8 characters.')
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.body.message).to.eq("The given data was invalid.")
			expect(intercept.response.statusCode).to.eq(422)
			expect(intercept.response.statusMessage).to.eq('Unprocessable Entity')
		})
	 })
	
	it('box unchecked', () => {
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
		register.RegisterAccountUnchecked(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('contain', '/register')
		general.errorMessage.should('contain', data.register.uncheckedBox)
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.body.message).to.eq("The given data was invalid.")
			expect(intercept.response.statusCode).to.eq(422)
			expect(intercept.response.statusMessage).to.eq('Unprocessable Entity')

		})
	}),
	
	it('Register successfully', () => {
		cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register').as('invalidRegister')
		register.RegisterAccount(faker.name.firstName(), faker.name.lastName(),faker.internet.email(), data.register.validPassword, data.register.validPassword)
		cy.url().should('not.contain', '/register')
		cy.wait('@invalidRegister').then( intercept => {
			console.log(intercept)
			expect(intercept.response.statusCode).to.eq(200)
			expect(intercept.response.statusMessage).to.eq('OK')
			

		})
	})
	
});

