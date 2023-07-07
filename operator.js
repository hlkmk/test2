'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie's \n\tbook");


// 2. Numeric operators(연산자)
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators(연산자)
let counter = 2;
const preIncrement = ++counter; //업뎃후 할당
// counter = counter + 1;
// preIncrement = conter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // 할당 후 없뎃
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preIncrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postIncrement}, counter: ${counter}`);


// 4. Assignment(할당) operators(연산자)
let x = 3;
let y = 6;
x += y // x = x + y
x -= y 
x *= y 
x /= y 

// 5. Comparison(비교) operators(연산자)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 3중 하나라도 true면 ture 출력
// 첫 ture 나올시 멈춤
// 무거운 함수호출 아이템을 마지막에 배치하는게 효율적

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);
// false를 만나면 이후 실행 멈춤
// 무거운 함수호출 아이템을 마지막에 배치하는게 효율적

// often used to compress long if-statement
// nullableObject && nullableObject.something
// null체크시 사용
// if( nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for (let i=0; i<10; i++){
        // wasting time
        console.log('😱');
    }
    return true;
}

// ! (not) 값을 반대로 바꿔줌
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입달라도됨
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입같아야함
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
console.log('object equality');
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건 맞을때만 실행
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first
// then check the condition.
// 먼저 블럭 먼저 실행 후 조건 검색
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(befin; condition; step)
for (let i = 3; i > 0; i--){
    console.log(`for ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    // inline varible declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        // console.log(`i: ${i}, j: ${j}`);
    }
}

// break(멈춤), continue(건너뛰기)
// Q1. iterate from 0 to 10 and print only even numbers
for(let i=0; i <= 10; i++ ){
    // 연습용
    if(i % 2 !== 0){
        continue;
    }
    console.log(`Q1: ${i}`);

    // 효율적
    // if(i % 2 === 0){
    //     console.log(i)
    // }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i=0; i <= 10; i++ ){
    if(i > 8){
        break;
    }
    console.log(`Q2: ${i}`);
}