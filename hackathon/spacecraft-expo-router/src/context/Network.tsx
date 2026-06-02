import type { PropsWithChildren } from "react";
import React, { createContext, useContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

interface NetworkContextProps {
  isConnected: boolean | null;
}

const NetworkContext = createContext<NetworkContextProps>(
  {} as NetworkContextProps,
);

export const NetworkProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    NetInfo.fetch().then((state) => {
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
