"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// require('dotenv').config()

export default function Home() {
  const [games, setGames] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  console.log(process.env);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
      });
  }, []);

  console.log(games);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-24">
        {games.map((game: any) => (
          <div
            key={game.id}
            className="card w-[340px] cursor-pointer bg-base-100 shadow-xl hover:-translate-y-2 hover:shadow-lg hover:shadow-white transition ease-in transition-duration: 3000ms"
          >
            <figure className="h-36 bg-cover" style={{backgroundImage: `url(${game.background_image})`}} />
            <div className="card-body">
              <h2 className="card-title">
                {game.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <div className="w-full h-12 flex flex-wrap justify-start align-start">
                <p className="text-sm text-violet-300">Metacritic: {game.metacritic}</p>
              </div>
              <div className="card-actions justify-start">
              {game.genres.map((gen: {name: string} )=> <div className="badge badge-outline bg-blue-800">{gen.name}</div>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
