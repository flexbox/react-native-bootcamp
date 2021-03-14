import React from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';

import { Magic } from '@magic-sdk/react-native';
import { OAuthExtension } from '@magic-ext/react-native-oauth';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  Button,
} from '@ui-kitten/components';

import config from './config';

const magic = new Magic(config.MAGIC_API_KEY, {
  extensions: [new OAuthExtension()],
});

export default function App() {
  const [email, setEmail] = React.useState('');

  async function handleLogin() {
    const result = await magic.auth.loginWithMagicLink({
      email,
    });

    Keyboard.dismiss();
  }

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <magic.Relayer />

        <View style={styles.formContainer}>
          <Text category="h3">Magic link on React Native</Text>
          <Input
            label="Enter your email"
            placeholder="bruce@wayne.co"
            value={email}
            autoCompleteType="email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Button onPress={handleLogin}>Sign In</Button>
        </View>
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 40,
  },
});
