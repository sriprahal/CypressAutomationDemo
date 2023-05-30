describe('My First Test', () => {
    it('Positive - test', function(){
        cy.visit("https://www.youtube.com/")
        cy.title().should('eq','YouTube')
    })

    it('Negative - test', function(){
        cy.visit("https://www.youtube.com/")
        cy.title().should('eq','UTube')
    })
})