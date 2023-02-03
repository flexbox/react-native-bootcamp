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
      <SegmentedButtons
        value={activeTabValue}
        onValueChange={setActiveTabValue}
        style={{ paddingHorizontal: 12 }}
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
      <ScrollView style={styles.container}>
        <View style={styles.separatorSmall} />
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
  separatorSmall: {
    height: 24,
  },
  separator: {
    height: 256,
  },
});

export default App;
