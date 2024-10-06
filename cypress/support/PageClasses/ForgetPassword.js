class ForgetPassword {

    // Method to navigate to the Forget Password page
    ForgetPassword() {
        cy.get('.caret').click();
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/forgotten"])[1]').click();
        cy.get('#input-email').type('sushantmishra2110@gmail.com');
        cy.get('[type="submit"]').click();
    }

    // Negative Test: Invalid Email format in Forget Password
    NT_ForgetPassword_InvalidEmailFormat() {
        cy.get('.caret').click();
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/forgotten"])[1]').click();
        cy.get('#input-email').type('invalid-email'); // Invalid email format
        cy.get('[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
            .should('have.text', 'Warning: Please enter a valid email address.'); // Change this text based on actual warning
    }
}

export default ForgetPassword;