const fs = require('fs')
require('dotenv').config()

const text = 'init.txt'
fs.writeFile(text, process.env.FILENAME,  (err)=>{
    if(!err){
        console.log('File created');
        
    }
    else{
        console.log(err);
        
    }
    
})