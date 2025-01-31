import { View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { CardInput } from "@/components/CardInput";

export function AllReturnKeyType() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <View>
      <CardInput title="returnKeyType `default`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="default"
        />
      </CardInput>
      <CardInput title="returnKeyType `go`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="go"
        />
      </CardInput>
      <CardInput title="returnKeyType `google`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="google"
        />
      </CardInput>
      <CardInput title="returnKeyType `join`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="join"
        />
      </CardInput>
      <CardInput title="returnKeyType `next`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="next"
        />
      </CardInput>
      <CardInput title="returnKeyType `route`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="route"
        />
      </CardInput>
      <CardInput title="returnKeyType `search`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="search"
        />
      </CardInput>
      <CardInput title="returnKeyType `send`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="send"
        />
      </CardInput>
      <CardInput title="returnKeyType `yahoo`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="yahoo"
        />
      </CardInput>
      <CardInput title="returnKeyType `done`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="done"
        />
      </CardInput>
      <CardInput title="returnKeyType `emergency-call`">
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="A simple TextInput"
          returnKeyType="emergency-call"
        />
      </CardInput>
    </View>
  );
};