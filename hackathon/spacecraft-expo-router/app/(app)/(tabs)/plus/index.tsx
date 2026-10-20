import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

import { ScreenContainer } from "@/components/ScreenContainer";
import { useAuth } from "@/context/AuthContext";

export default function PlusScreen() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <ScreenContainer title="Plus">
      <View style={styles.container}>
        <Text variant="headlineMedium">Settings</Text>
        <Text
          variant="bodyMedium"
          style={styles.text}
        >
          More options coming soon...
        </Text>
        <Button
          mode="outlined"
          onPress={handleSignOut}
          style={styles.signOutButton}
          icon="logout"
        >
          Sign Out
        </Button>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  signOutButton: {
    marginTop: 16,
  },
  text: {
    color: "#9CA3AF",
    marginBottom: 32,
    marginTop: 8,
  },
});
