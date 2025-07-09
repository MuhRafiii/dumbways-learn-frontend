import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/helpers/formatRupiah";
import { products } from "@/lib/utils";
import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h1 className="w-2/3 text-xl text-center font-semibold bg-slate-200 rounded-lg p-1">
        {product.name}
      </h1>
      <img src={product.image} alt={product.name} className="w-50 h-50" />
      <div className="flex flex-col gap-4 p-4 bg-slate-200 rounded-lg">
        <p>
          <span className="font-semibold">Price: </span>
          {formatRupiah(product.price)}
        </p>
        <div>
          <p className="font-semibold mb-2">Description:</p>
          <p className="text-justify">{product.description}</p>
        </div>
      </div>
      <Button className="w-1/2 bg-slate-600 cursor-pointer hover:bg-slate-400">
        Add to Cart
      </Button>
    </div>
  );
}
