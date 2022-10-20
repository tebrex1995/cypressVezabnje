/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')
import { faker } from '@faker-js/faker';

describe('Register test cases', () => {

	beforeEach("Go to gallery page and click the register button", () => {
		cy.visit(''),
		cy.get(locators.header.registerButton).click()
	})
	

	// it('Go to gallery page', () => {
	// 	cy.visit('');
	// });

	// it('Go to register page', () => {
	// 	cy.get("a[href='/register']").click();
	// });

	it('Invalid First name', () => {
		cy.get(locators.register.firstName).type('  ');
		cy.get(locators.register.lastNameInput).type('Test');
		cy.get(locators.register.emailInput).type('test@123456.com');
		cy.get(locators.register.passwordInput).type('aleksa1995');
		cy.get(locators.register.passwordConfirmationInput).type('aleksa1995');
		cy.get(locators.header.checkboxInput).check();
		cy.get(locators.header.registerSubmitButton).click();
	});
	
	it('Invalid Last name', () => {
		cy.get(locators.register.firstName).clear().type('Test');
		cy.get(locators.register.lastNameInput).clear().type('  ');
		cy.get(locators.register.emailInput).clear().type('test@123456.com');
		cy.get(locators.register.passwordInput).clear().type('aleksa1995');
		cy.get(locators.register.passwordConfirmationInput).clear().type('aleksa1995');
		cy.get(locators.header.checkboxInput).check();
		cy.get(locators.header.registerSubmitButton).click();
	});
	
	it('Invalid email', () => {
		cy.get(locators.register.firstName).clear().type('Test');
		cy.get(locators.register.lastNameInput).clear().type('A');
		cy.get(locators.register.emailInput).clear().type('test@kkk.com');
		cy.get(locators.register.passwordInput).clear().type('aleksa1995');
		cy.get(locators.register.passwordConfirmationInput).clear().type('aleksa1995');
		cy.get(locators.header.checkboxInput).check();
		cy.get(locators.header.registerSubmitButton).click();
	});
	
	it('Invalid password', () => {
		cy.get(locators.register.firstName).clear().type('Test');
		cy.get(locators.register.lastNameInput).clear().type('Al');
		cy.get(locators.register.emailInput).clear().type('test@kkk.com');
		cy.get(locators.register.passwordInput).clear().type('aleksa');
		cy.get(locators.register.passwordConfirmationInput).clear().type('aleksa');
		cy.get(locators.header.checkboxInput).check();
		cy.get(locators.header.registerSubmitButton).click();
	});
	
	it('box unchecked', () => {
		cy.get(locators.register.firstName).clear().type('Test');
		cy.get(locators.register.lastNameInput).clear().type('Al');
		cy.get(locators.register.emailInput).clear().type('test@kkk.com');
		cy.get(locators.register.passwordInput).clear().type('aleksa');
		cy.get(locators.register.passwordConfirmationInput).clear().type('aleksa');
		cy.get(locators.header.checkboxInput).uncheck();
		cy.get(locators.header.registerSubmitButton).click();
	});
	
	it('Register successfully', () => {
		cy.get(locators.register.firstName).clear().type('Test');
		cy.get(locators.register.lastNameInput).clear().type('Al');
		cy.get(locators.register.emailInput).clear().type('test1234215@gmail.com');
		cy.get(locators.register.passwordInput).clear().type('aleksa1995');
		cy.get(locators.register.passwordConfirmationInput).clear().type('aleksa1995');
		cy.get(locators.header.checkboxInput).check();
		cy.get(locators.header.registerSubmitButton).click();
	});
	
});

