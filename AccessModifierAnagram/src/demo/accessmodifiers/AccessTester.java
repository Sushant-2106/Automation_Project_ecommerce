// File: AccessTester.java
// Package: demo.accessmodifiers

package demo.accessmodifiers;

public class AccessTester {

    public static void main(String[] args) {
        AccessModifiersDemo obj = new AccessModifiersDemo();

        // Accessing public members - works without any restrictions
        System.out.println("Public Variable: " + obj.publicVar);
        obj.publicMethod();

        // Accessing protected members - allowed within the same package
        System.out.println("Protected Variable: " + obj.protectedVar);
        obj.protectedMethod();

        // Accessing default members - allowed within the same package
        System.out.println("Default Variable: " + obj.defaultVar);
        obj.defaultMethod();

        // Trying to access private members - this will cause a compilation error if uncommented
        // System.out.println("Private Variable: " + obj.privateVar); // Error
        // obj.privateMethod(); // Error
    }
}
