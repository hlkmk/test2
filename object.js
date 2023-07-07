'use strict';

// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all object in JavaScript are instances of object
// object = { key : value }; 오브젝트는 키와 벨류의 집합체


// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);


// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 나중에 추가 가능. 가능하면 하지 말아야 함
console.log(ellie.hasJob);

delete ellie.hasJob; // 삭제
console.log(ellie.hasJob);


// 2. Computed properties
// key should be always string
// . 을  사용해서 출력하는것이 일반적인 방법
console.log(ellie.name);
console.log(ellie['name']); //배열로 받아오는 접근 가능. 스트링 타입으로 받아와야 함
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// Computed properties[] 정확히 어떤키를 받아올지 모를때 사용. 동적인 키 받아올떄 사용
function printValue(obj, key) {
    console.log(obj.key); //undefined
    // obj에 key라는 프로퍼티는 없음
    console.log(obj[key]); //ellie
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);


// 4. Contstructor function
// 오브젝트 생성 함수명은 대문자 시작
function Person(name, age) {
    // this = {}; //생략
    this.name = name;
    this.age = age;
    // return this; //생략
}

// 5. in operator: property existence check (key in obj)
// 키가 있는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for...in vs for...of
// for (key in obj)
console.clear(); //이전 로그 삭제
console.log(ellie);
for(const key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for(let value of array) {
    console.log(value);
}


//  7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user; //user와 같은 오브젝트를 바라봄
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.log(user3);


// const user4 = {}
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);


// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);