import React from "react";
import { Card, Colors, Paragraph, TextInput, Title } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const CardInput = ({ title, children }) => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Title style={{ marginBottom: 8 }}>{title}</Title>
        {children}
      </Card.Content>
    </Card>
  );
};

const App = () => {
  const [inputValue, setInputValue] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const [isVisble, setIsVisible] = React.useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }

  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.container}>
        <CardInput title="TextInput">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="A simple TextInput"
          />
        </CardInput>
        <CardInput title="TextInput - `numeric`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="numeric"
            keyboardType="numeric"
            autoComplete={false}
          />
        </CardInput>
        <CardInput title="TextInput - `password`">
          <TextInput
            placeholder="********"
            value={password}
            secureTextEntry={isVisble}
            onChangeText={(value) => setPassword(value)}
            right={
              <TextInput.Icon
                style={{ marginTop: 8 }}
                onPress={toggleSecureIcon}
                name={isVisble ? "eye-off" : "eye"}
              />
            }
          />
        </CardInput>
        <CardInput title="TextInput - `email-address`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="email-address"
            keyboardType="email-address"
          />
        </CardInput>
        <CardInput title="TextInput - `phone-pad`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="phone-pad"
            keyboardType="phone-pad"
          />
        </CardInput>
        <CardInput title="TextInput - `ascii-capable`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="ascii-capable"
            keyboardType="ascii-capable"
          />
        </CardInput>
        <CardInput title="TextInput - `numbers-and-punctuation`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="numbers-and-punctuation"
            keyboardType="numbers-and-punctuation"
          />
        </CardInput>
        <CardInput title="TextInput - `url`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="url"
            keyboardType="url"
          />
        </CardInput>
        <CardInput title="TextInput - `number-pad`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="number-pad"
            keyboardType="number-pad"
          />
        </CardInput>
        <CardInput title="TextInput - `name-phone-pad`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="name-phone-pad"
            keyboardType="name-phone-pad"
          />
        </CardInput>
        <CardInput title="TextInput - `decimal-pad`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="decimal-pad"
            keyboardType="decimal-pad"
          />
        </CardInput>
        <CardInput title="TextInput - `twitter`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="@flexbox_"
            keyboardType="twitter"
          />
        </CardInput>
        <CardInput title="TextInput - `web-search`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="web-search"
            keyboardType="web-search"
          />
        </CardInput>
        <CardInput title="TextInput - `visible-password`">
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="visible-password"
            keyboardType="visible-password"
          />
        </CardInput>

        <View style={styles.separator} />

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

        <View style={styles.separator} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: Colors.grey100,
  },
  cardContainer: {
    marginBottom: 32,
  },
  container: {
    paddingHorizontal: 24,
  },
  separator: {
    height: 256,
  },
});

export default App;
