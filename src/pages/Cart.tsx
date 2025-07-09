import { Navbar } from "@/components/Navbar";

export function Cart() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <Navbar />
      <h2 className="text-4xl font-bold">Cart Page</h2>
      <p>This is the Cart page. Click on a product to see its details.</p>
    </div>
  );
}
