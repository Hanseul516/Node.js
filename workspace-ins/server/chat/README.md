## 채팅 예제
### step1/
* server/http/staticserver03.js 복사해서 시작
* staticserver.js: http 서버 구동, static 자원 응답, 로깅
* url 파싱해서 경로와 query string 분리

### step2/
* bin/www: http 서버 구동
* app.js: static 자원 응답, 로깅

### step3/
* middleware/static.js: static 자원 응답
* middleware/logger.js: 로깅
* app.js: 미들웨어 등록
* public: 정적인 자원 저장

### step4/
* connect 미들웨어 컨테이너 사용
* middleware를 connect에 등록
### step5/
* routes/index.js: 동적인 자원 응답
* views: view를 구성

### step6/
* connect용 middleware 사용(morgan, serve-static)
* middleware 제거
* expres-session: 로그인 상태 정보 유지 session 처리
* ejs: view engine
* nochche: 캐시 무효화
* socket.io: 웹소켓 채팅 기능 구현
```
npm i morgan serve-static express-session nocache ejs socket.io
```
