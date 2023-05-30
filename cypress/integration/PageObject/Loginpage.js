class LoginPage {
    navigate() {
        cy.visit("https://www.ugaoo.com/?gclid=Cj0KCQiApKagBhC1ARIsAFc7Mc5HPlQ8pHrAYxP1lVCx2SGJbmp5T \
        dQ16doBvIMJK1WIZ0izD8rJpawaAqTiEALw_wcB")
    }
    profile() {
        cy.get('#myBtn').click();
    }
    enterEmail() {
        cy.fixture('userInput.json').then((user)=>{
           cy.get('#CustomerEmail').type(user.email);
        })
        // cy.get('#CustomerEmail').type(username);
        return this
    }
    enterPassword() {
        cy.fixture('userInput.json').then((pswd)=>{
            cy.get('#CustomerPassword').type(pswd.password);
        })
        //cy.get('#CustomerPassword').type(pswd);
        return this
    }
    signInSubmit() {
        cy.get("form[id='customer_login'] button[type='submit']").click();
    }
}
export default LoginPage