import { useQuery } from "@tanstack/react-query";

export const fetchPlanets = async () => {
  const response = await fetch("https://swapi.py4e.com/api/planets/");
  const data = await response.json();
  return data;
};

export const usePlanets = () => {
  return useQuery({
    queryFn: fetchPlanets,
    queryKey: ["planets"],
  });
};
