function SearchBar({ value, onChange }) { 
  return (
    <input
      className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2 rounded w-full max-w-md mx-auto block mb-4"
      type="text"
      placeholder="Buscar producto"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;