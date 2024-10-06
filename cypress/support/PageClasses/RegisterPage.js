class RegisterPage {

    // Method to visit the URL
    EnterURL() {
        cy.visit('https://tutorialsninja.com/demo/');
    }

    // Method to navigate to the Register page from My Account
    RegisterLink_in_my_account() {
        cy.get('.caret').click();
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();
    }

    // Method for clicking Continue button
    Clicking_on_Continue() {
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/account"])[4]').click();
    }

    // Negative Test: Unchecked Privacy Policy
    NT_RegisterPage1() {
        cy.get('[placeholder="First Name"]').type('Sushant');
        cy.get('[placeholder="Last Name"]').type('Mishra');
        cy.get('[placeholder="E-Mail"]').type('sushantmishra10@gmail.com');
        cy.get('[placeholder="Telephone"]').type('8240196250');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('sushant2110');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();

        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text', 'Warning: You must agree to the Privacy Policy!');
    }

    // Negative Test: Invalid E-Mail
    NT_RegisterPage2() {
        cy.get('[placeholder="First Name"]').type('Sushant');
        cy.get('[placeholder="Last Name"]').type('Mishra');
        cy.get('[placeholder="E-Mail"]').type('{selectall}{backspace}');
        cy.get('[placeholder="Telephone"]').type('8240196250');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('sushant2110');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'E-Mail Address does not appear to be valid!');
        cy.screenshot();
    }

    // Negative Test: Mismatch in Password Confirmation
    NT_RegisterPage3() {
        cy.get('[placeholder="First Name"]').type('Sushant');
        cy.get('[placeholder="Last Name"]').type('Mishra');
        cy.get('[placeholder="E-Mail"]').type('sushantmishra2110@gmail.com');
        cy.get('[placeholder="Telephone"]').type('8240196250');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('wrongpassword');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'Password confirmation does not match password!');
        cy.screenshot();
    }

    // Negative Test: Empty First Name
    NT_RegisterPage4() {
        cy.get('[placeholder="First Name"]').type('{selectall}{backspace}');
        cy.get('[placeholder="Last Name"]').type('Mishra');
        cy.get('[placeholder="E-Mail"]').type('sushantmishra2110@gmail.com');
        cy.get('[placeholder="Telephone"]').type('8240196250');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('sushant2110');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'First Name must be between 1 and 32 characters!');
        cy.screenshot();
    }

    // Negative Test: Empty Last Name
    NT_RegisterPage5() {
        cy.get('[placeholder="First Name"]').type('Sushant');
        cy.get('[placeholder="Last Name"]').type('{selectall}{backspace}');
        cy.get('[placeholder="E-Mail"]').type('sushantmishra2110@gmail.com');
        cy.get('[placeholder="Telephone"]').type('8240196250');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('sushant2110');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'Last Name must be between 1 and 32 characters!');
        cy.screenshot();
    }

    // Negative Test: Empty Password
    NT_RegisterPage6() {
        cy.get('[placeholder="First Name"]').type('Sushant');
        cy.get('[placeholder="Last Name"]').type('Mishra');
        cy.get('[placeholder="E-Mail"]').type('sushantmishra2110@gmail.com');
        cy.get('[placeholder="Telephone"]').type('{selectall}{backspace}');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('sushant2110');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'Telephone must be between 3 and 32 characters!');
        cy.screenshot();
    }

    // Positive Test: Successful registration with valid data
    PT_RegisterPage1() {
        cy.get('[placeholder="First Name"]').type('Sushant');
        cy.get('[placeholder="Last Name"]').type('Mishra');
        cy.get('[placeholder="E-Mail"]').type('sushantmishrabdnsjksfdfgbesvvhdnnffjnfgbbjmbfkFGHsfgfd2110@gmail.com');
        cy.get('[placeholder="Telephone"]').type('8240196250');
        cy.get('[placeholder="Password"]').type('sushant2110');
        cy.get('[placeholder="Password Confirm"]').type('sushant2110');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
    }
}

export default RegisterPage;