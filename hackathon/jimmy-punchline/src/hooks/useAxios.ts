import { useContext } from "react";
import { AxiosContext } from "../context/AxiosProvider";

export function useAxios() {
  return useContext(AxiosContext);
}
