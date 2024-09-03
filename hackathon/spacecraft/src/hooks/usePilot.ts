import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const usePilot = () => {
  const [page, setPage] = useState(1);

  const fetchData = (currentPage = 0) =>
    fetch("https://swapi.py4e.com/api/people/?page=" + currentPage).then(
      (result) => result.json(),
    );

  const query = useQuery({
    placeholderData: keepPreviousData,
    queryFn: () => fetchData(page),
    queryKey: ["pilots", page],
  });

  return { page, query, setPage };
};
