import type { PeopleProps } from "api/types";

import { useInfiniteQuery } from "@tanstack/react-query";

interface PeoplePage {
  count: number;
  next: null | string;
  previous: null | string;
  results: PeopleProps[];
}

const fetchPilots = async (url: string): Promise<PeoplePage> => {
  const response = await fetch(url);
  return response.json();
};

export const usePilot = () => {
  return useInfiniteQuery({
    initialPageParam: "https://swapi.py4e.com/api/people/?page=1",
    queryFn: ({ pageParam }) => fetchPilots(pageParam),
    queryKey: ["pilots"],
    // `next` is null on the last page, which stops fetching
    getNextPageParam: (lastPage) => lastPage.next,
  });
};
