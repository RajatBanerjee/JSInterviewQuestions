#functions that take other functions as arguments are called higher order functions

#https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

#https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

#Declarative vs Imperative
Functional programming is a declarative paradigm, meaning that the program logic is expressed without explicitly describing the flow control.

Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.

Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.


For example, this imperative mapping takes an array of numbers and returns a new array with each number multiplied by 2:


Imperative data mapping
This declarative mapping does the same thing, but abstracts the flow control away using the functional Array.prototype.map() utility, which allows you to more clearly express the flow of data:

