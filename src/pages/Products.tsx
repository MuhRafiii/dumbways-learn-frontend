import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatRupiah } from "@/helpers/formatRupiah";
import { products } from "@/lib/utils";
import { Link, Outlet } from "react-router-dom";

export function Products() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <Navbar />
      <h2 className="text-4xl font-bold">Products Page</h2>
      <p>This is the Products page. Click on a product to see its details.</p>
      <div className="w-10/12 flex flex-col items-center gap-4 bg-slate-300 rounded-lg shadow-lg p-8">
        <h4 className="text-3xl font-semibold mb-4">Products List</h4>
        <ul className="mb-4 flex flex-wrap gap-8 justify-center">
          {products.map((product) => (
            <li key={product.id} className="shadow-lg">
              <Link to={product.id.toString()}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="w-60 hover:scale-105 transition duration-300">
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-30 h-30"
                        />
                        <p>
                          <span className="font-semibold">Price: </span>
                          {formatRupiah(product.price)}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <Outlet />
                  </DialogContent>
                </Dialog>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
