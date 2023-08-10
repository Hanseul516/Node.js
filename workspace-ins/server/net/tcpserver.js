const net = require('node:net');

// connectionListener 등록
const tcpServer = net.createServer(function(socket){
  console.log(socket.remoteAddress, '접속함.');
  // error 이벤트를 필수로 처리해야 한다.
  socket.on('error', function(){
    console.log(socket.remoteAddress, '접속 종료.');
  });

  // 클라이언트로부터 메세지가 도착하면
  socket.on('data', function(data){
    console.log(data.toString());
    // 클라이언트로 메세지 전송
    socket.write(data);
  });
});

tcpServer.listen(33112, function(){
  console.log('TCP 서버 구동.');
});