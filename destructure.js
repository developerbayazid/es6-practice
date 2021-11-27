const employee = {name : 'Jason Holder', age : 22, country : 'WI', nationality : 'Carribian', position : 'captain'};
const { name, age, country } = employee;
console.log(name, age, country);

const studentInfo = {
    name : 'M Rahim',
    info : {
        age : 33,
        role : 'WK'
    }
}
const {role} = studentInfo.info;
console.log(role);

const studentAge = [22, 21, 12, 14, 16, 10, 19];

const [student1, student2, ...allStudents] = studentAge;

console.log(student1, student2);
console.log(allStudents);