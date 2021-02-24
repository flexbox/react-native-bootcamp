import React from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Magic } from '@magic-sdk/react-native';
import { OAuthExtension } from '@magic-ext/react-native-oauth';

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
    <View style={styles.container}>
      <magic.Relayer />

      <View style={styles.formContainer}>
        <Input
          label="Enter your email"
          placeholder="bruce@wayne.co"
          value={email}
          autoCompleteType="email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <Button title="Sign In" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    padding: 40,
  },
});
