import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import StatsPanel from './components/Statspanel';
import ProductList from './components/productlist';
import SearchBar from './components/SearchBar';
import ChartsPanel from './components/ChartsPanel';
import { exportToCSV } from './utils/exportCSV';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('');
  const [categories, setCategories] = useState([]);

  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [darkMode, setDarkMode] = useState(false); // 👈 Estado para modo oscuro

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
        setCategories(['Todas', ...new Set(res.data.products.map(p => p.category))]);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredproducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'Todas' || p.category === category)
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating-asc') return a.rating - b.rating;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return 0;
    });

  const maxProduct = filteredproducts.length > 0
    ? filteredproducts.reduce((prev, current) => (prev.price > current.price ? prev : current))
    : null;

  const minProduct = filteredproducts.length > 0
    ? filteredproducts.reduce((prev, current) => (prev.price < current.price ? prev : current))
    : null;

  const totalProducts = filteredproducts.length;
  const longTitlesCount = filteredproducts.filter(p => p.title.length > 20).length;
  const totalPrice = filteredproducts.reduce((sum, p) => sum + p.price, 0).toFixed(2);
  const avgDiscount = filteredproducts.length > 0
    ? filteredproducts.reduce((sum, p) => sum + p.discountPercentage, 0) / filteredproducts.length
    : 0;

  const highStockCount = filteredproducts.filter(p => p.stock > 50).length;
  const highRatingCount = filteredproducts.filter(p => p.rating > 4.5).length;
  const avgRating = filteredproducts.length > 0
    ? (filteredproducts.reduce((sum, p) => sum + p.rating, 0) / filteredproducts.length).toFixed(2)
    : 0;

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <h1 className="text-3xl text-blue-600 font-bold text-center my-6">
          Tienda Selecta
        </h1>

        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <select
            className="border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="border p-2 rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Ordenar por...</option>
            <option value="price-asc">Precio ↑</option>
            <option value="price-desc">Precio ↓</option>
            <option value="rating-asc">Rating ↑</option>
            <option value="rating-desc">Rating ↓</option>
          </select>
        </div>

        {/* Botón para alternar modo oscuro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 text-white px-4 py-2 rounded mx-auto block mb-4"
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>

        {/* Botón para mostrar/ocultar resumen */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4 mx-auto block"
          onClick={() => setShow(!show)}
        >
          {show ? "Ocultar Resumen" : "Mostrar Resumen"}
        </button>

        {/* Botón para exportar a CSV */}
        <button
          onClick={() => exportToCSV(filteredproducts)}
          className="bg-green-600 text-white px-4 py-2 rounded mx-auto block mb-6"
        >
          Exportar a CSV
        </button>

        {loading && <p className="text-center">Cargando productos...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}

        {!loading && !error && show && (
          <StatsPanel
            total={totalProducts}
            max={maxProduct}
            min={minProduct}
            longTitles={longTitlesCount}
            totalPrice={totalPrice}
            avgDiscount={avgDiscount.toFixed(2)}
            highStock={highStockCount}
            highRating={highRatingCount}
            avgRating={avgRating}
          />
        )}

        <div className="transition-opacity duration-500 ease-in-out">
          <ProductList products={filteredproducts} />
        </div>

        {!loading && !error && filteredproducts.length === 0 && (
          <div className="text-red-600 text-center mt-4">
            No se encontraron productos
          </div>
        )}

        <ChartsPanel products={filteredproducts} />

        <footer className="text-center text-gray-500 mt-10">
          Proyecto Integrador - Noelia Soto
        </footer>
      </div>
    </div>
  );
}

export default App;
