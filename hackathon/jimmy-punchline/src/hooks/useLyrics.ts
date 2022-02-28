import { useQuery } from "react-query";

const fetchLyricsByArtistTitle = async (artist :string, title: string) => {
  const result = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const json = await result.json();
  return json;
};

export function useLyrics(artist :string, title: string) {
  return useQuery(["lyrics", artist, title], () => fetchLyricsByArtistTitle(artist, title));
}
