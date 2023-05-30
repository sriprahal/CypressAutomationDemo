class Validate{
    userValidation() {
        let expUser= 'Hi Admin';
        cy.xpath("//h4[normalize-space()='Hi Admin']").then( function(value) {  
        let actualUser = value.text();
        assert.equal(expUser,actualUser); //TDD approach
        return this
       })
    }
    cartValidation(expItemCount,cartCount) {
        assert.equal(expItemCount,cartCount);
        return this
    }
    signoutValidation(){
        cy.xpath("//p[@class='layout-flex__item']").contains('Log in');
        return this
    }
    negativeValidation() {
        const we = cy.fixture('userInput.json').then((i)=>{
            cy.get(i.wrongEmail);
        })
        assert.equal(we,'practice123student@gmail.com')
    }
}
export default Validate