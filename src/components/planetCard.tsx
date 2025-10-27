import { useQueries } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getFilm } from "../api/get-film";
import type { PlanetInterface } from "../api/get-planets";

export default function PlanetCard({
  name,
  terrain,
  diameter,
  climate,
  films,
  url,
}: PlanetInterface) {
  const filmList = useQueries({
    queries: films.map((film) => ({
      queryKey: ["film", film],
      queryFn: () => getFilm(film),
      enabled: films.length > 0,
    })),
  });

  const navigate = useNavigate();

  function handleClick(url: string) {
    const id = url.split("/").filter(Boolean).pop();
    navigate(`planet-details/${id}`);
  }

  return (
    <div
      className="border border-zinc-700 hover:bg-zinc-700 transition-colors rounded-md p-4 overflow-hidden bg-zinc-800 hover:border-zinc-500 cursor-pointer"
      onClick={() => handleClick(url)}
    >
      <p>Planet: {name}</p>
      <p>Terrain: {terrain}</p>
      <p>Diameter: {diameter}</p>
      <p>Climate: {climate}</p>
      <p>
        Films:{" "}
        {filmList.map((film) => (
          <p>{film.data?.title}</p>
        ))}
      </p>
    </div>
  );
}
