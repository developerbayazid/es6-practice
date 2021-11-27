const doubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const numberDiff = (x, y) => {
    const num1 = x;
    const num2 = y;
    const addition = num1 + num2;
    const diff = num1 - 5;
    const result = addition * diff;
    return result;
}

const result = doubleIt(5);
const result2 = add(23, 23);
const result3 = give5();
const result4 = numberDiff(12, 5);


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);