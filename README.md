```mermaid
flowchart LR
    Poyecto_PSA-->SERVER-Start:26/03/2022-->Distribuidor
    SERVER-Start:26/03/2022-->Producto
    Poyecto_PSA-->Dip_App-->Perfil
    Dip_App-->Agenda
    Dip_App-->Productos
    Dip_App-->PSA_Campus
    Dip_App-->Home
    Dip_App-->Sitio_Privado
    Dip_App-->Dashboard
    Poyecto_PSA---->WEB_PUBLIC
```

### package.json
```js
{
  "name": "psa-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  }
}
```
[Explicacion de la configuración](https://www.youtube.com/watch?v=olTgcd5VjX0)

> linea 6 ==> 10:35


