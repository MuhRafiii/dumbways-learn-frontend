import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCart } from "@/hooks/useCart";
import type { ProductType } from "@/types/ProductType";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const { cart, addItem, updateQuantity, removeItem, cartLoading } = useCart();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Gagal fetch data products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleAddToCart = () => {
    addItem({ ...selectedProduct!, quantity: 1 });
  };

  const handleIncrease = (id: number, currentQty: number) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrease = (id: number, currentQty: number) => {
    if (currentQty === 1) {
      removeItem(id); // hapus jika qty 1 dan dikurangi
    } else {
      updateQuantity(id, currentQty - 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Products</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {products.map((product) => (
            <Dialog key={product.id}>
              <DialogTrigger asChild>
                <Card
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer hover:shadow-md transition"
                >
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-50 h-50"
                    />
                    <p>
                      <span className="font-bold">Price: </span>${product.price}
                    </p>
                    <CardDescription className="text-justify line-clamp-3">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{selectedProduct?.title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center">
                  <img
                    src={selectedProduct?.image}
                    alt={selectedProduct?.title}
                    className="w-50 h-50"
                  />
                </div>
                <div className="flex flex-col">
                  <p>
                    <span className="font-bold">Price: </span>$
                    {selectedProduct?.price}
                  </p>
                  <p>
                    <span className="font-bold">Category: </span>
                    {selectedProduct?.category}
                  </p>
                  <p>
                    <span className="font-bold">Rating: </span>
                    {selectedProduct?.rating.rate}
                  </p>
                  <p>
                    <span className="font-bold">Count: </span>
                    {selectedProduct?.rating.count}
                  </p>
                </div>
                <DialogDescription className="text-justify">
                  {selectedProduct?.description}
                </DialogDescription>
                <DialogFooter>
                  {cart.find((item) => item.id === selectedProduct?.id) ? (
                    cart.map((item) => {
                      if (item.id === selectedProduct?.id) {
                        return (
                          <div className="flex items-center gap-2">
                            {cartLoading && <p>Loading...</p>}
                            <button
                              onClick={() =>
                                handleDecrease(item.id, item.quantity)
                              }
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                              disabled={cartLoading}
                            >
                              –
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              onClick={() =>
                                handleIncrease(item.id, item.quantity)
                              }
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                              disabled={cartLoading}
                            >
                              +
                            </button>
                          </div>
                        );
                      }
                    })
                  ) : (
                    <div className="flex items-center gap-2">
                      {cartLoading && <p>Loading...</p>}
                      <Button onClick={handleAddToCart} disabled={cartLoading}>
                        Add to Cart
                      </Button>
                    </div>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </ul>
      )}
    </div>
  );
}
