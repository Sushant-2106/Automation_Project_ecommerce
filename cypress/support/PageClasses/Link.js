class Link{

ClickOnLink(linktext){
    cy.contains(linktext).click();
}
}
export default Link