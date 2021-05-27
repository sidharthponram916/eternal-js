const fs = require('fs'); 

const erase = (a,callback) => { 
     try { 
         fs.unlinkSync(`data/${a}.json`);
         if (callback && typeof callback === 'function') { 
             callback(); 
         }
     }
     catch (e) { 
         console.log(e); 
     }
}

module.exports = erase; 