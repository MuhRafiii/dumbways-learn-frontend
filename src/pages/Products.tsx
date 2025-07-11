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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProductType } from "@/types/ProductType";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

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
              </DialogContent>
            </Dialog>
          ))}
        </ul>
      )}
    </div>
  );
}
