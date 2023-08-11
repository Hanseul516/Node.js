## 게시판 실습(최종)
* express 프로젝트 생성(workspace/server)
```
npx express-generator nodeboard --view=ejs
```

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