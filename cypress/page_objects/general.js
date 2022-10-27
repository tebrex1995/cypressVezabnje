class General {
get headerTitle(){
    return cy.get('h1')
}
get errorMessage(){
    return cy.get('p[class="alert alert-danger"]')
}

get newGallery()  {
    
    return cy.get(".box-title").eq(0)

}

get editedGallery() {
    return cy.get(".container")
}




}

export const general = new General()