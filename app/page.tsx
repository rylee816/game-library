"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type game = {
  id: string;
  backgroundImage: string;
  name: string;
  metacritic?: string;
  rating?: string;
  gen?: string;
}


export default function Home() {
  const [games, setGames] = useState<Array <game>  | undefined>(undefined)
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2019-09-01,2019-10-30&platforms=18,1,7`,
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
      });
  }, []);


  return (
    <main className="-mb-12 flex min-h-screen flex-col items-center justify-between py-24">
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {games?.map((game: any) => (
          <div
            key={game.id}
            className="transition-duration: 3000ms card h-96 w-[340px] cursor-pointer bg-base-100 shadow-xl transition ease-in hover:-translate-y-2 hover:shadow-lg hover:shadow-white"
          >
            <figure
              className="h-36 bg-cover"
              style={{ backgroundImage: `url(${game.background_image})` }}
            />
            <div className="card-body">
              <h2 className="card-title">
                {game.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <div className="flex py-2">
                <p className="text-sm text-violet-300">
                  Metacritic: {game.metacritic}
                </p>
                <p className="text-sm text-violet-300">
                  Rating: {game.rating.toFixed(1)}/5
                </p>
              </div>
              <div className="card-actions mt-auto h-12 justify-start">
                {game.genres.map((gen: { name: string }) => (
                  <div className="badge badge-outline bg-blue-800">
                    {gen.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
