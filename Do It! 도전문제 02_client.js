/**
 * 미션 2
 * 
 * Echo 기능을 수행하는 소켓 클라이언트
 
 * 외장모듈 : net
 */

var net = require('net');
var hostname = 'localhost';
var port = 3000;

// 서버에 연결
var client = new net.Socket();
client.connect(port, hostname, function () {
    console.log('connect server -> ' + hostname + ':' + port);
    client.write('안녕!');
});
// 서버로부터 데이터를 받았을 때 발생하는 이벤트
client.on('data', function (data) {
    console.log('Data from server -> ' + data);
    // 클라이언트 연결 종료
    client.destroy();
});

client.on('close', function () {
    console.log('Disconnect');
});
