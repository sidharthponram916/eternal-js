const fs = require('fs'); 

const read = (a,callback) => { 
    if (callback && typeof callback === 'function') { 
        callback(); 
    }
 try { 
     return JSON.parse(fs.readFileSync(`data/${a}.json`, {encoding: 'utf8', flag: 'r'})); 
 }
 catch (err) { 
     if (err.code === 'ENOENT') {
            console.log('File not found!');
       }
     else {
            throw err;
       }
   }
}

   module.exports = read; 