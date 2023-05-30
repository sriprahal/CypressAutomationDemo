import LoginPage from "../integration/PageObject/Loginpage";
import Validate from "../integration/PageObject/Validate";

describe('Negative scenario', () => {
    it('login negative scenario', () => {
        const neg = new LoginPage();
        neg.navigate();
        neg.profile();
        neg.enterEmail('srihari@gmail.com');
        neg.enterPassword('Student@123');
        neg.signInSubmit();

        const negScene = new Validate();
        negScene.negativeValidation();
    })
})