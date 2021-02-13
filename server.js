require('dotenv').config()
var express = require('express');
var cors = require('cors');
var multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const { originalname, size, mimetype } = req.file;
  res.status(200).json({ name: originalname, type: mimetype, size: size });
});

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
