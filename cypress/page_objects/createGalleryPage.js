
class CreateGalleryPage {
    get title(){
        return cy.get("#title")
    }

    get description(){
        return cy.get("#description")
    }

   get imgUrl () {
    return cy.get(".form-control")
 
   } 
   

}

export const createGalleryPage = new CreateGalleryPage