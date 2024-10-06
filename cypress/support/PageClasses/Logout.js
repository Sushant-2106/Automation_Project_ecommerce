class LogoutPage{

    LogoutFromApp(){
    
        cy.get('.caret').click();
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/logout"])[1]').click();
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=common/home"])[3]').click();
    }
    
    }
    export default LogoutPage