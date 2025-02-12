# ✨ summitTalk: Chat App ✨



![image-20250212150639848](C:\Users\eduar\AppData\Roaming\Typora\typora-user-images\image-20250212150639848.png)

Especificaciones:

- 🌟 MERN + Socket.io + TailwindCSS + Daisy UI
- 🎃 Autenticación y Autorización con JWT
- 👾 Mensajería en tiempo real con Socket.io
- 🚀 Estado de usuario en línea
- 👌 Gestión de estado global con Zustand
- 🐞 Manejo de errores tanto en el servidor como en el cliente

### Configuración del archivo .env 

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

## Construir la aplicación

```shell
npm run build
```

## Iniciar la aplicación

```shell
npm start
```

### Estructura del proyecto

```
.gitignore
backend/
    .env
    package.json
    src/
        controllers/
            auth.controller.js
            message.controller.js
        index.js
        lib/
            cloudinary.js
            db.js
            socket.js
            utils.js
        middleware/
        models/
        routes/
        seeds/
frontend/
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    public/
        avatar.png
        vite.svg
    README.md
    src/
        App.jsx
        components/
        constants/
        index.css
        lib/
        main.jsx
        pages/
        store/
    tailwind.config.js
    vite.config.js
LICENSE
package.json
README.md
```

### Instalación y configuración del proyecto

#### 1. Clonar el  repositorio

```
git clone <https://github.com/eduardbar/summitTalk.git
```



#### 2. Instalar las dependencias

```
npm install --prefix backend
npm install --prefix frontend
```

#### 3. Configuración variables de entorno 

Ubica el archivo .env en la carpeta main de backend 

#### 4. Construcción de app 



#### 5. Inicio de la a

```
npm run build
```

#### pp 

```
npm start
```

