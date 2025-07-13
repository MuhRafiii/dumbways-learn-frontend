export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  cartLoading: boolean;
};
