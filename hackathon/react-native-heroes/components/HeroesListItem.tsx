import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import { Colors } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Upvote } from './Upvote';
import Box from './Box';

type HeroProps = {
  avatar: string;
  name: string;
  urlGithub: string;
  urlTwitter: string;
};

export const HeroesListItem = (hero: HeroProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const avatar = hero.avatar;

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={{ uri: avatar }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
        </TouchableOpacity>

        <Box mx="s">
          <Text style={styles.text}>{hero.name}</Text>
          <Box flexDirection="row" justifyContent="space-between">
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
          </Box>
        </Box>
        <Box ml="m">
          <Upvote />
        </Box>
      </View>

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
                borderWidth: 4,
              }}
            />
            <Text>Description </Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.yellow400,
    alignItems: 'center',
    borderColor: Colors.yellow800,
    borderWidth: 4,
    borderRadius: 10,
    padding: 10,
    margin: 16,
  },
  button: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    width: '80%',
    height: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    paddingTop: 10,
    textAlign: 'center',
  },
  buttonModal: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});
