/// <reference types="Cypress" />

import { navigation } from '../page_objects/navigation'
import {createGalleryPage} from '../page_objects/createGalleryPage'
import { faker } from '@faker-js/faker'
import { loginPage } from '../page_objects/loginPage'
import {editGalleryPage} from '../page_objects/editGalleryPage'
import { deleteGalleryPage } from '../page_objects/deleteGalleryPage'
import { general } from '../page_objects/general'

const editedGalleryName = faker.animal.dog()
const editedGalleryDescription = faker.lorem.sentence()
var editedGalleryId
describe ('Create gallery test cases', () => {

    beforeEach(() => {
        cy.visit('/')
        navigation.clickOnLoginButton()
        loginPage.login("qatest@gmail.com", "emausla123")
        navigation.clickOnCreateGalleryButton()
      })
    
  it.only("Create gallery", () => {
    cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries').as('createGallery')
    createGalleryPage.createGallery(faker.animal.bird(), faker.lorem.sentence(), faker.image.business()+".jpg")
    cy.url('').should('not.contain', '/create')
    general.newGallery.should('be.visible')
    cy.wait('@createGallery').then( intercept => {
      editedGalleryId = intercept.response.body.id
      console.log(intercept)
      expect(intercept.response.statusCode).to.eq(201)
      expect(intercept.response.statusMessage).to.eq('Created')
      expect(intercept.response.body.title).to.eq(intercept.request.body.title)
      expect(intercept.response.body.description).to.eq(intercept.request.body.description)
      expect(intercept.request.body.images[0]).to.eq("https://loremflickr.com/640/480/business.jpg")
    })

  })

  it("Edit gallery title", () => {
    cy.intercept('GET', 'https://gallery-api.vivifyideas.com/api/galleries/1011/edit' ).as('editedGallery')
    editGalleryPage.editGallery(editedGalleryName, editedGalleryDescription)
    general.editedGallery.find('h1').should('contain', editedGalleryName)
    general.editedGallery.find('p').should('contain', editedGalleryDescription)
    cy.wait('@editedGallery').then( intercept => {
      console.log(intercept)
      expect(intercept.response.statusCode).to.equal(200)

    })
    

})


  it('Should delete gallery', () => {
    cy.intercept('DELETE', 'https://gallery-api.vivifyideas.com/api/galleries/'+editedGalleryId ).as('deleteGallery')
    deleteGalleryPage.deleteNewGallery()
    cy.url().should('not.contain', '/galleries')
    general.editedGallery.should('not.contain', general.newGallery)
    cy.wait('@deleteGallery').then( intercept => {
      console.log(intercept)
      expect(intercept.response.statusCode).to.eq(200)
      expect(intercept.response.body).to.eq('1')
      expect(intercept.response.statusMessage).to.eq('OK')
    })

  
   
})
})