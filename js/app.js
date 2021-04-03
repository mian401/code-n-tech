const fs = require('fs');

let content = fs.readFileSync("/test.txt");

document.getElementById("test").innerHTML = content;

console.log(content);