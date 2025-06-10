import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

function ChartsPanel({ products }) {

    const categoryCounts = Object.values(products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || { category: product.category, count: 0 };
    acc[product.category].count += 1;
    return acc;
    },{}));

const priceEvolution = products.map(p => ({
    day: `Día ${p.id}`,
    price: p.price
  }));

const stockData = [
    { name: 'Stock > 50', value: products.filter(p => p.stock > 50).length },
    { name: 'Stock ≤ 50', value: products.filter(p => p.stock <= 50).length }
  ];

const COLORS = ['#3182CE', '#E53E3E'];

  return (
    <section className="container mx-auto max-w-5xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow fade-in mb-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Visualización de Datos</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico de barras */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Productos por Categoría</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryCounts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de líneas */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Evolución de Precios (Simulada)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceEvolution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#E53E3E" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Distribución de Stock</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {stockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default ChartsPanel;