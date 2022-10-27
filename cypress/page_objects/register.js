class Register {

    get firstNameInput(){
        return cy.get('#first-name')
    }

    get lastNameInput(){
        return cy.get('#last-name')
    }

    get emailInput(){
        return cy.get('#email')
    }

    get passwordInput(){
        return cy.get('#password')
    }

    get passwordConfirmationInput(){
        return cy.get('#password-confirmation')
    }

    get registerButton(){
        return cy.get("a[href='/register']")
    }

    get registerSubmitButton(){
        return cy.get("button[type='submit']")
    }
    get checkboxInput(){
        return cy.get("[type='checkbox']")
    }

    RegisterAccount(firstName, lastName, email, password, passwordConfirmation){
       
       
        this.registerButton.click()
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(passwordConfirmation)
        this.checkboxInput.check()
        this.registerSubmitButton.click()


    }

    RegisterAccountUnchecked(firstName, lastName, email, password, passwordConfirmation){
       
       
        this.registerButton.click()
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(passwordConfirmation)
        this.checkboxInput.uncheck()
        this.registerSubmitButton.click()


    }

    

}

export const register = new Register