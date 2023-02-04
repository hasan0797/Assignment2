const fs = require("fs");
class Data {
    constructor(studentdata, coursesdata) {
        this.students = studentdata;
        this.courses = coursesdata;
    }
}
let dataCollection = null;

module.exports.initialize = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/courses.json', 'utf8', (err, coursesdata) => {
            if (err) {
                reject("Error while fetching Courses"); return;
            }

            fs.readFile('./data/students.json', 'utf8', (err, studentsdata) => {

                if (err) {
                    reject("Error while fetching Students"); return;
                }
                dataCollection = new Data(JSON.parse(studentsdata), JSON.parse(coursesdata));
                resolve("Students and courses fetched");
            });

        });

    });
}

module.exports.getAllStudents = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length <= 0) {
            reject("No student found");
        }
        resolve(dataCollection.students)
    })
}


module.exports.getTAs = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length <= 0) {
            reject("No student found");
        }
        const tas = dataCollection.students.filter((student) => {
            return student.TA;
        })
        resolve(tas);
    })
}


module.exports.getCourses = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length <= 0) {
            reject("No courses found");
        }
        resolve(dataCollection.courses)
    })
}







