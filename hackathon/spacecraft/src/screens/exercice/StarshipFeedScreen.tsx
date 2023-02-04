import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View } from "react-native";

// import { default as data } from "../../api/data.json";

export const StarshipFeedScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/*<Text>{JSON.stringify(data)}</Text>*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
