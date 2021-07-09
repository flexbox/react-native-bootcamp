import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://api.imgflip.com/get_memes/");
  const json = await res.json();
  return json;
};

export const useMemes = () => {
  return useQuery(["memes"], fetchData);
};
