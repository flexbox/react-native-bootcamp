import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Divider, Layout, Text } from '@ui-kitten/components';

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

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Card style={styles.card} status={data.status}>
      <Text category="h6">{data.title}</Text>
      <Text appearance="hint" style={{ marginBottom: 12 }}>
        {data.id}
      </Text>
      <Button appearance="outline">Voir les informations</Button>
    </Card>
  );
};

export default function TabOneScreen() {
  return (
    <Layout style={styles.container}>
      <ScrollView>
        {allProducts.map((product) => {
          return <ProductCard data={product} key={product.id} />;
        })}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  card: {
    marginBottom: 24,
  },
});
