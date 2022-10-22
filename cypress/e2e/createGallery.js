/// <reference types="Cypress" />

import { navigation } from '../page_objects/navigation'
import {createGalleryPage} from '../page_objects/createGalleryPage'
import { faker } from '@faker-js/faker'

describe ('Create gallery test cases', () => {

    before(() => {
        cy.visit('/')
      })
    beforeEach("Go to create gallery page", () => {
       navigation.clickOnCreateGalleryButton()
    })
  



})