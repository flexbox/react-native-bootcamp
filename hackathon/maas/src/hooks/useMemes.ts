import { useQuery } from "react-query";

const fetchData = async () => {
  const result = await fetch("https://api.imgflip.com/get_memes/");
  const json = await result.json();
  return json;
};

export const useMemes = () => {
  return useQuery(["memes"], fetchData);
};
