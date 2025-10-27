import { api } from "../lib/axios";

export interface GetPlanetsResponse {
  results: PlanetInterface[];
}

export interface PlanetInterface {
  name: string;
  terrain: string;
  diameter: string;
  climate: string;
  films: string[];
}

export async function getPlanets() {
  const response = await api.get<GetPlanetsResponse>("planets");

  return response.data;
}
