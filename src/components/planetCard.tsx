import type { PlanetInterface } from "../api/get-planets";

export default function PlanetCard({
  name,
  terrain,
  diameter,
  climate,
  films,
}: PlanetInterface) {
  return (
    <div className="border border-zinc-700 hover:bg-zinc-700 transition-colors rounded-md p-4 overflow-hidden bg-zinc-800 hover:border-zinc-500 cursor-pointer">
      <p>Planet: {name}</p>
      <p>Terrain: {terrain}</p>
      <p>Diameter: {diameter}</p>
      <p>Climate: {climate}</p>
      <p>Films: {films}</p>
    </div>
  );
}
