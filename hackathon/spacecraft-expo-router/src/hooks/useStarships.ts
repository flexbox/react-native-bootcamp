import { useQuery } from "@tanstack/react-query";

export async function fetchStarships() {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/starships/`);
    const json = await response.json();
    return json;
  } catch {
    throw new Error("Something bad happened with the api…");
  }
}

export function useStarships() {
  return useQuery({
    queryKey: ["starships"],
    queryFn: fetchStarships,
  });
}
