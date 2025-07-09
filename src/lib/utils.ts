import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const posts = [
  {
    id: 1,
    title: "First Post",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis corporis odit maxime explicabo, ratione sunt voluptates omnis dolorum aspernatur nostrum fuga dolores harum reiciendis eius distinctio quasi quidem dignissimos sed.",
  },
  {
    id: 2,
    title: "Second Post",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquam, mollitia exercitationem est nostrum possimus magnam ullam sed provident quaerat nulla blanditiis eum dolor eaque earum aliquid, qui optio soluta?",
  },
  {
    id: 3,
    title: "Third Post",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt enim veritatis natus et deserunt ipsum aut iste numquam tempora aperiam sapiente accusantium optio suscipit dicta quam eos, vel possimus?",
  },
  {
    id: 4,
    title: "fourth Post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum corporis nam fugit nostrum autem eligendi, in quaerat nesciunt illo nulla ipsa expedita tenetur veniam assumenda provident? Quaerat id omnis minima?",
  },
  {
    id: 5,
    title: "Fifth Post",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos commodi error, quisquam omnis ipsam maiores voluptatem ex. Eveniet repellat magnam similique expedita, sequi aspernatur sunt hic tempore pariatur a!",
  },
];
