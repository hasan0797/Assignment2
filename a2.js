/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mahbubul Hasan Student ID: 161258215 Date: Feb 4, 2023
*
********************************************************************************/

var execute = require("./modules/collegeData.js");

execute.initialize().then(function (initresolve) {
    execute.getAllStudents().then(allstudents => console.log(`Successfully retrieved ${allstudents.length} students`)).catch(err => console.log(err));

    execute.getTAs().then(alltas => console.log(`Successfully retrieved ${alltas.length} TAs`)).catch(err => console.log(err));

    execute.getCourses().then(allcourses => console.log(`Successfully retrieved ${allcourses.length} courses`)).catch(err => console.log(err));
}).catch(function (err) {
    console.log(err);
})

