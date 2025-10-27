import { api } from "../lib/axios";

interface PlanetDetails {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diametre: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  residents: Residents[];
}

interface Residents {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  species: Specie[];
  vehicles: Vehicle[];
}

interface Specie {
  name: string;
}

interface Vehicle {
  name: string;
  model: string;
}

export async function getPlanetDetails(planetId: string) {
  const response = await api.get<PlanetDetails>(`planets/${planetId}`);

  return response.data;
}
