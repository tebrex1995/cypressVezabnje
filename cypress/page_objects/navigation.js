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
    get sumbitButton(){
        return cy.get("button[type='button']").eq(0)
    }
    get cancelButton(){
        return cy.get("button[type='button']").eq(1)
    }
    get deleteButton(){
        return cy.get(".btn-custom").eq(0)
    }
    get registerButton(){
        return cy.get("a[href='/register']")
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
    clickOnAddImageButton(){
        this.addImage.click()
    }
    clickOnSubmitButton(){
    this.sumbitButton.click()
    
}

    clickOnCancelButton(){
    this.cancelButton.click()
}
    clickOnDeleteButton(){
    this.deleteButton.click()
}
    clickOnSelectedGallery(){
        this.gallerySelect.click()
    }

    clickOnEditButton(){
        this.galleryEditButton.click()
    }
   

}


export const navigation = new Navigation
