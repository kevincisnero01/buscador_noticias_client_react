# 📰 Buscador de Noticias con React

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</p>

---

## 📝 Descripción del Proyecto

**Buscador de Noticias** es una aplicación web que sirve como una demostración práctica de conceptos fundamentales de React. El proyecto se enfoca en el consumo de APIs externas, la gestión de estado con la  API y el uso de Hooks para crear una interfaz de usuario dinámica y reactiva.

La aplicación consume la API de [NewsAPI.org](https://newsapi.org/) para obtener noticias en tiempo real, las cuales se presentan en una interfaz limpia construida con React, Vite y Tailwind CSS.

## ✨ Características Principales

- **🔍 Filtrado por Categoría:** Permite a los usuarios seleccionar una categoría de interés (tecnología, deportes, etc.) para filtrar las noticias mostradas.
- **📰 Listado en Tarjetas:** Las noticias se presentan en tarjetas individuales que muestran información clave como la fuente, autor, fecha y un resumen del artículo.
- **🔗 Acceso al Artículo Original:** Al hacer clic en una noticia, el usuario es redirigido en una nueva pestaña al artículo original para una lectura completa.
- **📱 Diseño Responsivo:** La interfaz se adapta fluidamente a diferentes tamaños de pantalla, garantizando una excelente experiencia en dispositivos móviles, tablets y de escritorio.

##  Tecnologías Utilizadas

- **Framework:** React 19+
- **Lenguaje:** Javascript y JSX
- **Bundler:** Vite
- **Estilos:** HTML5, CSS3 & Tailwind CSS.

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
