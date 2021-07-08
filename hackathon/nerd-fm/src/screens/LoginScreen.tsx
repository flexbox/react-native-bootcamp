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
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from '../navigation/AppRoutes';
import { sleep } from '../utils/sleep';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthorized } = useAuth()

  console.log(setIsAuthorized);


  const handleLogin = async () => {
    setIsLoading(true);
    await sleep(1500);
    setIsAuthorized(true);
  };

  const handleRegister = ()=> {
    navigation.navigate(AppRoutes.REGISTER)
  }

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
        <Button mode="contained" loading={isLoading} onPress={handleLogin}>
          Enter to nerd-fm
        </Button>
        <View style={{ height: 12 }} />
        <Button mode="outlined" onPress={handleRegister}>
          Create an account
        </Button>
        <View style={{ height: 64 }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
