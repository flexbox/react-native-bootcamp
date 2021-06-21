import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import { data } from '../../api/data';

const FeedScreen = () => {
  const Button = ({ item }) => (
    <Pressable
      onPress={() => {
        console.log('onPress');
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#C4B5FD' : '#EDE9FE',
        },
        styles.button,
      ]}
    >
      {({ pressed }) => <Text style={styles.buttonText}>{item.name}</Text>}
    </Pressable>
  );

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginBottom: 32 }}>
        <Text style={styles.item}>{item.starship_class}</Text>
        <Button item={item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
        {/* <Text>{JSON.stringify(data.results)}</Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#8B5CF6',
    borderWidth: 2,
  },
  buttonText: {
    color: '#8B5CF6',
  },
});

export default FeedScreen;
