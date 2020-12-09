import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';

interface ProductProps {
  title: string;
  id: string;
}

interface AllProductProps {
  allProduct: ProductProps[];
}

const AddProductScreen = (props: Props) => {
  const [password, setPassword] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Feather
        size={24}
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <View style={{ height: 50 }} />
      <Text category="h1">Ajouter un site</Text>
      <Input
        value={productId}
        label="Identifiant du produit"
        placeholder="perfe-pimus-tereb-lorea"
        caption="Vous trouverez l'identifiant sur l'étiquette"
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <View style={{ height: 24 }} />
      <Input
        value={password}
        label="Mot de passe"
        placeholder="******"
        caption="Should contain at least 8 symbols"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <View style={{ height: 24 }} />
      <Button size="large" appearance="outline">
        Prendre le QR code en photo
      </Button>
      <View style={{ height: 24 }} />
      <Button size="large">Ajouter un site</Button>
    </Layout>
  );
};

export default AddProductScreen;
