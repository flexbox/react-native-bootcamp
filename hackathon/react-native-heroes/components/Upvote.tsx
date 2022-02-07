import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button, Colors, Paragraph } from "react-native-paper";
import { gql, useMutation } from "@apollo/client";

export const Upvote = () => {
  const [counter, setCounter] = useState<number>(10);
  const [hasUpvoted, setHasUpvoted] = useState<boolean>(false);
  const [addTodo] = useMutation(MUTATION_COUNTER);
  const handleUpvote = () => {
    setCounter(counter + 1);
    addTodo({ variables: { counter: counter + 1 } });
    setHasUpvoted(true);
  };
  const style = hasUpvoted
    ? {
        borderColor: Colors.orange900,
        backgroundColor: "white",
        borderWidth: 2,
      }
    : { backgroundColor: "white" };

  const styleIcon = hasUpvoted
    ? { color: Colors.orange900 }
    : { color: "black" };

  return (
    <Button
      onPress={handleUpvote}
      mode="outlined"
      disabled={hasUpvoted}
      style={style}
    >
      <AntDesign name="caretup" size={16} color={styleIcon.color} />
      <Paragraph>{counter}</Paragraph>
    </Button>
  );
};

const MUTATION_COUNTER = gql`
  mutation update_counter {
    update_heroes(where: { id: {} }, _inc: { counter: 1 }) {
      affected_rows
      returning {
        id
        counter
      }
    }
  }
`;
