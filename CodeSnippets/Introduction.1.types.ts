// Typing Basics

// There are 3 basic types in TypeScript
// Primitive Types - Number, Boolean, String

// Object Types - Classes, Modules, Interfaces

var isDone: boolean = false;
var lines: number = 42;
var lastName: string = "Anders";
lines='';

// // Types are used during editing and compiling No type information in resulting JavaScript code
// // Contextual Typing - Determine result type from expressions automatically
//// But you can omit the type annotation if the variables are derived from explicit literals
var isDone = false;
var lines = 42;
var firstName = "Anders";

// Any
// When it's impossible to know, there is the "Any" type
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 

// Use const keyword for constant variables
const numLivesForCat = 9;
numLivesForCat = 1; // Error

// For collections, there are typed arrays and generic arrays
var list: number[] = [1, 2, 3];
// Alternatively, using the generic array type
var list: Array<number> = [1, 2, 3];

// For enumerations:
enum Color { Red, Green, Blue };
var c: Color = Color.Blue;

// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert(): void {
  alert("I'm a little annoying box!");
}


