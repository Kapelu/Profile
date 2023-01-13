const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const routes = require('./routes/index')
const server = express()

const rfsStream = rfs.createStream('morgan.log', {
	size: '10M', // rotate every 10 MegaBytes written
	interval: '7d', // rotate daily
})

//# Setting
server.set('port', process.env.PORT || 5000)
server.set('views',path.join(__dirname, 'views'))
server.set('view engine', 'ejs')


//# Midleware
server.use(morgan(':date[web] :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms', {stream: rfsStream})
)
server.use(routes)


//# Static File
server.use(express.static(path.join(__dirname, 'public')))

/*
//# Routes
server.get('/', (req, res) => {
	res.send('Hello World!')
}) */

module.exports = server
