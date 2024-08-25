# Página Web de Aguagym

¡Bienvenido al repositorio de la página web de Aguagym! Este proyecto es una aplicación de una sola página (SPA) moderna, dinámica y responsiva, desarrollada para Aguagym, un club especializado en actividades de fitness acuático. El sitio web presenta una variedad de secciones, incluyendo información sobre el club, actividades próximas, planes de precios, testimonios y un formulario de contacto integrado con un servidor backend.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración e Instalación](#configuración-e-instalación)
- [Uso](#uso)
- [Integración de API](#integración-de-api)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Diseño Responsivo:** El sitio web es completamente responsivo, asegurando una gran experiencia de usuario en todos los dispositivos.
- **Efectos de Desplazamiento Animados:** Las animaciones se activan a medida que los usuarios desplazan la página, proporcionando una experiencia dinámica y atractiva.
- **Formulario de Contacto Interactivo:** Los usuarios pueden enviar sus detalles a través de un formulario de contacto, que está conectado a una base de datos MongoDB y envía correos de confirmación.
- **Integración de Pronóstico del Tiempo:** La sección de actividades incluye pronósticos del tiempo en tiempo real utilizando la API de OpenWeather.
- **Interfaz Limpia y Moderna:** El sitio utiliza Tailwind CSS para un diseño limpio y consistente en todas las secciones.

## Tecnologías Utilizadas

- **Frontend:**
  - React.js
  - Vite
  - Tailwind CSS
  - Framer Motion
  - Axios
  - FontAwesome

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - Nodemailer

- **APIs:**
  - API de OpenWeather para pronósticos del tiempo
  - OAuth2 de Google para el envío seguro de correos electrónicos con Nodemailer

## Configuración e Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clonar el repositorio:
   git clone https://github.com/your-username/aguagym-page.git

2. Navegar al directorio del proyecto:
   cd aguagym-page

3. Instalar dependencias para el frontend:
   cd frontend
   npm install

4. Instalar dependencias para el backend:
   cd ../backend
   npm install

5. Configurar variables de entorno:

   Crear un archivo `.env` en el directorio `backend` con las siguientes variables:

   MONGO_URI=<Tu cadena de conexión de MongoDB>
   EMAIL_USER=<Tu dirección de correo electrónico>
   CLIENT_ID=<Tu ID de cliente de Google OAuth2>
   CLIENT_SECRET=<Tu secreto de cliente de Google OAuth2>
   REFRESH_TOKEN=<Tu token de actualización de Google OAuth2>

6. Ejecutar los servidores de desarrollo:

   Iniciar el servidor backend:
   cd backend
   npm run dev

   Iniciar el servidor frontend:
   cd ../frontend
   npm run dev

   La aplicación debería estar corriendo localmente. El frontend se servirá en `http://localhost:3000` y el backend en `http://localhost:5000`.
