'use strict';

// callback hell example
// 가독성 떨어짐. 에러, 디버깅 어려움. 유지보수 어려움
class UserStorage {
    loginUser(id, password) {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (user) {
                    resolve({ name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            },1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`hello ${user.name}. you have a ${user.role} role`))
.catch(console.log);