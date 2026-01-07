# 🔒 SummitTalk: Mensajería Corporativa Segura

![SummitTalk Preview](https://github.com/user-attachments/assets/e68300e1-0791-4c4a-862f-95d2ce576ff4)

**SummitTalk** es una plataforma de mensajería instantánea de nivel empresarial, diseñada específicamente para organizaciones que requieren la máxima privacidad y seguridad en sus comunicaciones. A diferencia de las aplicaciones de chat convencionales, SummitTalk garantiza un entorno blindado para compartir información sensible, estrategias y documentos corporativos.

## 🚀 Características Principales

*   **🛡️ Cifrado y Seguridad**: Arquitectura diseñada para comunicaciones privadas (cifrado en tránsito y reposo).
*   **🏢 Enfoque Corporativo**: Landing page dedicada para la captación de clientes empresariales.
*   **⚡ Tiempo Real**: Mensajería instantánea impulsada por **Socket.io**.
*   **🟢 Estado de Conexión**: Indicadores de usuarios en línea en tiempo real.
*   **🔐 Autenticación Robusta**: Sistema de login seguro con JWT (JSON Web Tokens) y cookies HttpOnly.
*   **🖼️ Compartir Archivos**: Soporte para envío de imágenes optimizado con Cloudinary.
*   **🎨 UI Moderna**: Interfaz elegante y responsiva construida con TailwindCSS y DaisyUI.

## 🛠️ Stack Tecnológico (MERN)

*   **Frontend**: React (Vite), Zustand (Estado Global), TailwindCSS, DaisyUI.
*   **Backend**: Node.js, Express.js.
*   **Base de Datos**: MongoDB (Mongoose ODM).
*   **Real-time**: Socket.io.
*   **Infraestructura**: Despliegue continuo en Render.

## ⚙️ Configuración del Entorno

Crea un archivo `.env` en la carpeta `backend/` con las siguientes variables:

```env
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/SummitTalk
PORT=5001
JWT_SECRET=tu_secreto_super_seguro

# Configuración de Cloudinary para imágenes
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

NODE_ENV=development
```

## 📦 Instalación y Despliegue

### 1. Clonar el repositorio

```bash
git clone https://github.com/eduardbar/summitTalk.git
cd summitTalk
```

### 2. Instalar dependencias

Instala las dependencias tanto del backend como del frontend desde la raíz:

```bash
npm run build
# Este comando instalará dependencias en ambas carpetas y construirá el frontend
```

O manualmente:

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Desarrollo Local

Para correr ambos servidores (backend y frontend) simultáneamente:

1.  Abre una terminal y corre el backend:
    ```bash
    cd backend
    npm run dev
    ```
2.  Abre otra terminal y corre el frontend:
    ```bash
    cd frontend
    npm run dev
    ```

El frontend estará disponible en `http://localhost:5173`.

### 4. Producción

Para simular el entorno de producción localmente:

```bash
# Desde la raíz del proyecto
npm run build
npm start
```

## 📂 Estructura del Proyecto

```
summitTalk/
├── backend/                # Servidor API REST + Socket.io
│   ├── src/
│   │   ├── controllers/    # Lógica de negocio
│   │   ├── models/         # Esquemas de Mongoose
│   │   ├── routes/         # Definición de endpoints
│   │   └── lib/            # Utilidades (db, socket, cloudinary)
│   └── ...
├── frontend/               # SPA React + Vite
│   ├── src/
│   │   ├── pages/          # Páginas (Landing, Home, Login, etc.)
│   │   ├── components/     # Componentes UI reutilizables
│   │   ├── store/          # Estado global (Zustand)
│   │   └── ...
│   └── ...
└── ...
```

---

© 2026 SummitTalk Industries Ltd.
