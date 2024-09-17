import { StatusBar, StyleSheet, Text, View } from "react-native";

// import { default as data } from "../../api/data.json";

export const StarshipFeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Text>{JSON.stringify(data)}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
