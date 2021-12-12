import { useState } from "react";
import { useQuery } from "react-query";

export const usePilot = () => {
  const [page, setPage] = useState(1);

  const fetchData = (page = 0) =>
    fetch("https://swapi.py4e.com/api/people/?page=" + page).then((res) =>
      res.json()
    );

  const query = useQuery(["pilots", page], () => fetchData(page), {
    keepPreviousData: true,
  });

  return { query, setPage, page };
};
