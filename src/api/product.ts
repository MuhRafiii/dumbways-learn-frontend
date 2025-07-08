export const dummyProducts = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Printer" },
  { id: 5, name: "Monitor" },
];

export async function fetchProducts(
  keyword: string
): Promise<{ id: number; name: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = dummyProducts.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
      resolve(filtered);
    }, 1000);
  });
}
