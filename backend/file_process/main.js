var express = require('express')
var app = express();
var port = 5000;
/* module */
var multer = require('multer')
const _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: _storage })

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/')
})

app.post('/uploadDo', upload.any(), (req, res) => {
    console.log(req.files)
    res.send('Upload file = ' + req.files)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
