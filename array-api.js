// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // for(const key in fruits) {
    //     console.log(fruits[key]);
    // }
    // const result = fruits.join();
    const result = fruits.join('/');
    console.log(result);
}

// Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒';
    
    // const result2 = Array.of(fruits)
    // const result2 = fruits.split(','); // 구분자로 나눔
    const result = fruits.split(',', 2);
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 배열 자체가 변함
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.slice(2);
    const result = array.slice(2, 5); // 마지막 인덱스는 배제. 배열에서 원하는 부분만 반환.
    console.log(result);
    console.log(array);

}

class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

// Q5. find a student with the score 90
{
    // console.log(students);
    // const result = students.find(function(student, index) {
    //     // console.log(student, index);
    //     return student.score === 90; // true 또는 false 리턴
    // });
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((students) => students.score);
    // 배열안 모든 요소를 콜백함수로 호출하며 리턴된 값으로 변환
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    // 하나라도 만족되면 true
    const result = students.some((students) => students.score < 50);
    console.log(result);

    // 모두 조건에 만족해야 true
    const result2 = !students.every((students) => students.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    // 배열의 모든 요소의 누적된 값 전달
    // 배열 돌면서 누적 값 만들기
    // prev : 이전 콜백값
    // curr : 배열 아이템 순차적으로 적용
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev);
    //     console.log(curr);
    //     // 리턴값
    //     // return curr; //리턴값이 다음 호출시 prev로 호출
    //     return prev + curr.score;
    // }, 0); // 초기값 0으로 설정

    const result = students.reduce((prev, curr) => prev + curr.score, 0); // 초기값 0으로 설정
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score )
    .filter((score) => score >= 50 )
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score )
    .sort((a, b) => a - b) // 낮은순
    // .sort((a, b) => b - a) // 높은순
    .join();
    console.log(result);
}