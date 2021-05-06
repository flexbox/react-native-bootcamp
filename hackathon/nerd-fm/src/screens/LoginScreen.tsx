import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Button,
  Caption,
  Colors,
  Headline,
  TextInput,
} from 'react-native-paper';

interface LoginScreenProps {
  setIsAuthorized: Function;
}

const LoginScreen = ({ setIsAuthorized }: LoginScreenProps) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setIsAuthorized(true);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.grey100,
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ padding: 24, marginBottom: 64 }}
      >
        <View style={{ padding: 24, marginBottom: 32, alignItems: 'center' }}>
          <Headline>nerd-fm</Headline>
          <Caption>Login in to listen beautiful music when you work</Caption>
        </View>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <View style={{ height: 24 }} />
        <Button mode="contained" loading={isLoading} onPress={handlePress}>
          Enter to nerd-fm
        </Button>
        <View style={{ height: 64 }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
