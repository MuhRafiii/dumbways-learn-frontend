type Image = {
  medium: string;
  original: string;
};

export type MovieType = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  summary: string;
  image: Image;
  rating: {
    average: number;
  };
};
