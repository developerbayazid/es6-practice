const classSeven = [12, 14, 15, 17, 20];
const classEight = [22, 21, 14, 18];
const classTen = [22, 25, 26, 27, 28];

// const allStudents = classTen.concat(classEight).concat(5).concat(classEight);
const allStudents = [...classSeven, ...classEight, ...classTen];

console.log(allStudents);


const richer = [120, 340, 450, 320, 990];
const richerMan = Math.max(...richer);

console.log(richerMan);