## 게시판 실습(최종)
* express 프로젝트 생성(workspace/server)
```
npx express-generator nodeboard --view=ejs
cd nodeboard
npm i
npm i method-override mysql2
npm start
```
* html 파일 ejs로 변경하고 views 폴더로 이동
* routes/index.js 라우팅 규칙 추가


* 테이블 생성
```
-- mysql 테이블 생성
drop database if exists board;
create database board;
use board;

create table board(
		id int auto_increment primary key,
    title varchar(100),
    writer varchar(20),
    content text,
    view int default 0,
    regdate DATETIME DEFAULT CURRENT_TIMESTAMP
);

```

* Mac에서 DB 접속 안되면 telnet 설치 후 테스트
```
brew tap theeternalsw0rd/telnet 
brew install telnet
telnet localhost 3306
```