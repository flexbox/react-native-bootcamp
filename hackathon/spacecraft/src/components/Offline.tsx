import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Colors, Text } from "react-native-paper";

const Offline = () => {
  return (
    <View>
      <Text>{/* Add a `NetworkConsumer` and `ActivityIndicator`  */}</Text>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: Colors.red800,
  },
});
