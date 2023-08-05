const logEvents = require("./logEvents"); //모듈과 EventEmitter를 require로 가져옴.
const EventEmitter = require("events");
class Emitter extends EventEmitter {} //새로운 클래스를 선언하여 EventEmitter를 상속받음
//initialize object
const myEmitter = new Emitter(); ////객체를 생성하여 이벤트를 발생시키고 리스닝하는데 사용

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  //HTTP 서버를 생성 //콜백 함수 (req, res) => {...}는 HTTP 요청(request)과 응답(response)을 처리
  console.log(req.url, req.method);

  let path;

  if (req.url === "/" || req.url === "index.html") {
    res.statusCode = 200; //응답 상태 코드를 200으로 설정. 200은 성공을 의미
    res.setHeader("Content-Type", "text/html");
    //응답 헤더의 "Content-Type"을 "text/html"로 설정. 이는 응답으로 HTML 데이터를 보낸다는 것을 의미
    path = path.join(__dirname, "views", "index.html");
    fstat.readFile(path, "utf8", (err, data) => {
      res.end(data);
    });
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//server.listen()을 사용해 서버를 지정된 포트로 바인딩
