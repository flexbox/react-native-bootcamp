import { Alert, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

export default {
  title: "Button",
};

export const _Button = () => (
  <View style={{ flex: 1, justifyContent: "space-around", padding: 16 }}>
    <Button
      mode="contained"
      onPress={() => Alert.alert("Pressed!")}
    >
      contained
    </Button>
    <Button
      mode="contained-tonal"
      onPress={() => Alert.alert("Pressed!")}
    >
      contained-tonal
    </Button>
    <Button
      mode="elevated"
      onPress={() => Alert.alert("Pressed!")}
    >
      elevated
    </Button>
    <Button
      mode="outlined"
      onPress={() => Alert.alert("Pressed!")}
    >
      outlined
    </Button>
    <Button
      mode="text"
      onPress={() => Alert.alert("Pressed!")}
    >
      text
    </Button>
    <Button
      icon="camera"
      mode="text"
      onPress={() => Alert.alert("Pressed!")}
    >
      <ActivityIndicator />
      text
    </Button>
    <Button
      icon="arrow-u-up-left"
      mode="text"
      onPress={() => Alert.alert("Pressed!")}
    >
      text
    </Button>
    <Button
      icon="backup-restore"
      mode="text"
      onPress={() => Alert.alert("Pressed!")}
    >
      text
    </Button>
    <Button
      icon="battery-charging-medium"
      mode="text"
      onPress={() => Alert.alert("Pressed!")}
    >
      text
    </Button>
  </View>
);

export const _ButtonSizes = () => (
  <View style={{ flex: 1, justifyContent: "space-around", padding: 16 }}>
    <Button onPress={() => Alert.alert("Pressed!")}>small</Button>
    <Button
      compact={true}
      onPress={() => Alert.alert("Pressed!")}
    >
      medium
    </Button>
  </View>
);
