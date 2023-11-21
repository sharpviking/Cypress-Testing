

describe('My First Test', () => {
    it('verify', () => {

        cy.visit('https://yelpcamp-wwht.onrender.com/')






    })
    it('verify title-negative test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.title().should('eq', 'YelpCamp123')




    })
})


