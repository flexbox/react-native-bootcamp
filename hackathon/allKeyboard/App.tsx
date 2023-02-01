import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { AllKeyboardType } from "./components/AllKeyboardType";
import AllReturnKeyType from "./components/AllReturnKeyType";
import { Misc } from "./components/Misc";

const App = () => {
  const [activeTabValue, setActiveTabValue] = React.useState("keyboardType");

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <SegmentedButtons
          value={activeTabValue}
          onValueChange={setActiveTabValue}
          style={{ marginBottom: 24 }}
          buttons={[
            {
              value: "keyboardType",
              label: "keyboardType",
            },
            {
              value: "returnKeyType",
              label: "returnKeyType",
            },
            { value: "misc", label: "misc" },
          ]}
        />

        {activeTabValue === "keyboardType" && <AllKeyboardType />}
        {activeTabValue === "returnKeyType" && <AllReturnKeyType />}
        {activeTabValue === "misc" && <Misc />}
        <View style={styles.separator} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  separator: {
    height: 256,
  },
});

export default App;
