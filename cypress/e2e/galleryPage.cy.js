/// <reference types="Cypress" />

import { navigation } from '../page_objects/navigation'
import {createGalleryPage} from '../page_objects/createGalleryPage'
import { faker } from '@faker-js/faker'
import { loginPage } from '../page_objects/loginPage'
import {editGalleryPage} from '../page_objects/editGalleryPage'
import { deleteGalleryPage } from '../page_objects/deleteGalleryPage'


describe ('Create gallery test cases', () => {

    beforeEach(() => {
        cy.visit('/')
        navigation.clickOnLoginButton()
        loginPage.login("qatest@gmail.com", "emausla123")
        navigation.clickOnCreateGalleryButton()
      })
    
  it("Create gallery", () => {
    createGalleryPage.createGallery(faker.animal.bird(), faker.lorem.sentence(), faker.image.business()+".jpg")

  })

  it("Edit gallery title", () => {
    editGalleryPage.editGallery(faker.animal.bear(), faker.lorem.text())

})
  it('should delete gallery', () => {
    deleteGalleryPage.deleteNewGallery()
  
   
})
})