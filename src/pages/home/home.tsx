import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../../api/get-planets";
import PlanetCard from "../../components/planetCard";

export default function Home() {
  const { data: planets } = useQuery({
    queryFn: getPlanets,
    queryKey: ["planets"],
  });

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
                url={planet.url}
              />
            );
          })}
      </div>
    </div>
  );
}
