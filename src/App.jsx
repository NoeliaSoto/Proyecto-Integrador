import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
// Importamos componentes propios 
import StatsPanel from './components/Statspanel'
import ProductList from './components/productlist'

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  //Filtrar productos de la API
  const filteredproducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Evitar error en reduce cuando el array está vacío
  const maxProduct = filteredproducts.length > 0
    ? filteredproducts.reduce((prev, current) => (prev.price > current.price ? prev : current))
    : null;

  const minProduct = filteredproducts.length > 0
    ? filteredproducts.reduce((prev, current) => (prev.price < current.price ? prev : current))
    : null;

  const totalProducts = filteredproducts.length;  //Total de productos
  const longTitlesCount = filteredproducts.filter(p => p.title.length > 20).length; // Contar títulos largos
  const totalPrice = filteredproducts.reduce((sum, p) => sum + p.price, 0).toFixed(2); // Sumar precios
  const avgDiscount = filteredproducts.length > 0
    ? filteredproducts.reduce((sum, p) => sum + p.discountPercentage, 0) / filteredproducts.length
    : 0; // Promedio de descuento

  return (
    <>
      <h1 className="text-3xl text-blue-600 font-bold text-center my-6">
        Proyecto Integrador
      </h1>

      <input
        className="border p-2 rounded w-full max-w-md mx-auto block mb-4"
        type="text"
        placeholder="Buscar producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4 mx-auto block"
        onClick={() => setShow(!show)}
      >
        {show ? "Ocultar" : "Mostrar"}
      </button>

      {/* Mensajes de carga y error */}
      {loading && <p className="text-center">Cargando productos...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      {/* Mostrar panel solo si no está cargando y no hay error */}
      {!loading && !error && show && (
        <StatsPanel
          total={totalProducts}
          max={maxProduct}
          min={minProduct}
          longTitles={longTitlesCount}
          totalPrice={totalPrice}
          avgDiscount={avgDiscount.toFixed(2)}
        />
      )}

      <div className="transition-opacity duration-500 ease-in-out">
        <ProductList products={filteredproducts} />
      </div>

      {/* Renderización condicional */}
      {!loading && !error && filteredproducts.length === 0 && (
        <div className="text-red-600 text-center mt-4">
          No se encontraron productos
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10">
        Proyecto Integrador - Noelia Soto
      
      </footer>
    </>
  )
}

export default App
