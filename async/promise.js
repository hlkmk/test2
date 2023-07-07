'use strict';

// Promise is a JavaScript object for asynchronous operation
// state : pending ->  fulfilled or rejected
// producer vs consumer 


// 1. Producer 비동기
// 불필요한 네트워크 통신을 하는 경우가 있음
// 새로운 프로미스가 만들어질떄 전달한 executer 함수가 바로 실행됨
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some haavy work(network, read files)
    console.log('doing something...');
    setTimeout( () => {
        // resolve('ellie'); // 성공
        reject(new Error('no network')); // 실패
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => { //then : 정상적으로 실행되면 resolve 실행 후 전달
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { // 성공, 실패와 상관없이 무조건 실행
        console.log('finally');
    });


// 3. Promise chaining
const fetchNumber = new Promise( (resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
fetchNumber
.then(num => num * 2) // 값 전달이나 promise 전달
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout( () => resolve('🐓'),1000);
    });
    const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout( () => resolve(`${hen} => 🥚`),1000);
        setTimeout( () => reject(`new Error${hen} => 🥚`),1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout( () => resolve(`${egg} => 🍳`),1000);
    });

getHen()
    // .then( hen => getEgg(hen)) 
    .then(getEgg)//한가지 받아서 그대로 전달할경우 생략 가능
    .catch(error => {
        return '🍞'; //실패시 전달
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
