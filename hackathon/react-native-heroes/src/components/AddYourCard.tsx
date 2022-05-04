import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  TextInput,
} from "react-native";
import { Colors } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import { ADD_HERO } from "~/graphql/mutations";
import { Box } from "~/components/Box";

export const AddYourCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [heroName, onChangeHeroName] = React.useState("");
  const [heroGithub, onChangeHeroGithub] = React.useState("");
  const [heroTwitter, onChangeHeroTwitter] = React.useState("");
  const [heroGravatarMail, onChangeHeroGravatar] = React.useState("");
  const [addHero] = useMutation(ADD_HERO);

  const addToHeroList = () => {
    addHero({
      variables: {
        avatarUrl: heroGravatarMail,
        fullName: heroName,
        githubUsername: heroGithub,
        twitterUsername: heroTwitter,
      },
    });
  };
  const resetFormValues = () => {
    onChangeHeroName("");
    onChangeHeroGithub("");
    onChangeHeroTwitter("");
    onChangeHeroGravatar("");
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addAndCloseModal = () => {
    addToHeroList();
    toggleModal();
    resetFormValues();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => toggleModal()}
      >
        <Box flex={1} alignItems="center" justifyContent="center">
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              That's can be you
            </Text>

            <View style={styles.viewInput}>
              <Text style={styles.upperText}>Your FullName</Text>

              <TextInput
                style={styles.input}
                onChangeText={onChangeHeroName}
                value={heroName}
                placeholder="Matthys Ducrocq"
              />
            </View>

            <View style={styles.viewInput}>
              <Text style={styles.upperText}>Your Github username</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeHeroGithub}
                value={heroGithub}
                placeholder="matthysdev"
              />
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.upperText}>Your Twitter url</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeHeroTwitter}
                value={heroTwitter}
                placeholder="https://twitter.com/matthysdev"
              />
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.upperText}>Your Gravatar email</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeHeroGravatar}
                value={heroGravatarMail}
                placeholder="myemail@gmail.com"
              />
            </View>
            <TouchableOpacity onPress={addAndCloseModal}>
              <Text
                style={{
                  marginTop: 20,
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  alignContent: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Box>
      </Modal>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 30,

          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={toggleModal}
      >
        <Text style={{ fontWeight: "bold" }}>Add your card</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    color: "white",
    width: "95%",
    flexDirection: "row",
    backgroundColor: Colors.yellow900,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 8,
  },
  viewInput: {
    height: 40,
    marginTop: 10,
    width: "95%",
  },
  upperText: {
    paddingLeft: 10,
    fontWeight: "bold",
  },

  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    width: "90%",
    height: "65%",

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-around",
  },
});
