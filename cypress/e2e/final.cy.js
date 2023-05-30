import LoginPage from "../integration/PageObject/Loginpage";
import Cart from "../integration/PageObject/Cart";
import Validate from "../integration/PageObject/Validate";
import SignOut from "../integration/PageObject/SignOut";

describe('Web automation Demo-1', function(){
    it('Login with credentials', function() {
        const login = new LoginPage();
        login.navigate();
        login.profile();
        login.enterEmail('practice123student@gmail.com');
        login.enterPassword('Student@123');
        login.signInSubmit();  //logging in

        const vali = new Validate();
        vali.userValidation();  //validating the user
        
        const cart = new Cart();
        cart.searchProduct('Aloe Vera');
        cart.clickProduct();
        cart.increaseQuantity();
        cart.addToCart();  //adding the item to the cart

        let a = cy.get(3).toString();
        let b = cy.get("span.product-thumbnail__quantity").toString();
        vali.cartValidation(a,b);  //validating the cart quantity

        const sOut = new SignOut();
        sOut.signout();  //signing out

        vali.signoutValidation();  //validating sign out
    
    }) //it block
}) //describe block

    
