import { useQuery } from "react-query";

const fetchLyricsByArtistTitle = async (artist: string, title: string) => {
  const endpoint = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  console.log(
    "file: useLyrics.ts ~ line 5 ~ fetchLyricsByArtistTitle ~ endpoint",
    endpoint
  );

  const result = await fetch(endpoint);
  const json = await result.json();
  return json;
};

export function useLyrics(artist: string, title: string) {
  return useQuery(["lyrics", artist, title], () =>
    fetchLyricsByArtistTitle(artist, title)
  );
}
