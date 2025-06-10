# "Tienda La Comarca" - React

Esta aplicación web muestra una lista de productos obtenidos desde una API de datos aleatorios, con filtros en tiempo real, estadísticas dinámicas, gráficos interactivos y un diseño moderno y responsivo.

---

## Características principales

- **Búsqueda instantánea:** Filtra productos mientras escribís.
- **Filtros avanzados:**
  - Filtrado por **categoría**
  - Ordenamiento por **precio** y **rating**
- **Modo oscuro:** Alternable con un botón.
- **Paginación:** Visualizá 10 productos por página.
- **Exportación de datos:** Descargá los productos filtrados en CSV.
- **Estadísticas en vivo:**
  - Producto más caro y más barato
  - Cantidad de productos con títulos largos
  - Precio total
  - Promedio de descuento
  - Promedio de rating
  - Cantidad de productos con stock alto y rating alto
- **Visualización de datos:**
  - Gráfico de barras: cantidad de productos por categoría
  - Línea: evolución simulada de precios
  - Pie chart: proporción de stock alto/bajo

---

## Tecnologías utilizadas

- **React** + **Vite**: Framework de JavaScript moderno
- **Tailwind CSS**: Estilado responsivo y utilitario
- **Axios**: Llamadas HTTP a la API externa
- **Recharts**: Gráficos interactivos y dinámicos
- **JavaScript ES6+**: Lógica funcional moderna
- **React Hooks**: Para manejo de estado y efectos secundarios.

---

## Cómo usar este proyecto

1. Clona el repositorio
2. Instala las dependencias
3. Inicia la aplicación 
4. Abre en tu navegador http://localhost:5173


## ¿Cómo funciona la aplicación?

La app consume productos de la API pública [DummyJSON](https://dummyjson.com/products).

- El usuario puede buscar productos por nombre, aplicar filtros y ordenar los resultados.
- Las estadísticas y gráficos se actualizan dinámicamente según los productos visibles.
- Los datos pueden exportarse a CSV para su análisis externo.


---

## Estructura de componentes

- `ProductList`: Componente encargado de mostrar la lista de productos en tarjetas.
- `StatsPanel`: Componente que muestra todas las estadísticas calculadas según los productos visibles.
- `SearchBar: Componente de entrada que permite al usuario escribir texto para buscar productos. Reutilizable y desacoplado de la lógica principal.
- `ProductList`: Componente encargado de mostrar la lista de productos en tarjetas. Cada tarjeta incluye título, precio, descuento, rating, stock y categoría.
- `StatsPanel`: Componente que muestra todas las estadísticas calculadas según los productos visibles. Incluye datos como promedio, extremos, stock y rating.
- `ChartsPanel`: Componente de visualización interactiva usando Recharts. Muestra:
  - Gráfico de barras por categoría,
  - Gráfico de líneas con precios simulados,
  - Pie chart de proporción de stock.
- `exportCSV (utils)`: Función externa reutilizable que convierte los productos filtrados en un archivo `.csv` descargable con un solo clic.

---

## Autor

Noelia Soto

