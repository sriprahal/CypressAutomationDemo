class Cart{
    searchProduct(plant) {
        cy.get("div[class='search_form desktop-search st-search-box-desktop'] \
        input[placeholder='Search for plants, seeds and planters ...']").type(plant);
        cy.xpath("//div[@class='search_form desktop-search st-search-box-desktop'] \
        //button[@type='submit']").click();
        return this
    }
    clickProduct() {
        cy.xpath("//div[@id='img_id_6940910518404'] \
        //img[@class='img main-img lazyautosizes lazyload']").click();
        return this
    }
    increaseQuantity() {
        for(let i=0;i<2;i++){
            cy.get("button[name='plus']").click(); 
        }
        return this
    }
    addToCart() {
        cy.xpath("//button[normalize-space()='Buy it now']").click();
        return this
    }
   
}
export default Cart