'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // Symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // 함수포함 X

// 원하는 프로퍼티만 정의해서 변환
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


console.clear();
// 2. JSON to Object
// parse(obj)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
    // birthDate가 스트링이므로 콜백함수로 변환
});
console.log(obj);
rabbit.jump();
// obj.jump(); // json으로 변환시 함수가 사라짐. 재변환시에도 함수 없음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());