// 표준 입력장치로부터 데이터가 입력되면
// process.stdin.addListener('data', function(data){
process.stdin.on('data', function(data){
  data = data.toString();
  // 표준 출력장치로 한줄 출력한다.
  process.stdout.write(`${data}${require('os').EOL}`);
  console.log(data);
});
