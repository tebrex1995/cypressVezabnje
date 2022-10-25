
class CreateGalleryPage {
    
    

    get titleInput(){
        return cy.get("#title")
    }

    get descriptionInput(){
        return cy.get("#description")
    }

   get imgUrlInput () {
    return cy.get("input[type='url']")
    }
    get sumbitButton(){
        return cy.get("button[type='Submit']").eq(0)
    }
   
    

    clickOnMyGalleryButton(){
        this.myGalleryButton.click()
    }
    
    createGallery(title, description, imgUrl) {

        
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imgUrlInput.type(imgUrl)
        this.sumbitButton.click()
        
    }

    clickOnNewGallery(){
        this.selectNewGallery.click()
    }



    
}

export const createGalleryPage = new CreateGalleryPage()