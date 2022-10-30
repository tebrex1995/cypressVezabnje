


var token

describe('Create new gallery with BE', () =>  {

    beforeEach('Login with BE', () => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
            email:"qatest@gmail.com",
            password:"emausla123"
        }).its('body').then(response => {
            // window.localStorage.setItem('token',response.access_token)
            token = response.access_token;
        })
    })  

    beforeEach('set token in window storage', () => {
        window.localStorage.setItem('token', token)
    })

    it('Create new gallery', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries',
            headers: {
                authorization: `Bearer ${token}`
            },
            body: {
                title: "Aa", 
                description: "aaa",
                 images: ['https://static.euronews.com/articles/stories/06/83/88/00/1440x810_cmsv2_ed192482-decb-573e-8ce3-b463f9bd6a07-6838800.jpg']
                }
            })
    })
    })