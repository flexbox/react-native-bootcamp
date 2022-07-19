import { View, Text } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

type Props = {
  children: React.ReactNode;
};

const FEATURES_LIST = [
  {
    title: "Goodbye Cash, hello Card!",
    description:
      "Create your own account and geet Revolut Junior card. Choose from a set of designs and make it yours!",
  },
  {
    title: "Receive money into your account",
    description:
      "And parent or grandparent can receive money into your account. Just send them the link.",
  },
  {
    title: "Use with Apple Pay",
    description:
      "Sometimes it's hard to pay with cash. You can use Revolut Junior with Apple Pay.",
  },
];

export const OnboardingSwiper = ({ children }: Props) => {
  return (
    <View className="h-screen">
      <Swiper>
        <Text>OnboardingSwiper</Text>
        {FEATURES_LIST.map((feature, index) => (
          <View key={`feature-${index}`}>
            <Text>{feature.title}</Text>
          </View>
        ))}
      </Swiper>
      {children}
    </View>
  );
};
