var path = require("path"); //imports path module, returns object that represents the JS API exposed by the module
console.log(`Full path: ${__filename} and filename is ${path.basename(__filename)}`);