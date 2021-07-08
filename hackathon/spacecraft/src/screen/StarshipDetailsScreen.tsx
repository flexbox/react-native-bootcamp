import React from "react";
import { View, Text } from "react-native";

interface StarshipDetailsScreenProps {}

const StarshipDetailsScreen = (props: StarshipDetailsScreenProps) => {
  console.log(
    "file: StarshipDetailsScreen.tsx ~ line 7 ~ StarshipDetailsScreen ~ props",
    props
  );
  return (
    <View>
      <Text>OLA</Text>
      <Text>OLA</Text>
      <Text>OLA</Text>
      <Text>OLA</Text>
      <Text>OLA</Text>
      <Text>OLA</Text>
      <Text>OLA</Text>
      <Text>OLA</Text>
    </View>
  );
};

export default StarshipDetailsScreen;
