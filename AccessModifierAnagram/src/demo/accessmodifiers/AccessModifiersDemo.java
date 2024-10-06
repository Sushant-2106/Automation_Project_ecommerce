// File: AccessModifiersDemo.java
// Package: demo.accessmodifiers

package demo.accessmodifiers;

public class AccessModifiersDemo {

    // Public variable and method - accessible from any class
    public String publicVar = "Public Variable";
    public void publicMethod() {
        System.out.println("Public Method: Accessible from any class.");
    }

    // Private variable and method - accessible only within this class
    private String privateVar = "Private Variable";
    private void privateMethod() {
        System.out.println("Private Method: Accessible only within this class.");
    }

    // Protected variable and method - accessible within the same package and subclasses
    protected String protectedVar = "Protected Variable";
    protected void protectedMethod() {
        System.out.println("Protected Method: Accessible within package and subclasses.");
    }

    // Default (package-private) variable and method - accessible only within the same package
    String defaultVar = "Default Variable";
    void defaultMethod() {
        System.out.println("Default Method: Accessible only within the same package.");
    }

    // Method to demonstrate access to private members within the class
    public void accessPrivateWithinClass() {
        System.out.println("Accessing private within class: " + privateVar);
        privateMethod();
    }
}
