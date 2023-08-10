## TCP 서버 개발
* net 모듈 이용

### tcpserver.js
* TCP 서버

### tcpclient.js
* TCP 클라이언트

### httpserver.js
* 서버 구동시 80포트 오픈 오류 발생하면
  - MAC은 sudo su 명령으로 관리자 전환 후 실행
  - Window 사용자는 80 포트 충돌 나면 window+r, services.msc 입력후 World Wide Web 서비스를 사용안함으로 변경하고 중지 버튼
  - powershell로 nodemon 실행시 보안 오류 발생하면 command prompt로 바꿔서 실행