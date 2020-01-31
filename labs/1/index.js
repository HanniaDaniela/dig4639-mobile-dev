const Adder = require("./Adder.js");

let bts = new Adder({
    a: 5,
    b: 10
});

bts.sum();

console.log(bts.render());