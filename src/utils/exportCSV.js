// src/utils/exportCSV.js
export function exportToCSV(data, filename = 'productos.csv') {
  if (!data || data.length === 0) {
    alert("No hay datos para exportar.");
    return;
  }

  const csv = [
    Object.keys(data[0]).join(','), // encabezados
    ...data.map(row => Object.values(row).join(','))
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}
