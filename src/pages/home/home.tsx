import { useQuery } from "@tanstack/react-query";
import PlanetCard from "../../components/planetCard";
import { getPlanets } from "../../api/get-planets";

export default function Home() {
  const { data: planets } = useQuery({
    queryFn: getPlanets,
    queryKey: ["planets"],
  });

  console.log(planets);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {planets &&
          planets.results.map((planet) => {
            return (
              <PlanetCard
                key={planet.name}
                terrain={planet.terrain}
                name={planet.name}
                climate={planet.climate}
                films={planet.films}
                diameter={planet.diameter}
              />
            );
          })}
      </div>
    </div>
  );
}
