import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Divider, Layout, Text } from '@ui-kitten/components';

import AppShell from '../components/AppShell';

const allProducts = [
  {
    title: 'Maison',
    status: 'success',
    id: 'paru-ilor-deva-tenet',
  },
  {
    title: 'Garage',
    status: 'danger',
    id: 'davu-jora-balo-juli',
  },
];

interface ProductCardProps {
  data: {
    id: string;
    title: string;
    status: string;
  };
}

const ProductCard = (props: ProductCardProps) => {
  const data = props.data;

  return (
    <Card style={styles.card} status={data.status}>
      <View style={styles.cardTitle}>
        <Text category="h6">{data.title}</Text>
        <Text appearance="hint">{data.id}</Text>
      </View>
      <Button appearance="outline">Voir les informations</Button>
    </Card>
  );
};

export default function TabOneScreen() {
  return (
    <AppShell>
      <ScrollView>
        {allProducts.map((product) => {
          return <ProductCard data={product} key={product.id} />;
        })}
      </ScrollView>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
});
