const fs = require('fs');

//read files
fs.readFile('./docs/blog1.text', (err, data) =>{
    if(err) {
        console.log(err);
    }
    console.log(data);
});
console.log('last line');