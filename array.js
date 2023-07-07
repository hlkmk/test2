'use strict';

// Array 

// 1. Declaration 
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
// 🍊🍋🍉🍐🍏🍅🥭🍎
const fruits = ['🍅', '🍏'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]); //마지막 배열

console.clear();


// 3. Looping over an array
// print all fruits

// a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// fruits.forEach(function(fruit, index){
//     console.log(fruit, index);
// });
fruits.forEach((fruit) => console.log(fruit));



// 4. Addtion, deletion, copy
// push: add an item to the end
// 뒤에 추가
fruits.push('🍋','🍉');
console.log(fruits);
// pop: remove an item from the end
// 뒤부터 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
// 앞에 추가
fruits.unshift('🍋','🍉');
console.log(fruits);
// shift: remove an item from the benigging
// 앞부터 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

// noto!! shift, unshift are slower than pop, push.
// 기존 전체 데이터 위치가 변경되야 하기때문에 속도가 느림
// 배열이 길수록 느려짐
// 가능하면 pop, push 사용

console.clear();

// splice: remove an item by index position
fruits.push('🍉','🍐','🍏');
console.log(fruits);
// fruits.splice(1); // 지울갯수 말하지 않으면 지정한 인덱스부터 모든 데이터 지움
fruits.splice(1, 1); // 1개 삭제
console.log(fruits);
fruits.splice(1, 1, '🍊', '🍋'); // 삭제 후 추가 가능
// fruits.splice(1, 0, '🍊'); // 지울갯수 0이면 삭제없이 데이터 추가 가능
console.log(fruits);


// combine two arrays
const fruits2 = ['🥥','🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍋'));
console.log(fruits.indexOf('🍊'));

// includes
console.log(fruits.includes('🍊')); //true
console.log(fruits.includes('🥥')); //false
console.log(fruits.indexOf('🥥')); //-1

// lastIndexOf
console.clear();
fruits.push('🍅');
console.log(fruits);
console.log(fruits.indexOf('🍅')); // 0: 제일처음 해당값을 만나면 그 값을 리턴
console.log(fruits.lastIndexOf('🍅')); //5: 마지막 해당값을 만나면 그 값을 리턴

let fruitsFill = fruits.fill(fruits);
console.log(fruitsFill);
