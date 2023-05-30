describe('My demo 4', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('login', () => {


       cy.visit('https://www.ebay.com/')
       cy.contains('Sign in').click() //visiting the site and checking a small assertion

       
       //logging in y providing username and password 

       cy.get('#userid').type("srihariprahal2001@gmail.com")
       cy.get('#userid').should('have.value','srihariprahal2001@gmail.com') //implicit assertions
       cy.get('#signin-continue-btn').click()
       cy.get('#pass').type("Admin@123")
       cy.get('#pass').should('have.value','Admin@123')
       cy.get("[type='submit']").click()

       //validating the name of the user is correct after logging in
       
       let expUser= 'Admin';
       cy.get("header[id='gh'] b:nth-child(1)").then( function(value) {  //js function
        let actualUser = value.text()
        expect(expUser).to.equal(actualUser) //BDD approach
        assert.equal(expUser,actualUser) //TDD approach
       })

       //searching for products
       cy.get('#gh-ac').type('Tshirts')
       cy.get('#gh-btn').click()



        // cy.contains('Log In').trigger('mouseover')
        // cy.contains('Log In').click()
        
    })
})