class DeleteGalleryPage {

    get selectNewGallery(){
        return cy.get(".box-title").eq(0)
    }

    get myGalleryButton (){
        return cy.get("a[href='/my-galleries']")
    }
    get deleteButton(){
        return cy.get(".btn-custom").eq(0)
    }

    deleteNewGallery(){
        this.myGalleryButton.click()
        this.selectNewGallery.click()
        this.deleteButton.click()
    }

}

export const deleteGalleryPage = new DeleteGalleryPage