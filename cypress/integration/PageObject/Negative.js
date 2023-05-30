class Negative{
    wrongEmail(){
        const we = cy.fixture('userInput.json').then((wEmail)=>{
            cy.get('#CustomerEmail').type(wEmail.wrongEmail)
        })
        return this
    }
    wrongPassword(){
        const pw = cy.fixture('userInput.json').then((wPswd)=>{
            cy.get('#CustomerPassword').type(wPswd.wrongEmail)
        })
        return this
    }
}
export default Negative