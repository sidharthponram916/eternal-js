# Eternal.js: The ideal tool for JSON. 

Eternal.js makes it easy to do CRUD operations on JSON files. Just make the data folder, and use the functions. It is as simple as that. 

Example: 
```
{  
    name: `Smith`, 
    age: 59, 
    job: `Politician`, 
}
```
# Setup Guide

1. Install the Eternal Tool
``` 
     npm install eternal-js
```
2. Create a data folder. Eternal-js detects a procfile to store your json files. Name your folder "data". 

3. Create your First Eternal JSON data
```
   eternal.create('my_database', { 
        name: `Doge`, 
        age: 25, 
        grade: 2, 
   }, () => console.log('Data Printed!'));
```
4. Want some more commands? Here is some syntax for remaining functions! 
```
//returns the data as it is from the json file. 
   let data = eternal.read('my_database'); 
   console.log(data); 
//
```
```
// Want to update your data? Here is some syntax!
   let data = eternal.read('my_database'); 
         data.name = `George` 
         data.age = 49
         data.grade = 9
   eternal.update('my_database', data); 
```
```
   //deleting your data is a breeze with the delete() method 
      eternal.delete('my_database', () => { 
           console.log('Data Deleted!')
      })
```
5. I will update this project somewhat regularly. In the meantime, spread word about this npm package, and KEEP USING IT! IF you find it useful that is :). 

6. Created by Sidharth Ponram. Check out my profile on GitHub! @sidharthponram916

