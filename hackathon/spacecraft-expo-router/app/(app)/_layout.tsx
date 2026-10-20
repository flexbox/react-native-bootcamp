import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/context/AuthContext";

export default function AppLayout() {
  const { user } = useAuth();

  // Protected route check - redirect to login if not authenticated
  if (!user) {
    return <Redirect href="/" />;
  }

  // User is authenticated, render the app with tabs
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
