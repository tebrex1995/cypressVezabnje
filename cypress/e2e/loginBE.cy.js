
import { navigation } from '../page_objects/navigation'

var token;
describe('Login BE', () => {

    beforeEach('Login with BE', () => {

        // cy.loginBE( 'qatest@gmail.com', 'emausla123')

        // cy.loginBE( Cypress.env('validEmail'), Cypress.env('validPassword'))
// HVATANJE TOKENA
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
            email:"qatest@gmail.com",
            password:"emausla123"
        }).its('body').then(response => {
            // window.localStorage.setItem('token',response.access_token)
            token = response.access_token;
        })
    })

    beforeEach('Set token in local storage',() => {
        window.localStorage.setItem('token',token)

    })

    it('Check if we are logged', () => {
        cy.visit('')
        navigation.logoutButton.should('exist')
    })


    
    it('Logout BE', () => {

        // uvek mora prilikom requesta da se ubaci i body kada ga ima
       cy.request({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/logout',
        headers: {
            authorization: `Bearer ${token}`
        }
       })

    })

    })
