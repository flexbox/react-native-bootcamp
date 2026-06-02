import { useQuery } from "@tanstack/react-query";

export async function fetchPlanets() {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/planets/`);
    const json = await response.json();
    return json;
  } catch {
    throw new Error("Something bad happened with the api…");
  }
}

export function usePlanets() {
  return useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
  });
}
