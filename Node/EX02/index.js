/*
1. module 종류
1-1. 사용자 정의 모듈
1-2. node.js 기본 모듈
1-3. 외부 모듈

2. 사용자 정의 모듈
1-1. 변수,객체,함수,폴더를 module로 만듦
1-2. 외부로 공개 module.exports == exports
1-3. reqire을 사용해 module을 사용
*/

const sum = require("./sum");
const sum_result = sum(1, 2);
console.log(sum_result);

const mul = require("./mul");
const mul_result = mul(1, 2);
console.log(mul_result);

//node.js 기본모듈
const 
