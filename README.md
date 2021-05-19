# Eternal JSON TOOL
This NPM Module is used to provide storage for small time projects. It is a tool that helps to use JSON files as a way of storage, so that you do not have to set up the process of a high time database for smaller projects such as MongoDB. 
Just noting that it simulates a NoSQL database System rather than a SQL Database System.
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
   data.update('my_database', data); 
```
5. More Syntax will be created soon! This is just a project under development, so hopefully you will start using these 3 methods :)

6. Created by Sidharth Ponram. Check out my profile on GitHub!

