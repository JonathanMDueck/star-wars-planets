import axios from "axios";

interface Film {
  title: string;
}

export async function getFilm(url: string) {
  const response = await axios.get<Film>(url);

  return response.data;
}
