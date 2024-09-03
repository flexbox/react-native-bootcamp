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

  useEffect(() => {
    // use `NetInfo.addEventListener` to listen to network status changes
    // use `NetInfo.fetch` to get the current network status
    // store the network status in the `isConnected` state
    return () => {
      // unsubscribe from the network status listener
    };
  }, [isConnected]);

  return {
    /* Add `NetworkContext.Provider` with the connection status value */
  };
};

export const useNetwork = () => useContext(NetworkContext);
