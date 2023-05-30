class SignOut{
    signout() {
        cy.xpath("//a[normalize-space()='Log out']").click();
        return this
    }
}
export default SignOut