const fs = require('fs'); 

const create = (a,s, callback) => { 
    let data = JSON.stringify(s); 
fs.writeFile(`data/${a}.json` , data , err => { 
if (err) { 
     console.log(err); 
     return null; 
}
 else { 
        if (callback && typeof callback === 'function') { 
            callback(); 
         }
     }
   }) 
 }
 module.exports = create; 