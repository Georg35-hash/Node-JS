const fs = require('fs')

const filePath = "info.txt";
const data1 = "Hello, world!";

fs.writeFile(filePath, data1, (err) => {
    if(!err){
        console.log('Vse ok');
        fs.readFile(filePath, 'utf8', (err) => {
            if(err){
                console.error('Error', err)
            }
            else{
                console.log(data1);
            }
        })
    }
    else{
        console.log('Error', err);
    }
});