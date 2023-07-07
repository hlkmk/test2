'use strict';

// Function 프로그램을 구성하는 빌딩 블럭
// - fundamental buliding block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration 
// function name(param1, param2) {body... return;}
// one function === one thing (하나의 함수는 한가지의 일만 하도록..)
// naming: doSomething, command, verb (동사 형태로 이름 지정)
// e.g. createCardAndPoint -> createCard, createPoint (세분화하여 나누기)
// function is object in JS (function은 오브젝트로 간주)

function printHello(){
    console.log('Hello');
}
printHello();

function log(massage){
    console.log(massage);
}
log('Hello@');
log(1234);


// 2. Parameters
// premitive parameters : passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // from = 'unknown' 파라미터가 전달되지 않을때 나올 값 설정
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i <args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(`of: ${arg}`);
    }

    args.forEach((arg) => console.log(`forEach: ${arg}`));
}
printAll('dream', 'coder', 'ellie');


// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //에러밣생.
}
printMessage();


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${1, 2}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    }
}

// good
function upgradeUser(user) {
    // 조건에 안맞을때 미리 리턴
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic ...
}


// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other function.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
// 함수 선언전 호출 가능
const print = function() { // anonymous function(이름없는 함수)
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum; // sum: 위에서 만든 함수
console.log(sumAgain(1,3));


// 2. Callback function using function expression
// 파라미터로 함수를 전달
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
// 디버깅할때 함수이름이 나오도록...
const printNo = function print() {
    console.log('no!');
    // print(); // 함수 안에서 자신 스스로를 부르도록...무한대 호출
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
// 한줄일 경우
const add = (a, b) => a + b;
console.log(add(1,5));

// 여러줄일경우 블럭사용.. 값은 리턴시켜줘야 함
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};
console.log(simpleMultiply(2,3));


// IIFE : Immediately Invoked Function Expression
// 함수를 ()로 묶어 바로 호출
(function hello() {
    console.log('IIFE');
})();



// Fun quiz time
// function calculate (command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add' :
            return a + b;
        case 'substract' :
            return a - b;
        case 'divide' :
            return a / b;
        case 'multiply' :
            return a * b;
        case 'remainder' :
            return a % b;
        
        default:
            throw Error('unkonwn command!');
    }
}
console.log(calculate('divide',1,2));