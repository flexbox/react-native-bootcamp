import { useQueries } from "react-query";

export const fetchStarships = async () => {
  const response = await fetch("https://swapi.py4e.com/api/starships/");
  const data = await response.json();
  return data;
};

const fetchStarshipById = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useStarships = (starships: string[]) => {
  const userQueries = useQueries(
    starships.map((starship, index) => {
      return {
        queryKey: ["starship", `starship-${index}`],
        queryFn: () => fetchStarshipById(starship),
      };
    })
  );

  return userQueries;
};
