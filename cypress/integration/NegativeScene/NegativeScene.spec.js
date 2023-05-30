import LoginPage from "../PageObject/Loginpage";
import Validate from "../PageObject/Validate";
import Negative from "../PageObject/negative";

const neg = new LoginPage();
const neg2 = new Negative();
const negScene = new Validate();

Given('I navigate to the website', () => {
    neg.navigate();
})
And('I click on user login icon', () => {
    neg.profile();
})
And('I provide wrong email id', () => {
    neg2.wrongEmail();
})
And('I provide password', () => {
    neg2.wrongPassword();
})
Then('I click Sign In', () => {
    neg.signInSubmit();   //validating the username
})
Then('I validate the username', () => {
    negScene.negativeValidation();
})
