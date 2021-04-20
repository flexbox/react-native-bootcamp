import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface Props {}

const MusicCover = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require(`../../assets/music/metal-gear.jpg`)}
      />
    </View>
  );
};

export default MusicCover;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: 40,
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },
});
