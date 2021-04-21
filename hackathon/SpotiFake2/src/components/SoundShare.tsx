import { Button } from '@ui-kitten/components';
import React from 'react';
import { Share } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {}

const SoundShare = (props: Props) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const ShareIcon = (props) => (
    <Feather {...props} name="share" size={18} color="#3366ff" />
  );
  return (
    <Button appearance="outline" onPress={onShare} accessoryLeft={ShareIcon}>
      Share
    </Button>
  );
};

export default SoundShare;
