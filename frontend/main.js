var express = require('express');
var app = express();
var port = 8001;

// module
var multer = require('multer');

// ./upload에 파일을 저장
var upload = multer({ dest: './upload' });

// public 내에 존재하는 파일을 사용
app.use(express.static('public'));

// 최초 경로
app.get('/', (req, res) => {
    res.sendFile('/');
})

// upload 경로
app.post('/uploadDo', upload.any(), (req, res) => {
    console.log(req.files);

    res.send('Upload file = ' + req.files);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})