# Aplicación de Productos - React

Esta aplicación web muestra una lista de productos obtenidos desde una API de datos aleatorios, con filtros en tiempo real, estadísticas dinámicas y un diseño moderno y responsivo.

---

## Características principales

- **Búsqueda instantánea:** Filtra productos según el texto que escribas en el buscador.
- **Estadísticas en vivo:**  
  - Producto con mayor y menor precio (nombre y valor).  
  - Cantidad de productos con títulos largos (+20 caracteres).  
  - Precio total de los productos filtrados.  
  - Promedio de descuento aplicado.
- **Diseño con tarjetas:** Cada producto se muestra en una tarjeta con imagen, descripción, precio original y precio con descuento.
- **Interfaz sencilla y agradable:** Usamos animaciones suaves y un diseño limpio para una mejor experiencia.

---

## Tecnologías utilizadas

- **React** + **Vite**: Para un entorno de desarrollo rápido y moderno.
- **Tailwind CSS**: Para estilos responsivos y modernos con poco código.
- **Axios**: Para consumir la API externa de productos.
- React Hooks (`useState`, `useEffect`): Para manejo de estado y efectos secundarios.

---

## Cómo usar este proyecto

1. Clona el repositorio
2. Instala las dependencias
3. Inicia la aplicación 
4. Abre en tu navegador 


## ¿Cómo funciona la aplicación?

La app consume productos de la API pública [DummyJSON](https://dummyjson.com/products).

- Puedes buscar productos por nombre y la lista se actualiza al instante.
- Las estadísticas se calculan dinámicamente con los productos que coinciden en la búsqueda.
- Los productos se presentan visualmente en tarjetas con toda la información relevante.
- El diseño es responsivo y cuenta con animaciones sutiles para una mejor experiencia.

---

## Estructura de componentes

- `ProductList`: Componente encargado de mostrar la lista de productos en tarjetas.
- `StatsPanel`: Componente que muestra todas las estadísticas calculadas según los productos visibles.

---

## Autor

Noelia Soto

