class EditGalleryPage {


    get myGalleryButton(){
        return cy.get("a[href='/my-galleries']")
       }
       

    get galleryEditButton(){
        return cy.get(".btn-custom").eq(1)
    }
    get newTitleInput(){
        return cy.get("#title")
    }
    get newDescriptionInput(){
        return cy.get("#description")
    }
    get sumbitButton(){
        return cy.get("button[type='submit']").eq(0)
    }

    get selectNewGallery(){
        return cy.get(".box-title").eq(0)
    }

    

   editGallery(newTitle, newDescription){
    this.myGalleryButton.click()
    this.selectNewGallery.click()
    this.galleryEditButton.click()
    this.newTitleInput.clear().type(newTitle)
    this.newDescriptionInput.clear().type(newDescription)
    this.sumbitButton.click()
 
   }

}


export const editGalleryPage = new EditGalleryPage()