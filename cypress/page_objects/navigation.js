class Navigation {
    get loginButton(){
        return cy.get("a[href='/login']")
    }
    get logoutButton(){
        return cy.get("a[role='button ']")
    }
    get createGalleryButton (){
        return cy.get("a[href='/create']")
    }
    get myGalleryButton (){
        return cy.get("a[href='/my-galleries']")
    }
    get addImage() {
        return cy.get("button[type='button']").eq(2)
    }

    clickOnLoginButton(){
        this.loginButton.click()
    }
    clickOnLogOutButton(){
        this.logoutButton.click()
    }
    clickOnCreateGalleryButton(){
        this.createGalleryButton.click()
    }
    clickOnMyGalleryButton(){
        this.myGalleryButton.click()
    }

}

export const navigation = new Navigation
