describe('Demo-1', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Login', function(){

        cy.visit("https://www.ugaoo.com/?gclid=Cj0KCQiApKagBhC1ARIsAFc7Mc5HPlQ8pHrAYxP1lVCx2SGJbmp5TdQ16doBvIMJK1WIZ0izD8rJpawaAqTiEALw_wcB")

        //logging in
        cy.get('#myBtn').click()
        cy.get('#CustomerEmail').type("practice123student@gmail.com")
        cy.get('#CustomerPassword').type("Student@123")
        
        cy.get("form[id='customer_login'] button[type='submit']").click()

        //validating the user name
        let expUser= 'Hi Admin';
        cy.xpath("//h4[normalize-space()='Hi Admin']").then( function(value) {  //js function
        let actualUser = value.text()
        expect(expUser).to.equal(actualUser) //BDD approach
        assert.equal(expUser,actualUser) //TDD approach
       })

        cy.get("div[class='search_form desktop-search st-search-box-desktop'] input[placeholder='Search for plants, seeds and planters ...']").type("Aloe Vera")
        
        cy.xpath("//div[@class='search_form desktop-search st-search-box-desktop']//button[@type='submit']").click()

        // clicking the product
        //cy.contains("Aloe Vera Star plant").click()
        cy.xpath("//div[@id='img_id_6940910518404']//img[@class='img main-img lazyautosizes lazyload']").click()
        cy.get("button[name='plus']").click()
        cy.get("button[name='plus']").click() //increasing the product quantity as 3

        cy.xpath("//main[@role='main']//section//section//div//div//div// \
        product-form//form[@method='post']//div//button[@name='add'] \
        [normalize-space()='Add to cart']").click() //adding to cart

        //validating the toatl no.of items selected is equal in cart
        it('validating cart', () =>{
            let expItemCount = "input#Quantity-1".toString();
            let cartCount = "span.cart_item_count".toString();
            expect(expItemCount).to.equal(cartCount);

            cy.get("span.mini-cart-close").click() //closing the cart tab
        })
        
        //signing out
        it('sign out', () => {
            cy.get('svg.icon.icon-account').click()
            cy.get('a.account-logout').click()
            cy.url().should('eq','https://www.ugaoo.com/')
        })
    })
})