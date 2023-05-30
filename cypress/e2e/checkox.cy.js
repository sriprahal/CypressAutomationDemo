describe('demo', () => {
    it('Radio button,checkbox,dropdown', () => {
        cy.visit('https://tutorial.techaltum.com/htmlform.html');

        //radio button
        cy.get('.list-group > :nth-child(5) > a').click();
        cy.get('#m').should('be.visible'); //checking whether its visile or not
        cy.get('#m').check().should('be.checked'); //now slecting the option
        cy.get('#f').should('not.be.checked'); //verifying whether other options shd not be checked

        //checkbox
        cy.get('.list-group > :nth-child(6) > a').click();
        cy.get('div.highlight>form>input').check().should('be.checked'); //selecting all options with common locator

        //dropdown
        cy.get('.list-group > :nth-child(7) > a').click();
        cy.get('#city1').select('Chicago').should('have.value', 'Chicago'); //selecting option from list
    })

    //dynamic dropdown
    it('dynamic dropdown', () => {
        cy.visit('https://www.google.com/');
        cy.xpath("//input[@title='Search']").type('cypress automation');
        cy.get('div.OBMEnb>ul>li')
            .each(($el, index, $list) => {
                if ($el.text() == 'cypress automation testing') {
                    cy.wrap($el).click();
                    cy.wait(3000);
                }
            })
    })
})