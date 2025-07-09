import { useEffect, useState } from "react";
import { dummyProducts, fetchProducts } from "../api/product";
import { useDebounce } from "../hooks/useDebounce";
import "./components.css";

export function SearchProduct() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);
  const [products, setProducts] = useState(dummyProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (debouncedInput.trim() === "") {
      setProducts(dummyProducts);
      return;
    }

    setLoading(true);
    setProducts([]);
    fetchProducts(debouncedInput).then((result) => {
      setProducts(result);
      setLoading(false);
    });
  }, [debouncedInput]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="home">
      <h2>Search Product</h2>
      <input
        className="search"
        type="text"
        placeholder="Cari produk..."
        value={input}
        onChange={handleOnChange}
      />

      {loading && <p>Loading...</p>}
      {!loading && debouncedInput && products.length === 0 && (
        <p>Tidak ada produk ditemukan.</p>
      )}

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
