import RegisterPage from "../../support/PageClasses/RegisterPage";
import LogoutPage from "../../support/PageClasses/Logout";
import LoginPage from "../../support/PageClasses/LoginPage";
import ForgetPassword from "../../support/PageClasses/ForgetPassword";

// Creating the object of the class
describe('Tutorials Ninja', () => {
    
    const logoutObj = new LogoutPage();
    const loginObj = new LoginPage();
    const registerObj = new RegisterPage();
    const forgetPasswordObj = new ForgetPassword();
    
    // Calling the function of the class for registration tests
    it('RegisterPage - Negative test case by giving password and confirm password differently', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage2();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving First Name blank', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage3();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Last Name blank', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage4();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Email blank', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage5();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Telephone blank', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage6();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Password blank', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage1();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Confirm Password blank', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage1();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Checkbox unchecked', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage1();
        registerObj.Clicking_on_Continue();
    });

    it('RegisterPage - Negative test case by leaving Checkbox checked', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.NT_RegisterPage1();
        registerObj.Clicking_on_Continue();
    });
    
    // Calling the function of the class for login tests
    it('LoginPage - In email not putting "@gmail.com" and entering correct Password', () => {
        registerObj.EnterURL();
        loginObj.Login_in_my_account();
        loginObj.NT_Login_Credentials1();
    });
    
    it('LoginPage - Entering Wrong Email and Correct Password', () => {
        registerObj.EnterURL();
        loginObj.Login_in_my_account();
        loginObj.NT_Login_Credentials2();
    });
    
    it('LoginPage - Entering correct Email and wrong Password', () => {
        registerObj.EnterURL();
        loginObj.Login_in_my_account();
        loginObj.NT_Login_Credentials3();
    });
    
    it('LoginPage - Entering correct Email and leaving Password blank', () => {
        registerObj.EnterURL();
        loginObj.Login_in_my_account();
        loginObj.NT_Login_Credentials4();
    });

    it('LoginPage - Entering correct Password and leaving Email blank', () => {
        registerObj.EnterURL();
        loginObj.Login_in_my_account();
        loginObj.NT_Login_Credentials5();
    });

    // Calling the function of the class for successful registration and login
    it('RegisterPage - Positive Test Case With Right Credentials', () => {
        registerObj.EnterURL();
        registerObj.RegisterLink_in_my_account();
        registerObj.PT_RegisterPage1();
        registerObj.Clicking_on_Continue();
        logoutObj.LogoutFromApp();
        loginObj.Login_in_my_account();
        loginObj.PT_Login_Credentials_accept();
        logoutObj.LogoutFromApp();
        forgetPasswordObj.ForgetPassword();

    });

});