# **Historias de Usuario - FilmTreasury**

Este archivo contiene las historias de usuario que guían el desarrollo de las características y funcionalidades de la aplicación **FilmTreasury**.

## **1. Registro de Usuario**
**Como** usuario nuevo,  
**quiero** poder registrarme en la plataforma,  
**para** gestionar mi propia colección de películas y personalizar mi experiencia.

### **Criterios de Aceptación**
- El usuario debe poder registrarse con su correo electrónico y contraseña.
- Opción de registro a través de Google OAuth.
- El sistema debe validar los campos obligatorios como correo y contraseña.

## **2. Inicio de Sesión**
**Como** usuario registrado,  
**quiero** poder iniciar sesión en la plataforma,  
**para** acceder a mi cuenta personal y ver mis películas guardadas.

### **Criterios de Aceptación**
- El sistema debe permitir iniciar sesión con correo y contraseña.
- Autenticación utilizando Google OAuth.
- Opción de "Recuérdame" para mantener la sesión iniciada.

## **3. Listado de Películas Recientes**
**Como** usuario de la plataforma,  
**quiero** ver las películas añadidas recientemente por mis amigos,  
**para** descubrir nuevas películas interesantes y ver lo que están viendo.

### **Criterios de Aceptación**
- Las películas añadidas recientemente por amigos se deben mostrar en la pantalla de inicio.
- Cada tarjeta de película debe contener el título, el año y el género.
- Las tarjetas deben ser clicables, redirigiendo a una página de detalles.

## **4. Soporte al Usuario**
**Como** usuario con dudas o problemas,  
**quiero** tener acceso a una página de soporte,  
**para** enviar consultas o problemas y recibir ayuda.

### **Criterios de Aceptación**
- La página de soporte debe contener un formulario para enviar consultas.
- El formulario debe validar campos como correo y descripción.
- Se debe recibir una confirmación de que la consulta ha sido enviada.

## **5. Diseño Responsivo**
**Como** usuario que accede desde distintos dispositivos,  
**quiero** que la aplicación funcione bien en pantallas pequeñas y grandes,  
**para** tener una experiencia consistente en mi móvil, tablet o computadora.

### **Criterios de Aceptación**
- El diseño debe adaptarse a distintos tamaños de pantalla.
- En pantallas pequeñas, los elementos deben reorganizarse en una columna.
- El menú lateral debe desaparecer o convertirse en un menú desplegable en pantallas pequeñas.
