// import LoginPage from "../PageObject/Loginpage"
// import Cart from "../PageObject/Cart";
// import SignOut from "../PageObject/SignOut";
// import Validate from "../PageObject/Validate";

// const login = new LoginPage();
// const cart = new Cart();
// const vali = new Validate();
// const sOut = new SignOut();  //creating object

// //logging in

// Given('I navigate to the website', () => {
//     login.navigate();
// })
// And('I click on user login button', () => {
//     login.profile();
// })
// And('I type valid username and password', () => {
//     login.enterEmail();
//     login.enterPassword();
// })
// And('I click Sign In button', () => {
//     login.signInSubmit();
// })
// Then('I validate the username', () => {
//     vali.userValidation();   //validating the username
// })

// //Cart operations

// Given('I search for the product', () => {
//     cart.searchProduct('Aloe Vera');
// })
// And('I click the product', () => {
//     cart.clickProduct();
//     cy.wait(8000);
// })
// And('I increase the count by 2', () => {
//     cart.increaseQuantity();
// })
// And('I add the item to cart', () => {
//     cart.addToCart();
// })
// Then('I validate the cart count', () => {
//     let a = cy.get(3).toString();
//     let b = cy.get("span.product-thumbnail__quantity").toString();
//     vali.cartValidation(a, b);   //validating the cart count
// })

// //signing out

// Then('I sign out', () => {
//     sOut.signout();
// })
// Then('I validate whether the user is signed out', () => {
//     vali.signoutValidation();  //validating the user is signed out
// })



//API TESTING
import ApiMethod from "../PageObject/ApiMethod";

const api = new ApiMethod();

Given('First I am creating a new user using POST method', () => {
    api.postMethod();  //POST
})
Then('I am fetching that user usin GET method', () => {
    api.getMethod();  //GET
})
And('I am updating that fetched user using PUT method', () => {
    api.putMethod();  //PUT
})
And('I am deleting that user using DELETE method', () => {
    api.deleteMethod();  //DELETE
})
