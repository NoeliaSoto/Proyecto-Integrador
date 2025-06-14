function ProductList({ products }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'USD',
    }).format(price);

  return (
    <section className="container mx-auto max-w-3xl p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lista de Productos</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white dark:bg-gray-700 shadow p-4 rounded fade-in text-gray-800 dark:text-white"
          >
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p>Precio: {formatPrice(product.price)}</p>
            <p>Descuento: {product.discountPercentage.toFixed(2)}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Categoría: {product.category}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
