class LoginPage {

    // Method to navigate to the Login page from My Account
    Login_in_my_account() {
        cy.xpath('//span[@class="caret"]').click();
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
    }

    // Negative Test: Invalid Email format
    NT_Login_Credentials1() {
        cy.get('[placeholder="E-Mail Address"]').type('sushant');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
            .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test: Incorrect Email
    NT_Login_Credentials2() {
        cy.get('[placeholder="E-Mail Address"]').type('sushant@gmail.com');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
            .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test: Incorrect Password
    NT_Login_Credentials3() {
        cy.get('[placeholder="E-Mail Address"]').type('sushantmishra2110@gmail.com');
        cy.get('[placeholder="Password"]').type('wrongpassword');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
            .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test: Invalid Email and Empty Password
    NT_Login_Credentials4() {
        cy.get('[placeholder="E-Mail Address"]').type('sushantmishra211@gmail.com');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace}');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
            .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test: Empty Email and Valid Password
    NT_Login_Credentials5() {
        cy.get('[placeholder="E-Mail Address"]').type('{selectall}{backspace}');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
            .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // Positive Test: Valid login credentials
    PT_Login_Credentials_accept() {
        cy.get('[placeholder="E-Mail Address"]').type('sushantmishrabdnsjksfdfgbesdgmbfkFGHsfgfd2110@gmail.com');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('input[type="submit"]').click();
    }
}

export default LoginPage;