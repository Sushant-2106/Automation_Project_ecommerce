// File: SubClassTester.java
// Package: demo.subpackage

package demo.subpackage;

import demo.accessmodifiers.AccessModifiersDemo;

public class SubClassTester extends AccessModifiersDemo {

    public static void main(String[] args) {
        SubClassTester obj = new SubClassTester();

        // Accessing public members - accessible from any package
        System.out.println("Public Variable: " + obj.publicVar);
        obj.publicMethod();

        // Accessing protected members - accessible due to inheritance (even in a different package)
        System.out.println("Protected Variable: " + obj.protectedVar);
        obj.protectedMethod();

        // Default and private members are not accessible from a different package
        // The following lines will cause compilation errors if uncommented
        // System.out.println(obj.defaultVar);   // Error: Default member not accessible in a different package
        // obj.defaultMethod();                 // Error: Default method not accessible in a different package
        // System.out.println(obj.privateVar);  // Error: Private member not accessible outside the class
        // obj.privateMethod();                 // Error: Private method not accessible outside the class
    }
}
