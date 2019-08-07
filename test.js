const path = require("path");



console.log(path.join(__dirname, '../333'));
console.log(path.resolve('a/b', 'c'));
console.log(path.resolve('a/b', 'c', '/k'));
console.log(path.resolve('a/b/c', '../m'));