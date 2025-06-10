function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 rounded w-full max-w-md mx-auto block mb-4"
      type="text"
      placeholder="Buscar producto"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;