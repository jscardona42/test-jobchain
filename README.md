# Backend Technical Challenge - Node.js & NestJS

Bienvenido a la prueba técnica práctica. Este repositorio contiene una API REST básica construida con **NestJS** y **TypeScript** para gestionar transacciones financieras simplificadas.

El objetivo de esta sesión es trabajar sobre este código base para depurar errores, añadir nuevas funcionalidades y asegurar la calidad del código.

## Requisitos Previos

- Node.js
- NPM o Yarn
- Git

## Instalación y Configuración

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend-test-challenge
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Levantar el servidor (Modo desarrollo):**
   ```bash
   npm run start:dev
   ```

La aplicación arrancará por defecto en http://localhost:3000.

## API Endpoints Actuales

La API cuenta actualmente con el recurso `/transactions`:

- **GET /transactions**: Recupera el listado de transacciones.
  - Query Params opcionales: `type` (ej: `DEPOSIT`, `WITHDRAW`).
- **POST /transactions**: Crea una nueva transacción.
  - Body esperado: `{ "amount": number, "type": "DEPOSIT" | "WITHDRAW" }`

## Notas Importantes

- **Persistencia**: Para agilizar la prueba, no se utiliza una base de datos real. Los datos se guardan en memoria dentro del servicio. Si reinicias el servidor, los datos volverán a su estado original. No es necesario configurar Docker ni bases de datos locales.

- **Testing**: El proyecto incluye Jest configurado. Puedes ejecutar los tests con:
  ```bash
  npm run test
  ```

## Durante la sesión

Se te pedirá compartir pantalla y realizaremos las siguientes tareas en vivo:

- Revisión y corrección de un bug existente.
- Implementación de una nueva funcionalidad:
  - Agregar un estado (`status`) a las transacciones: 'PENDING' o 'COMPLETED'. Por defecto 'PENDING'.
  - Aplicar validaciones en el DTO usando `class-validator` para asegurar la integridad de los datos.
- Creación de tests unitarios.

¡Mucha suerte!
