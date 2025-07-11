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
import type { MovieType } from "@/types/MovieType";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovies, setSelectedMovies] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("");
        setMovies(res.data);
      } catch (err) {
        console.error("Gagal fetch data movies", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Movie Lists</h1>
      <div className="w-[90%] mx-auto">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4">
            {movies.map((movie) => (
              <Dialog key={movie.id}>
                <DialogTrigger asChild>
                  <Card
                    onClick={() => setSelectedMovies(movie)}
                    className="cursor-pointer hover:scale-105 shadow-lg transition duration-500"
                  >
                    <CardHeader>
                      <CardTitle>{movie.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                      <img
                        src={movie.image.original}
                        alt={movie.name}
                        className="w-50 h-70 rounded ring-2 ring-offset-2 ring-slate-900"
                      />
                      <CardDescription className="flex flex-col text-justify gap-2">
                        <p>
                          <span className="font-bold">Genre: </span>
                          {movie.genres.join(", ")}
                        </p>
                        <p>
                          <span className="font-bold">Rating: </span>
                          {movie.rating.average}
                        </p>
                        <p className="line-clamp-3">
                          {movie.summary
                            .replace(/\u003C/g, "<")
                            .replace(/\u003E/g, ">")
                            .replace(/<[^>]+>/g, "")}
                        </p>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{selectedMovies?.name}</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center">
                    <img
                      src={selectedMovies?.image.original}
                      alt={selectedMovies?.name}
                      className="w-50 rounded ring-2 ring-offset-2 ring-slate-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>
                      <span className="font-bold">Type: </span>
                      {selectedMovies?.type}
                    </p>
                    <p>
                      <span className="font-bold">Genre: </span>
                      {selectedMovies?.genres.join(", ")}
                    </p>
                    <p>
                      <span className="font-bold">Language: </span>
                      {selectedMovies?.language}
                    </p>
                    <p>
                      <span className="font-bold">Rating: </span>
                      {selectedMovies?.rating.average}
                    </p>
                  </div>
                  <DialogDescription className="text-justify">
                    {selectedMovies?.summary
                      .replace(/\u003C/g, "<")
                      .replace(/\u003E/g, ">")
                      .replace(/<[^>]+>/g, "")}
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
