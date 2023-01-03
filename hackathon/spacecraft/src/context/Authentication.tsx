import React, { createContext, useContext, useState } from "react";

interface AuthenticationContextProps {
  user: boolean;
  setUser: (user: boolean) => void;
}

const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps
);

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const [user, setUser] = useState<boolean>(false);
  console.log("file: Authentication.tsx ~ line 19 ~ user", user);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
