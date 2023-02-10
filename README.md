# Trivia Fiesta Confluencia 2023

[](https://github.com/NQNModernizacion/trivia-fiesta-confluencia-2023)

- react 17
- electron 23
- electron-builder 23.6

---

Dentro de la carpeta `/public/` se encuentra el archivo de configuración de `electro` 

Cuando se compila con `npm start` o `npm run build`, tanto de `producción` como en `desarrollo` , mueve el archivo `electron.js` dentro de `/build/`

**Instalación de dependencias**

`npm install`

---

**Modo desarrollo** 

correr `npm  start` para que inicie la aplicación con `ReactJS` y luego ejecutamos `npm run electron` para compilar en modo `desarrollo`la aplicación de `electron`

Se puede ver el proyecto [http://localhost:3000](http://localhost:3000/) o en el ejecutable

---

**Modo Producción (WIN)**

correr `npm run pakacge` concatena dos scripts:

`npm run build` : compila la aplicacion para un proyecto web tradicional de `ReactJS`

`electron-builder build --win -c.extraMetadata.main=build/electron.js --publish never` : 

compila la aplicación en un ejecutable dentro de la carpeta `/dist/`