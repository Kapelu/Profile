# SERVER PSA

1. Crear la carpeta Server

2. Dentro de la carpeta Server empezar nuestro proyecto, para ello vamos a ejecutar en la consola de GIT el siguiente comando.
    ```js
     npm init -y
    ```
    
    Esto nos creara un archivo `package.json`
    que contendra la siguiente información.

    ```js
    {
   "name": "psa-server",
   "version": "1.0.0",
   "description": "1. Crear la carpeta Server",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "ISC"
    }
    ```
    
    > Obviamente nuestro `package.json` durante el desarrollo ira creciendo y mostrando la configuración de nuestro servidor.

3. Instalar las dependencias que nuestros servidor, comenzando con 
    ```js
    npm i express ejs fs morgan
    ```
    * express: Express.js es un framework para crear Web Apps, Web APIs o cualquier tipo de Web Services, es libre bajo la licencia MIT.
    Express es muy liviano y minimalista además de ser extensible a través de Middlewares.
    Los Middlewares interceptan el request y el response para ejecutar una acción en medio.

    * ejs:Es un lenguaje de plantillas simple que le permite generar marcado HTML con JavaScript simple. Ninguna religiosidad sobre cómo organizar las cosas. Sin reinvención de la iteración y el flujo de control. Es simplemente JavaScript.

    * fs: Este módulo hace que la operación de archivos sea simple, no necesita preocuparse por las salidas del directorio. y la API es la misma que el sistema de archivos del nodo. No existe costo de tiempo para este complemento.
    * morgan: Es un Middleware de nivel de solicitud HTTP. Es una gran herramienta que registra las solicitudes junto con otra información dependiendo de su configuración y el ajuste preestablecido utilizado. Resulta muy útil durante la depuración y también si desea crear archivos de registro.


4. Instalar las dependencias que solo se ejecutaran a nivel de desarrollo pero no de producción, comenzando con 
    ```js
    npm i nodemon -D
    ```
    * nodemon: Es una utilidad que monitorea los cambios en el código fuente que se está desarrollando y automáticamente reinicia el servidor. 

5. Ahora crearemos nuestro servidor, para ello nesecitamos crear un archivo llamado `index.js`

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```
### 



----

### package.json
```js
{
  "name": "psa-server",
  "version": "1.0.0",
  "description": "Desarrolo del server de una app de comercialización de productos",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "fs": "^0.0.1-security",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

> linea 6 ==> 10:35
