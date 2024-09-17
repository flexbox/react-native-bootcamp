import type { PropsWithChildren } from "react";

import React, { createContext, useContext, useState } from "react";

interface AuthenticationContextProps {
  setUser: (user: boolean) => void;
  user: boolean;
}

const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps,
);

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<boolean>(false);
  // console.log("file: Authentication.tsx ~ line 19 ~ user", user);

  return (
    <AuthenticationContext.Provider value={{ setUser, user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
