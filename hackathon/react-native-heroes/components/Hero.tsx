import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
  Pressable,
} from "react-native";
import { Colors } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

type HeroProps = {
  avatar: string;
  name: string;
  urlGithub: string;
  urlTwitter: string;
};

const Hero = (hero: HeroProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }
  const avatar = hero.avatar;
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => toggleModal()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Name of the dev</Text>
            <Image
              source={{ uri: avatar }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                borderWidth: 1,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Text>Description </Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Image
          source={{ uri: avatar }}
          style={{ width: 100, height: 100, borderRadius: 10, borderWidth: 1 }}
        />
      </TouchableOpacity>
      <View style={styles.middle}>
        <Text style={styles.text}>{hero.name}</Text>
        <View style={styles.social}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(hero.urlGithub)}
          >
            <Text>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(hero.urlTwitter)}
          >
            <Text>Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.vote}>
        <AntDesign name="caretup" size={16} color="black" />
        <Text>10</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    color: "white",
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.yellow900,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  vote: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 8,
    alignItems: "center",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middle: {
    flex: 1,
    width: "55%",
  },
  text: {
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    width: "80%",
    height: "45%",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    paddingTop: 10,
    textAlign: "center",
  },
  buttonModal: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});
