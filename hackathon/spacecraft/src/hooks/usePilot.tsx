import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const usePilot = () => {
  const [page, setPage] = useState(1);

  const fetchData = (currentPage = 0) =>
    fetch("https://swapi.py4e.com/api/people/?page=" + currentPage).then(
      (res) => res.json()
    );

  const query = useQuery(["pilots", page], () => fetchData(page), {
    keepPreviousData: true,
  });

  return { query, setPage, page };
};
