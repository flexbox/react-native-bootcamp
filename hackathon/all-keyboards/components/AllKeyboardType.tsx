import { View } from "react-native";
import React, { useState } from "react";
import { CardInput } from "@/components/CardInput";
import { TextInput } from "react-native-paper";

export function AllKeyboardType() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }

  return (
    <View>
      <CardInput title="keyboardType `default`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
        />
      </CardInput>
      <CardInput title="keyboardType `numeric`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="numeric"
          keyboardType="numeric"
        />
      </CardInput>
      <CardInput title="keyboardType `password`">
        <TextInput
          placeholder="********"
          value={password}
          secureTextEntry={isVisble}
          onChangeText={(value) => setPassword(value)}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              icon={isVisble ? "eye-off" : "eye"}
            />
          }
        />
      </CardInput>
      <CardInput title="keyboardType `email-address`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="email-address"
          keyboardType="email-address"
        />
      </CardInput>
      <CardInput title="keyboardType `phone-pad`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="phone-pad"
          keyboardType="phone-pad"
        />
      </CardInput>
      <CardInput title="keyboardType `ascii-capable`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="ascii-capable"
          keyboardType="ascii-capable"
        />
      </CardInput>
      <CardInput title="keyboardType `numbers-and-punctuation`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="numbers-and-punctuation"
          keyboardType="numbers-and-punctuation"
        />
      </CardInput>
      <CardInput title="keyboardType `url`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="url"
          keyboardType="url"
        />
      </CardInput>
      <CardInput title="keyboardType `number-pad`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="number-pad"
          keyboardType="number-pad"
        />
      </CardInput>
      <CardInput title="keyboardType `name-phone-pad`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="name-phone-pad"
          keyboardType="name-phone-pad"
        />
      </CardInput>
      <CardInput title="keyboardType `decimal-pad`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="decimal-pad"
          keyboardType="decimal-pad"
        />
      </CardInput>
      <CardInput title="keyboardType `twitter`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="@flexbox_"
          keyboardType="twitter"
        />
      </CardInput>
      <CardInput title="keyboardType `web-search`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="web-search"
          keyboardType="web-search"
        />
      </CardInput>
      <CardInput title="keyboardType `visible-password`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="visible-password"
          keyboardType="visible-password"
        />
      </CardInput>
    </View>
  );
};
