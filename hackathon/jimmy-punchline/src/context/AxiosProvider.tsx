import React, { createContext, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

import constants from "../constants";

export const AxiosContext = createContext<AxiosInstance>(undefined);

export default function AxiosProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const axiosHeader = useMemo(() => {
    const axiosHeader = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosHeader.interceptors.request.use((config) => {
      const token = constants.GENIUS_API_KEY;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axiosHeader;
  }, []);

  return (
    <AxiosContext.Provider value={axiosHeader}>
      {children}
    </AxiosContext.Provider>
  );
}
