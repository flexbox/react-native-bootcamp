import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button, Colors, Paragraph } from "react-native-paper";
import { gql, useMutation } from "@apollo/client";
import { Linking, Modal, TouchableOpacity, View } from "react-native";
import { styles } from "./Hero";

<<<<<<< HEAD
// TODO: Add interface
export const Upvote = ({ idHero, heroCounter }) => {
  const [counter, setCounter] = useState<number>(10);
=======
export const Upvote = ({ idHero, heroCounter, twitterUsername }) => {
  const [counter, setCounter] = useState<number>(heroCounter);
>>>>>>> e1e10fff (add twitter share)
  const [hasUpvoted, setHasUpvoted] = useState<boolean>(false);
  const [addTodo] = useMutation(MUTATION_COUNTER);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleUpvote = () => {
    setCounter(counter + 1);
    addTodo({ variables: { counter: counter + 1, id: idHero } });
    setHasUpvoted(true);
    toggleModal();
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
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => toggleModal()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalShareView}>
            <Paragraph>Thanks for voting !</Paragraph>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `https://twitter.com/intent/tweet?text=I just upvoted @${twitterUsername} as a React Native Hero because`
                )
              }
              style={{ backgroundColor: "black", borderRadius: 10 }}
            >
              <Button color="white">Share on Twitter</Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleModal()}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Button
        onPress={handleUpvote}
        mode="contained"
        disabled={hasUpvoted}
        style={style}
      >
        <AntDesign name="caretup" size={16} color={styleIcon.color} />
        <Paragraph>{heroCounter}</Paragraph>
      </Button>
    </>
  );
};

const MUTATION_COUNTER = gql`
  mutation update_counter($id: Int!) {
    update_heroes(where: { id: { _eq: $id } }, _inc: { counter: 1 }) {
      affected_rows
      returning {
        id
        counter
      }
    }
  }
`;
