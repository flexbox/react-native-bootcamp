import { useQuery } from "react-query";

const fetchData = async () => {
  const result = await fetch("https://swapi.dev/api/people/");
  const json = await result.json();
  return json;
};

export const usePilot = () => {
  return useQuery("pilots", fetchData);
};
