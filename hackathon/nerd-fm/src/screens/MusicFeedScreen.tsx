import React from "react";
import { View } from "react-native";

import SoundList from "~/components/SoundList";
// import SoundList from '../components/SoundList';

interface Props {}

const MusicFeedScreen = (props: Props) => {
  return (
    <View>
      <SoundList />
    </View>
  );
};

export default MusicFeedScreen;
