import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

type AuthContextType = {
  user: boolean;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const signIn = async () => {
    await SecureStore.setItemAsync("userToken", "authenticated");
    setUser(true);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
    setUser(false);
  };

  // Check for existing token on app load
  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("userToken");
      setUser(!!token);
      setIsLoading(false);
    };
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
