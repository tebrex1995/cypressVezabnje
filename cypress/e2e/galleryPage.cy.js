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

describe ('Create gallery test cases', () => {

    beforeEach(() => {
        cy.visit('/')
        navigation.clickOnLoginButton()
        loginPage.login("qatest@gmail.com", "emausla123")
        navigation.clickOnCreateGalleryButton()
      })
    
  it("Create gallery", () => {
    createGalleryPage.createGallery(faker.animal.bird(), faker.lorem.sentence(), faker.image.business()+".jpg")
    cy.url('').should('not.contain', '/create')
    general.newGallery.should('be.visible')
  })

  it("Edit gallery title", () => {
    editGalleryPage.editGallery(editedGalleryName, editedGalleryDescription)
    general.editedGallery.find('h1').should('contain', editedGalleryName)
    general.editedGallery.find('p').should('contain', editedGalleryDescription)
    

})
  it('should delete gallery', () => {
    deleteGalleryPage.deleteNewGallery()
    cy.url().should('not.contain', '/galleries')

  
   
})
})