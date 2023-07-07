'use strict';

// Object-oriendted programming
// class: template 
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical suger over prototype-based ingeritance


// 1. Class declarations
class Person {
    // constructor (생성자)
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setter
// 사용자가 잘못된 값을 입력해도 방어적 자세로 만들수 있는게 겟터 셋터

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.age -> get age()
        // = age -> set set(value)
    }

    get age() {
        return this._age;
        // 무한반복 막기위해 age -> _age 변수이름 변경
        
    }
    set age(value) { //값 설정하기 때문에 벨류 받아와야함
        // if(value < 0) {
        //     throw Error('age can not be negative'); //겅고
        // }
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);


// 3.Fields (public, private)
// Too soon! 사파리 지원 X 
// 사용하려면 babel 이용
class Experiment {
    publicField = 2; //외부접근가능
    #privateField = 0; // 프라이빗. 클래스 내부에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5.Injeritance 상속, 재사용
// a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color !`);
    }
    
    getArea() {
        return this.width * this.height;
    }
}

// extends 연장
class Rectangle extends Shape {}
class Triangle extends Shape {
    // 필요함수만 재정의. 오버라이딩해서 작성
    draw() {
        // 재정의 했을경우 원래 부모 함수 호출
        super.draw();

        console.log(`세모`);
    }
    getArea() {
        return this.width * this.height / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
// 왼쪽 오브젝트가 오른쪽 클래스로 만들어진 오브젝트인지 비교
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); //모든 클래스는 자바스크립트 오브젝트 상속
console.log(triangle.toString());

