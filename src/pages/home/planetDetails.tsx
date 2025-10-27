import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlanetDetails } from "../../api/get-planet-details";

export default function PlanetDetails() {
  const { id: planetId } = useParams();

  const { data: planetDetails, isLoading } = useQuery({
    queryFn: () => getPlanetDetails(planetId!),
    queryKey: ["planet", planetId],
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h3>{planetDetails!.name}</h3>
        <p>Rotation Period: {planetDetails!.rotation_period}</p>
        <p>Orbitation Period: {planetDetails!.rotation_period}</p>
        <p>Climate: {planetDetails!.climate}</p>
        <p>Gravity: {planetDetails!.gravity}</p>
        <p>Terrain: {planetDetails!.terrain}</p>
        <p>Population: {planetDetails!.population}</p>
      </div>
      <div>
        <h3>Residents</h3>
        {planetDetails!.residents &&
          planetDetails!.residents.map((resident) => (
            <div>
              <p>Name: {resident.name}</p>
              <p>Gender: {resident.gender}</p>
              <p>Eye color: {resident.eye_color}</p>
              <p>Hair color: {resident.hair_color}</p>
              <span>Species</span>
              {resident.species &&
                resident.species.map((specie) => <p>Name: {specie.name}</p>)}
              <span>Vehicles</span>
              {resident.vehicles &&
                resident.vehicles.map((vehicle) => (
                  <>
                    <p>Name: {vehicle.name}</p>
                    <p>Model: {vehicle.model}</p>
                  </>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
