class Student{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = "LimePasha High School";
    }
}

const student1 = new Student(33, 'Bayazid Hasan', 22);
const student2 = new Student(34, 'M Rahim', 21);
const student3 = new Student(35, 'M Riyad', 25);

console.log(`
Student Id: ${student1.id} Student Name: ${student1.name} Student Age: ${student1.age} School: ${student1.school}
Student Id: ${student2.id} Student Name: ${student2.name} Student Age: ${student2.age} School: ${student2.school}
Student Id: ${student3.id} Student Name: ${student3.name} Student Age: ${student2.age} School: ${student2.school}
`);