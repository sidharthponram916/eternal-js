const fs = require('fs'); 
const create = require('./scripts/create'); 
const read = require('./scripts/read');
const update = require('./scripts/update');  
const package = { 
    create: create, 
   read: read, 
   update: update,  
}
module.exports = package; 