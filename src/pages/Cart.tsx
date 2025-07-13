import { useCart } from "../hooks/useCart";

export function Cart() {
  const { cart, updateQuantity, removeItem, cartLoading } = useCart();

  const handleIncrease = (id: number, currentQty: number) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrease = (id: number, currentQty: number) => {
    if (currentQty === 1) {
      removeItem(id);
    } else {
      updateQuantity(id, currentQty - 1);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      {cartLoading ? (
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
          <p>Loading...</p>
        </div>
      ) : (
        <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      )}

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow-sm"
            >
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold">{item.title}</h2>
                <img src={item.image} alt={item.title} className="w-20" />
                <p className="text-sm text-gray-600">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item.id, item.quantity)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                  disabled={cartLoading}
                >
                  –
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => handleIncrease(item.id, item.quantity)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                  disabled={cartLoading}
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={cartLoading}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
