var counter = require('./counter');
console.log(counter.value);
counter.value++;
// Lets us require the module one more time
var counter1 = require('./counter');
console.log(counter.value);


// In the output, even though we require the module twice, the initialization logs only once
// Modules are cached the first time they are loaded.