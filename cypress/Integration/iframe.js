describe('iFrame', () => {
    it('iframe testing', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.iframeloaded('#courses-iframe').contains("learning-path").click();

    });
});