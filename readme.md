# 🛒 E-commerce REST API

Pequeña REST API para gestión de un sistema de e-commerce, construida con **TypeScript + PostgreSQL**, expuesta en el puerto `3000`.

---

## ⚙️ Variables de Entorno

Asegúrate de configurar las siguientes variables en tu archivo `.env`:

```env
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB_PORT=

PGADMIN_EMAIL=
PGADMIN_PASSWORD=
PGADMIN_PORT=
```

---

## 🧰 Tecnologías Utilizadas

* TypeScript
* Node.js
* Express
* TypeORM
* PostgreSQL
* Docker
* pgAdmin

---

## 🚀 Ejecución del Proyecto

### 1. Instalar dependencias

```bash
npm install
```

---

### 2. Levantar servicios (Base de datos + pgAdmin)

```bash
docker compose up -d
```

---

### 3. Ejecutar el servidor en modo desarrollo

```bash
npm run dev
```

---

### 4. Probar la API

Abrir en el navegador:

```text
http://localhost:3000
```

Respuesta esperada:

```text
Hello World!
```

---

## 🗄️ Acceso a pgAdmin

```text
http://localhost:8080
```

Usa las credenciales definidas en `.env`.

---

## 🔌 Conexión a la Base de Datos

Dentro de pgAdmin:

```text
Host: db_ecomerce
Port: ${POSTGRES_DB_PORT}
User: ${POSTGRES_USER}
Password: ${POSTGRES_PASSWORD}
```