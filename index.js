const server = require('./app')


async function serverStart() {
	await server.listen(server.get('port'))
	console.log('/**************************************/')
	console.log('/                                      / ')
	console.log(`/ Server running on port: [`,server.get('port'),`] 🚀  /`)
	console.log('/                                      / ')
	console.log('/ By Keiko Tadashi                     / ')
	console.log('/                                      / ')
	console.log('/**************************************/')
}
serverStart()