// Functions are first class citizens, support the lambda "fat arrow" syntax and use type inference

// The following are equivalent, the same signature will be infered by the compiler, and same JavaScript will be emitted

var f1 = function (i: number): number { return i * i; }

// Return type inferred
var f2 = function (i: number) { return ''; }

// "Fat arrow" syntax
var f3 = (i: number): number => { return i * i; }

// "Fat arrow" syntax with return type inferred
var f4 = (i: number) => { return i * i; }

// "Fat arrow" syntax with return type inferred, braceless means no return keyword needed
var f5 = (i: number) => i * i;
