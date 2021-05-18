const fetch = require('node-fetch'); 
const fs = require('fs'); 
const package = { 
    create: (a,s, callback) => { 
             let data = JSON.stringify(s); 
        fs.writeFile(`data/${a}.json` , data , err => { 
          if (err) throw err; 
          else { 
              callback(); 
          }
        }) 
    }, 
   read: (a,callback) => { 
       if (callback && typeof callback === 'function') { 
           callback(); 
       }
      let data = JSON.parse(fs.readFileSync(`data/${a}.json`, {encoding: 'utf8', flag: 'r'}))
         return data; 
   }, 
   write: (a,obj, callback) => { 
         obj = JSON.stringify(obj);      
        fs.writeFile(`data/${a}.json`,obj, err => { 
              if (callback && typeof callback === 'function') { 
                  callback(); 
              }
        })
   }
}
module.exports = package; 