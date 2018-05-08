// Load from current module path

var Square = require('./square'); //use relative path since importing local module

// Since the module exports a constructor function we
// have to create an instance before using.

var square = new Square(5);

console.log(square.area());