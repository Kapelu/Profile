const express = require('express')
const app = express()
const path = require('path')

//# SETTING
app.set('port', process.env.PORT || 5000)


//# MIDLEWARE

//# STATIC FILE
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
	res.status(404).sendFile('./public/404.html', {root: __dirname})
})

module.exports = app
