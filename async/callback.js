'use strict';

// JavaScript is synchronous(순서대로 실행). 
// Execute the block by orger after hoisting
// hoisting: ver, function declaration

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// synchronous callback
function printImmediately(print) {
    print();
}
printImmediately( () => console.log('hello') );


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay( () => console.log('Async callback'), 2000);


// callback hell example
// 가독성 떨어짐. 에러, 디버깅 어려움. 유지보수 어려움
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout( () => {
            if (user) {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}. you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)

    }
);