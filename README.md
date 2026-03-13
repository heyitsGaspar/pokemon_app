# 🎮 Pokémon App

Una aplicación web responsiva para explorar y buscar Pokémon usando la [PokéAPI](https://pokeapi.co/). Construida con React, TypeScript, Redux Toolkit y Tailwind CSS.

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar repositorio**

```bash
git clone <url-del-repositorio>
cd pokemon-app
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

```



## 📋 Características

- ✅ **Visualización de Pokémon**: Muestra 6 Pokémon por página
- ✅ **Paginación**: Navega fácilmente entre páginas de Pokémon
- ✅ **Buscador**: Busca Pokémon por nombre en tiempo real (con debounce)
- ✅ **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles, tablets y escritorio
- ✅ **Información Detallada**: Muestra tipos e imágenes oficiales
- ✅ **Interfaz Moderna**: Diseño atractivo con animaciones y efectos hover
- ✅ **Carga Inteligente**: Muestra skeletons mientras carga

## 🛠️ Tecnologías Utilizadas

| Tecnología    | Versión | Propósito                 |
| ------------- | ------- | ------------------------- |
| React         | 19.2.4  | Biblioteca UI             |
| TypeScript    | ~5.9.3  | Tipado estático           |
| Redux Toolkit | 2.11.2  | Gestión del estado global |
| React Redux   | 9.2.0   | Integración React-Redux   |
| Tailwind CSS  | 4.2.1   | Estilos responsivos       |
| Vite          | 8.0.0   | Build tool y dev server   |
| Axios         | 1.13.6  | Cliente HTTP              |
| Lucide React  | 0.577.0 | Iconos                    |
| ESLint        | 9.39.4  | Linting                   |

## 📁 Estructura del Proyecto

```

src/
├── lib/
│ ├── app/
│ │ └── store/
│ │ └── store.ts # Configuración de Redux Store
│ ├── application/
│ │ └── usecases/
│ │ ├── getPokemon.ts # Use case: obtener listado de Pokémon
│ │ └── searchPokemon.ts # Use case: buscar Pokémon
│ ├── domain/
│ │ └── entities/
│ │ └── pokemon.ts # Entidad Pokémon
│ ├── hooks/
│ │ └── useDebounce.ts # Hook personalizado de debounce
│ ├── infrastructure/
│ │ └── api/
│ │ └── pokemonApi.ts # Configuración de cliente Axios para PokéAPI
│ ├── presentation/
│ │ ├── components/
│ │ │ ├── PageTitle.tsx # Título principal con animación
│ │ │ ├── PokemonCard.tsx # Tarjeta de Pokémon
│ │ │ ├── PokemonPagination.tsx # Controles de paginación
│ │ │ ├── PokemonSkeleton.tsx # Skeleton loader
│ │ │ └── SearchBar.tsx # Buscador
│ │ ├── pages/
│ │ │ └── HomePage.tsx # Página principal
│ │ └── store/
│ │ └── pokemonSlice.ts # Redux slice para Pokémon
│ ├── typeStyles.ts # Estilos por tipo de Pokémon
│ └── utils.ts # Utilidades generales
├── components/
│ └── ui/ # Componentes UI reutilizables (shadcn)
├── App.tsx # Componente raíz
├── index.css # Estilos globales
└── main.tsx # Punto de entrada

```

## 🏗️ Arquitectura y Patrones

### Arquitectura Hexagonal (Clean Code)

El proyecto sigue principios de arquitectura hexagonal dividiendo el código en capas:

1. **Domain**: Entidades y lógica de negocio pura
2. **Application**: Use cases que coordinan el flujo de negocio
3. **Infrastructure**: Conexión con APIs externas
4. **Presentation**: Componentes React y UI

## 👤 Autor

**Gaspar Israel Chay Colli**

---

**Última actualización**: Marzo 2026
```
