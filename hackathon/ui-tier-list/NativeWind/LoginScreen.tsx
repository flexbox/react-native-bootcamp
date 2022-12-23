import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoginScreen = () => {
  return (
    <View className="flex-1">
      <View className="bg-blue-500 justify-center items-center py-12">
        <SafeAreaView>
          <Text className="text-white font-bold text-3xl text-center">
            Hello
          </Text>
          <Text className="text-white text-xl">Sign in to your account</Text>
        </SafeAreaView>
      </View>
    </View>
  );
};
