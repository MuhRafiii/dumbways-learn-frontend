import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const products = [
  {
    id: 1,
    name: "Laptop",
    image: "../../public/laptop.png",
    price: 8000000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis odit maxime explicabo, ratione sunt voluptates quia natus. Quos, quibusdam.",
  },
  {
    id: 2,
    name: "Router",
    image: "../../public/router.png",
    price: 750000,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquam, mollitia exercitationem est nostrum possimus, atque quod ducimus dolores quia voluptatibus. Quos, quibusdam.",
  },
  {
    id: 3,
    name: "Mouse",
    image: "../../public/mouse.png",
    price: 300000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt enim veritatis natus et deserunt ipsum aut iste numquam. Quos, quibusdam.",
  },
  {
    id: 4,
    name: "Printer",
    image: "../../public/printer.png",
    price: 5000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum corporis nam fugit nostrum autem eligendi, in quaerat nesciunt illo nulla ipsa expedita tenetur veniam assumenda provident? Quaerat id omnis minima?",
  },
  {
    id: 5,
    name: "Adapter USB",
    image: "../../public/adapter.png",
    price: 65000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos commodi error, quisquam omnis ipsam. Quisquam, voluptatibus. Quos, quibusdam.",
  },
];
