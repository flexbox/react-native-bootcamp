import { useQuery } from "react-query";
import { useAxios } from "./useAxios";

interface IFetchAllProjectsResponse {
  response: any
}

export function useSearch(artist :string) {
  const axios = useAxios();

  return useQuery(["search", artist], async () => {
    const {data} = await axios.get<IFetchAllProjectsResponse>(
      `https://api.genius.com/search\?q\=${artist}`
    )
    return data;
  });
}
