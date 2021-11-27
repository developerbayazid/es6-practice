class Parent{
    constructor(){
        this.fatherName = 'Sachin Tendulkar';
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.childName = name;
    }
    fullName(){
        return this.fatherName + " Father of " + this.childName;
    }
}

const baby1 = new Child('Arjun Tendulkar');

console.log(baby1.fullName());