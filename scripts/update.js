const fs = require('fs'); 

const update = (a,obj, callback) => { 
    obj = JSON.stringify(obj);      
   fs.writeFile(`data/${a}.json`,obj, err => { 
         if (callback && typeof callback === 'function') { 
             callback(); 
         }
   })
}
 
   module.exports = update; 