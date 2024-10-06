import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import { RegisterPage } from '../PageClasses/RegisterPage';

// Steps to navigate the contact us page.
Given ('We need to be at the automationexcersiecom website and then select the contact us option',()=>{
    cy.visit('https://automationexercise.com/contact_us')
})

// Submitting the details required to submit the form
When ('Fill the details like Name, Email, subject and message',()=>{

    cy.get('[placeholder="Name"]').type('Sushant Mishra');
    cy.get('[name="email"]').type('sushantmishra2110@gmail.com');
    cy.get('[placeholder="Subject"]').type('I need some assistance');
    cy.get('[placeholder="Your Message Here"]').type('Assist me with the query I have');
})
And ('Submit the form',()=>{
    cy.get('[value="Submit"]').click();
})
Then ('We will get the confirmation messsage',()=>{
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
})export default RegisterPage;

