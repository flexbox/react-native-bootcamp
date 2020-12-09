import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import AppShell from '../components/AppShell';

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

  const handleSubmit = () => {
    console.log('werwer');
  };

  return (
    <AppShell>
      <View style={{ height: 50 }} />
      <Text category="h1">Ajouter un site</Text>
      <View style={{ height: 24 }} />
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
      <Button size="large" onPress={handleSubmit}>
        Ajouter un site
      </Button>
      <View style={{ height: 24 }} />
      <Button size="large" appearance="outline">
        Prendre le QR code en photo
      </Button>
    </AppShell>
  );
};

export default AddProductScreen;
