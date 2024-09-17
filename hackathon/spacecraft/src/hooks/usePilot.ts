import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const usePilot = () => {
  const [page, setPage] = useState(1);

  const fetchData = (currentPage = 0) =>
    fetch("https://swapi.py4e.com/api/people/?page=" + currentPage).then(
      (result) => result.json(),
    );

  const query = useQuery({
    queryKey: ["pilots", page],
    queryFn: () => fetchData(page),
    placeholderData: keepPreviousData,
  });

  return { page, query, setPage };
};
