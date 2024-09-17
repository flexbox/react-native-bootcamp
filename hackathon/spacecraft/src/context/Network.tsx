import type { PropsWithChildren } from "react";

import NetInfo from "@react-native-community/netinfo";
import React, { createContext, useContext, useEffect, useState } from "react";

interface NetworkContextProps {
  isConnected: boolean | null;
}

const NetworkContext = createContext<NetworkContextProps>(
  {} as NetworkContextProps,
);

export const NetworkProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);
  // console.log("file: Network.tsx ~ line 19 ~ isConnected", isConnected);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    });

    NetInfo.fetch().then((state) => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => useContext(NetworkContext);
