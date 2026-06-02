import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/context/AuthContext";

export default function AuthLayout() {
  const { user } = useAuth();

  // If already authenticated, redirect to the app
  if (user) {
    return <Redirect href="/starships" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="terms"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
