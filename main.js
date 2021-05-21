const fs = require('fs'); 
const package = { 
    create: (a,s, callback) => { 
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
    }, 
   read: (a,callback) => { 
       if (callback && typeof callback === 'function') { 
           callback(); 
       }
    try { 
        return JSON.parse(fs.readFileSync(`data/${a}.json`, {encoding: 'utf8', flag: 'r'})); 
    }
    catch (err) { 
        if (err.code === 'ENOENT') {
               console.log('File not found!');
          } else {
               throw err;
          }
    }
   }, 
   update: (a,obj, callback) => { 
         obj = JSON.stringify(obj);      
        fs.writeFile(`data/${a}.json`,obj, err => { 
              if (callback && typeof callback === 'function') { 
                  callback(); 
              }
        })
   }
}
module.exports = package; 