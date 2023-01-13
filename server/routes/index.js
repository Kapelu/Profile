const {Router} = require('express')
const route = Router()
const fs = require('fs')
const distribuidor = fs.readFileSync('./database/distribuidor.json', 'utf-8')
const producto = fs.readFileSync('./database/productos.json', 'utf-8')


//# HOME - .json
route.get('/', (req, res) => {
	res.render('index.ejs')
})

//# Página DIP.json
route.get('/json/dip', (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	res.send(distribuidor)
})

//# Página Producto.json
route.get('/json/productos', (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	res.send(producto)
})

/*
 * *****************************
 *         Distribuidor        *
 * *****************************
*/
//# ALTA
route.get('/dip/alta', (req, res) => {
	res.render('dip-alta.ejs')
})

//# BAJA
route.get('/dip/baja', (req, res) => {
	res.render('dip-baja.ejs')
})

//# MODIFICACION
route.get('/dip/modificacion', (req, res) => {
	res.render('dip-modi.ejs')
})

//# LISTADO
route.get('/dip/listado', (req, res) => {
	res.render('dip-listado.ejs')
})

/*
 * *****************************
 *          Productos          *
 * *****************************
 */
//# ALTA
route.get('/productos/alta', (req, res) => {
	res.render('pro-alta.ejs')
})

//# BAJA
route.get('/productos/baja', (req, res) => {
	res.render('pro-baja.ejs')
})

//# MODIFICACION
route.get('/productos/modificacion', (req, res) => {
	res.render('pro-modi.ejs')
})

//# LISTADO
route.get('/productos/listado', (req, res) => {
	res.render('pro-listado.ejs')
})

//# 404 - Not Found
route.use((req, res, next) => {
	res.status(404).render('404.ejs')
})

module.exports = route
