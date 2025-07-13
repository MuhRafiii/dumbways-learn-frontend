import type { Rating } from "./ProductRatingType";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
