// 1. Use strict
// added in ES 5
// use this for valina Javascript.
'use strict';

// 2. variable rw (read / write)
// let (added in ES6)


let name = 'ellie';
console.log (name);

name = 'hello';
console.log (name);

// var 사용X
// var hoistion (어디에 선언했는지에 상관없이 항상 제일 위로 선언을 끌어올림)
// 블럭 스콥을 철처히 무시.. 규모있는 프로젝트에서 문제가 생김. 위험 부담

// bable 이용해 ES6 지원 안하는 브라우저용으로 변환 가능


// 3. constants r (read only)
// const 는 선언 후 값 변경X
// 변수가 바뀔 이유가 없다면 const 사용

// Note!
// Immutable data types(데이터 자체를 변경X) : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types(변경가능 데이터): all objects by default are mutable in JS

// faver immutable data type always for a reasons
// - security
// - thread safety (동시에 값이 변경될 경우 위험함)
// - reduce human mistakes

const daysInWeek = '8';
const maxNumber = '8';


// 4. Variable types
// primitive, single ClipboardItem, number, string, boolean, null, undefined, symbol
// Object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // deciamal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values : infinity, -infinity, nAn
const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 숫자 끝에 n 추가하면 bigInt (크롬,파폭만 인식)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**3)
console.log(`value": ${bigInt}, type: ${typeof bigInt}`);

// string
// 키보드 물결 모양에 있는 백틱 기호 `value: ${greeting}`
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean {참, 거짓}
// false: 0, null, undefined, NaN, ''
// true: any other values
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null (명확히 비어있음을 지정)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (선언은 되었지만 값이 지정되지 않음)
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol. create unique identifiers for objects
// 고유한 식별자. 동일한 심볼을 만들어도 다르게 인식
// 스티링이 같을 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 바로 출력시 에러. 스트링으로 변환 후 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;

// 5.dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));
// 타입으로 인한 에러