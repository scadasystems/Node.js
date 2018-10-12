/*
 외장모듈 : fs, readline
 읽어들일 파일 : LulzM.txt
*/
var fs = require('fs');
var readline = require('readline');
// 한 줄씩 읽어들이는 함수 정의
function processFile(filename) {
    var instream = fs.createReadStream(filename);
    var reader = readline.createInterface(instream, process.stdout);
    var count = 0;
    // 한 줄씩 읽어들인 후에 발생하는 이벤트
    reader.on('line', function(line) {
        console.log('Read line : ' + line);
        
        count += 1;
        
        // 공백으로 구분
        var tokens = line.split(' ');
        //토큰의 카운트를 붙여서 각각 보여줌.
        if (tokens != undefined && tokens.length > 0) {
            console.log('line ' + count + ' -> ' + tokens[0]);
        }
    });
    // 모두 읽어들였을 때 발생하는 이벤트
    reader.on('close', function(line) {
        console.log('Finish read file.');
    });
}
// 함수 실행
var filename = './LulzM.txt';
processFile(filename);