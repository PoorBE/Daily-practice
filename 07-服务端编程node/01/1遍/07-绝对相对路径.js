const fs = require('fs');
const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, '01-nodejs.js'));

fs.readFile(path.join(__dirname, '01-nodejs.js'), 'utf8', (err, doc) => {
    console.log(err);
    console.log(doc);

})