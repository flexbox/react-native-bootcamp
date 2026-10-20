import { Stack } from "expo-router";

export default function PlusLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
