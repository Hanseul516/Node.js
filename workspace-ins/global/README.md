## 입출력 프로그래밍
  * 입력은 data 이벤트, 출력은 write() 메소드 사용
### stdinout.js
  * 표준 입력장치로부터 데이터가 입력되면 표준 출력장치로 한줄 출력한다.
    - input: process.stdin
    - output: process.stdout

### stdinfileout.js
  * 표준 입력장치로부터 데이터가 입력되면 파일로 출력한다.
    - input: process.stdin
    - output: fs.createWriteStream()

### fileinstdout.js
  * 파일로부터 데이터를 읽어서 표준 출력장치로 출력한다.
    - input: fs.createReadStream()
    - output: process.stdout

### fileinfileout.js
  * 파일로부터 데이터를 읽어서 파일로 출력한다.
    - input: fs.createReadStream()
    - output: fs.createWriteStream()
