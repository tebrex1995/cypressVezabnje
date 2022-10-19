/// <reference types="Cypress" />

describe('Register test cases', () => {
	it('Go to gallery page', () => {
		cy.visit('');
	});

	it('Go to register page', () => {
		cy.get("a[href='/register']").click();
	});
});

it('Invalid First name', () => {
	cy.get('#first-name').type('');
	cy.get('#last-name').type('Test');
	cy.get('#email').type('test@123456.com');
	cy.get('#password').type('aleksa1995');
	cy.get('#password-confirmation').type('aleksa1995');
	cy.get('[type="checkbox"]').check();
	cy.get("button[type='submit']").click();
});

it('Invalid Last name', () => {
	cy.get('#first-name').clear().type('Test');
	cy.get('#last-name').clear().type('');
	cy.get('#email').clear().type('test@123456.com');
	cy.get('#password').clear().type('aleksa1995');
	cy.get('#password-confirmation').clear().type('aleksa1995');
	cy.get('[type="checkbox"]').check();
	cy.get("button[type='submit']").click();
});

it('Invalid email', () => {
	cy.get('#first-name').clear().type('Test');
	cy.get('#last-name').clear().type('A');
	cy.get('#email').clear().type('test@kkk.com');
	cy.get('#password').clear().type('aleksa1995');
	cy.get('#password-confirmation').clear().type('aleksa1995');
	cy.get('[type="checkbox"]').check();
	cy.get("button[type='submit']").click();
});

it('Invalid password', () => {
	cy.get('#first-name').clear().type('Test');
	cy.get('#last-name').clear().type('Al');
	cy.get('#email').clear().type('test@kkk.com');
	cy.get('#password').clear().type('aleksa');
	cy.get('#password-confirmation').clear().type('aleksa');
	cy.get('[type="checkbox"]').check();
	cy.get("button[type='submit']").click();
});

it('box unchecked', () => {
	cy.get('#first-name').clear().type('Test');
	cy.get('#last-name').clear().type('Al');
	cy.get('#email').clear().type('test@kkk.com');
	cy.get('#password').clear().type('aleksa');
	cy.get('#password-confirmation').clear().type('aleksa');
	cy.get('[type="checkbox"]').uncheck();
	cy.get("button[type='submit']").click();
});

it('Register successfully', () => {
	cy.get('#first-name').clear().type('Test');
	cy.get('#last-name').clear().type('Al');
	cy.get('#email').clear().type('test1234215@gmail.com');
	cy.get('#password').clear().type('aleksa1995');
	cy.get('#password-confirmation').clear().type('aleksa1995');
	cy.get('[type="checkbox"]').check();
	cy.get("button[type='submit']").click();
});
