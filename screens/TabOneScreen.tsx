import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

const allProducts = [
  {
    title: 'Maison',
    id: 1,
  },
  {
    title: 'Garage',
    id: 2,
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text category="h1">Products</Text>
      {allProducts.map((product) => {
        return (
          <Card style={styles.card} status="primary">
            <Text>{product.title}</Text>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    margin: 12,
  },
});
