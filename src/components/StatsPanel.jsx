function StatsPanel({ total, max, min, longTitles, totalPrice, avgDiscount, highStock, highRating, avgRating }) {
  return (
    <section className="container mx-auto max-w-3xl p-6 mb-6 bg-slate-100 rounded-lg shadow fade-in">
      <header className="mb-4">
        <h2 className="text-blue-900 text-2xl font-semibold">Resumen de Estadísticas</h2>
      </header>
      <ul className="text-gray-700 space-y-1">
        <li><span className="font-medium">Cantidad de productos:</span> <strong>{total}</strong></li>
        <li><span className="font-medium">Producto más caro:</span> <strong>{max ? `${max.title} ($${max.price})` : 'N/A'}</strong></li>
        <li><span className="font-medium">Producto más barato:</span> <strong>{min ? `${min.title} ($${min.price})` : 'N/A'}</strong></li>
        <li><span className="font-medium">Títulos extensos (&gt; 20 caracteres):</span> <strong>{longTitles}</strong></li>
        <li><span className="font-medium">Suma total de precios:</span> <strong>${totalPrice}</strong></li>
        <li><span className="font-medium">Descuento promedio:</span> <strong>{avgDiscount}%</strong></li>
        <li><span className="font-medium">Productos con stock &gt; 50:</span> <strong>{highStock}</strong></li>
        <li><span className="font-medium">Productos con rating &gt; 4.5:</span> <strong>{highRating}</strong></li>
        <li><span className="font-medium">Promedio de rating:</span> <strong>{avgRating}</strong></li>
      </ul>
    </section>
  );
}

export default StatsPanel;