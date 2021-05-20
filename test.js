const eternal = require('./eternal')

let data = eternal.read('data'); 
if (data === undefined) { 
    console.log('The data isnt defined!')
}