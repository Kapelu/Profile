const express = require ('express')
const server = express()
const port = 5000

server.get('/', (pre,res)=>{
    res.send('Helo Wold !!!')
})

async function serverStart() {
	await server.listen(port)
	console.log('/**************************************/')
	console.log('/                                      / ')
	console.log(`/ Server running on port: [${port}]   🚀  /`)
	console.log('/                                      / ')
	console.log('/ By Keiko Tadashi                     / ')
	console.log('/                                      / ')
	console.log('/**************************************/')
}
serverStart()