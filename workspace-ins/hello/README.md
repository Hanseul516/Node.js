## 웹 브라우저의 자바스크립트(클라이언트 사이드)
* ECMAScript + W3C 표준

## Node.js 자바스크립트(서버 사이드)
* ECMAScript + CommonJS 기반(서버 개발에 필요한 추가 라이브러리 - 코어 모듈)

### hellonode.js
* 첫번째 실습

### helloserver.js
* http 모듈로 브라우저가 요청한 파일을 fs 모듈로 찾아서 응답하는 간단한 정적인 웹서버 개발
  - process.argv로 명령행 매개변수 처리 추가
  - node helloserver 33111

### helloserver2.js
* node-static 확장 모듈로 개발한 정적인 웹서버
```
npm i node-static
```

### helloserver3.js
* http 모듈로 작성한 웹서버를 스트림 방식으로 변경
