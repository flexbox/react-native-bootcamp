import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Input } from "./components/Input";
import { Button } from "./components/Button";

export const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const togglePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <View className="flex-1">
      <View className="bg-blue-500 justify-center items-center py-12 mb-6">
        <SafeAreaView>
          <Text className="text-white font-bold text-3xl text-center">
            Hello
          </Text>
          <Text className="text-white text-xl">Sign in to your account</Text>
        </SafeAreaView>
      </View>
      <View className="px-4">
        <Input label="Email" className="mb-4" />
        <Input label="Password" secureTextEntry={hidePassword} />
        <TouchableOpacity onPress={togglePassword}>
          <Text className="text-blue-500 text-right">
            {hidePassword ? "show" : "hide"} password?
          </Text>
        </TouchableOpacity>
      </View>
      <View className="px-4 mt-12">
        <Button variant="filled">Sign In</Button>
        <Button variant="ghost">Don't have an account? Create</Button>
      </View>
    </View>
  );
};
