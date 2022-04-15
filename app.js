const express = require('express')
const fs = require('fs')
const https = require('https')
const port = 3000
app = express()

var key = fs.readFileSync('./ssl/key.pem','utf8')
var cert = fs.readFileSync('./ssl/cert.pem','utf8')
var credentials = {
  key:key,
  cert:cert
}

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})
app.use(express.static(__dirname + '/'))

var server = https.createServer(credentials,app).listen(port, () => {
  console.log("https server listing on port : " + port)
})
