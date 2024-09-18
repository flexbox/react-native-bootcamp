import type { PropsWithChildren } from "react";

import React, { createContext, useContext, useState } from "react";

interface AuthenticationContextProps {
  setUser: (user: boolean) => void;
  user: boolean;
}

const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps,
);

/**
 * AuthenticationProvider component that provides authentication context to its children.
 *
 * @param {PropsWithChildren} props - The props for the component, including children.
 *
 * @remarks
 * This component uses a boolean state to represent the user's authentication status.
 * The `setUser` function is provided to update the authentication status.
 *
 * @example
 * ```tsx
 * <AuthenticationProvider>
 *   <YourComponent />
 * </AuthenticationProvider>
 * ```
 */
export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<boolean>(false);

  return (
    <AuthenticationContext.Provider value={{ setUser, user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
