import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Button, Paragraph } from 'react-native-paper';

type Props = {};

export const Upvote = (props: Props) => {
  const [counter, setCounter] = useState<number>(10);
  const [hasUpvoted, setHasUpvoted] = useState<boolean>(false);

  const handleUpvote = () => {
    setCounter(counter + 1);
    setHasUpvoted(true);
  };

  return (
    <Button onPress={handleUpvote} mode="outlined" disabled={hasUpvoted}>
      <AntDesign name="caretup" size={16} color="black" />
      <Paragraph>{counter}</Paragraph>
    </Button>
  );
};
