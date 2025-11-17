# 📰 Buscador de Noticias con React

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</p>

---

## 📝 Descripción del Proyecto

**Buscador de Noticias** es una aplicación web moderna y reactiva que permite a los usuarios buscar y visualizar noticias por categoría. La interfaz, construida con React y estilizada con Tailwind CSS, ofrece una experiencia de usuario limpia y funcional. El proyecto utiliza Vite como herramienta de construcción para un desarrollo y compilación ultrarrápidos.

La aplicación consume una API externa de noticias para obtener datos en tiempo real, gestionando el estado global a través de React Context para una comunicación eficiente entre componentes.

## ✨ Características Principales

- **Búsqueda por Categoría:** Filtra las noticias según categorías predefinidas (ej. tecnología, deportes, ciencia).
- **Diseño Responsivo:** Interfaz adaptable a diferentes tamaños de pantalla (móvil, tablet, escritorio).
- **Interfaz Limpia:** Diseño minimalista y funcional.
- **Carga Rápida:** Optimizado para un rendimiento superior gracias a Vite.

## 🚀 Tecnologías Utilizadas

- **Frontend:**
  - React: Biblioteca para construir interfaces de usuario.
  - Vite: Herramienta de frontend para un desarrollo rápido.
- **UI y Estilos:**
  - Tailwind CSS: Framework de CSS para un diseño rápido y personalizado.
- **Gestión de Estado:**
  - React Context API: Para gestionar el estado global de la aplicación (categorías, noticias, paginación).
  - React Hooks: (`useState`, `useEffect`, `useContext`) para la lógica de estado y ciclo de vida en componentes.
- **Cliente HTTP:**
  - Fetch API: Para realizar las peticiones a la API de noticias.

## 🛠️ Instalación y Configuración

Sigue estos pasos para configurar el proyecto en tu entorno local.

**1. Clonar el Repositorio**
```bash
git clone https://github.com/tu-usuario/buscador_noticias_client_react.git
cd buscador_noticias_client_react
```

**2. Instalar Dependencias**
Usa `npm` para instalar los paquetes necesarios.
```bash
npm install
```

**3. Configurar Variables de Entorno**
Crea un archivo `.env.local` en la raíz del proyecto y añade tu clave de API.

```env
# .env.local
VITE_API_KEY="TU_API_KEY_AQUI"
```
> **Nota:** Necesitas obtener una API Key de un proveedor de noticias como NewsAPI.org.

**4. Ejecutar el Proyecto**
Inicia el servidor de desarrollo con Vite.
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

**5. Compilar para Producción**
Para crear una versión optimizada para producción:
```bash
npm run build
```
Los archivos compilados se generarán en la carpeta `dist/`.

## 📂 Estructura del Proyecto

La estructura de carpetas está organizada para mantener el código modular y escalable.

```
buscador_noticias_client_react/
├── public/               # Archivos estáticos
├── src/
│   ├── api/              # Lógica para llamadas a la API (opcional)
│   ├── components/New/   # Componentes del modulo reutilizables de React
│   │   ├── ForNew.jsx
│   │   ├── IndexNew.jsx
│   │   └── ItemNew.jsx
│   │
│   ├── hooks/            # Hooks personalizados
│   │   └── useSelect.js
│   ├── App.jsx           # Componente principal de la aplicación
│   └── main.jsx          # Punto de entrada de la aplicación
├── .env.local            # Variables de entorno (no versionado)
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del proyecto
```
