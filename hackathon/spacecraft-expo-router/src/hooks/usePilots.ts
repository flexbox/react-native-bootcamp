import { useQuery } from "@tanstack/react-query";

export async function fetchPilots() {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/people/`);
    const json = await response.json();
    return json;
  } catch {
    throw new Error("Something bad happened with the api…");
  }
}

export function usePilots() {
  return useQuery({
    queryKey: ["pilots"],
    queryFn: fetchPilots,
  });
}
