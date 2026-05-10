const lodash = require("lodash");

const array = ["surya", "john", "jane", "doe"];
const capitalizedArray = lodash.map(array, lodash.capitalize);
console.log(capitalizedArray);
