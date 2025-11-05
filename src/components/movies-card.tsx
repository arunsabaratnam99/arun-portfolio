"use client";

import { useEffect, useState } from "react";

interface Movie {
  title: string;
  link: string;
  pubDate: string;
  rating?: string;
  image?: string;
}

export function MoviesCard() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [timestamp] = useState(() => Date.now());

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("/api/letterboxd");
        if (response.ok) {
          const data = await response.json();
          const movieData = data.slice(0, 4);
          console.log("Movies data:", movieData.map((m: Movie) => ({ title: m.title, image: m.image })));
          setMovies(movieData); // Show only 4 movies
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="bg-neutral-900 p-4 h-full rounded-lg flex flex-col text-white transform transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
      <div className="font-bold font-geist-mono uppercase">Movies and TV</div>
      <div className="font-geist text-xl mb-2">Recent Watches.</div>
      <div className="flex gap-2 flex-col overflow-y-auto overflow-x-hidden">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-3 animate-pulse">
                <div className="w-12 h-16 bg-neutral-800 rounded" />
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-3 bg-neutral-800 rounded w-3/4" />
                  <div className="h-2 bg-neutral-800 rounded w-1/2" />
                  <div className="h-2 bg-neutral-800 rounded w-1/3" />
                </div>
              </div>
            ))}
          </>
        ) : movies.length === 0 ? (
          <div className="text-neutral-500 text-sm">
            No recent movies found
          </div>
        ) : (
          movies.map((movie, idx) => (
            <div key={idx} className="relative flex w-full">
              <a
                href={movie.link}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 group hover:cursor-crosshair w-full min-w-0"
                onMouseEnter={() => setHoveredMovie(idx)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                {movie.image && (
                  <div className="w-12 h-16 overflow-hidden rounded flex-shrink-0">
                    <img
                      key={`${movie.title}-${idx}`}
                      src={`/api/image-proxy?url=${encodeURIComponent(movie.image)}&t=${timestamp}&id=${idx}`}
                      alt={movie.title}
                      width="48"
                      height="64"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      onError={(e) => {
                        // Hide if image fails to load
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="font-geist-mono text-xs text-white group-hover:underline truncate">
                    {movie.title}
                  </div>
                  {movie.rating && (
                    <div className="text-neutral-400 text-xs truncate">
                      Arun rated {movie.rating}
                    </div>
                  )}
                  <div className="text-neutral-500 text-xs truncate">
                    {movie.pubDate}
                  </div>
                </div>
              </a>
              {hoveredMovie === idx && (
                <div className={`hidden md:block absolute left-0 bg-neutral-800 text-white text-xs px-2 py-1 rounded z-50 pointer-events-none border border-neutral-700 animate-in fade-in duration-200 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] ${
                  idx === 0
                    ? "top-full mt-2 slide-in-from-top-1"
                    : "bottom-full mb-2 slide-in-from-bottom-1"
                }`}>
                  Open review
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
