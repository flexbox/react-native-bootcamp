import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Button, Paragraph } from 'react-native-paper';

type Props = {};

export const Upvote = (props: Props) => {
  const [counter, setCounter] = React.useState(10);

  const handleUpvote = () => {
    setCounter(counter + 1);
  };

  return (
    <Button onPress={handleUpvote} mode="outlined">
      <AntDesign name="caretup" size={16} color="black" />
      <Paragraph>{counter}</Paragraph>
    </Button>
  );
};
