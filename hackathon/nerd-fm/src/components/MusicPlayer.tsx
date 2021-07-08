import React, { useState } from 'react';
import { Audio } from 'expo-av';
import { Button } from 'react-native-paper';

const MusicPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/music/Harry-Gregson-Williams-Metal-Gear-Solid-Main-Theme.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopSound() {
    await sound.stopAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <>
      {sound ? (
        <Button onPress={stopSound}>Stop Sound</Button>
      ) : (
        <Button onPress={playSound}>Play Sound</Button>
      )}
    </>
  );
};

export default MusicPlayer;
