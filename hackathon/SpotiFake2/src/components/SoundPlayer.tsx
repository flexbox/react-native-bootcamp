import React, { useState } from 'react';
import { Audio } from 'expo-av';
import { Button } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';

interface Props {}

const SoundPlayer = (props: Props) => {
  const [sound, setSound] = useState();

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

  const PlayIcon = (props) => (
    <Feather {...props} name="play" size={18} color="white" />
  );
  const StopIcon = (props) => (
    <Feather {...props} name="square" size={18} color="white" />
  );

  return (
    <>
      {sound ? (
        <Button onPress={stopSound} accessoryLeft={StopIcon}>
          Stop Sound
        </Button>
      ) : (
        <Button onPress={playSound} accessoryLeft={PlayIcon}>
          Play Sound
        </Button>
      )}
    </>
  );
};

export default SoundPlayer;
