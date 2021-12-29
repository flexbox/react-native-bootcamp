import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [data, onChange] = React.useState(null);

  return (
    <SafeAreaView style={styles.global}>
      <ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="Input"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="numeric"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="email-address"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="phone-pad"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="ascii-capable"
          keyboardType="ascii-capable"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="numbers-and-punctuation"
          keyboardType="numbers-and-punctuation"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="url"
          keyboardType="url"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="number-pad"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="name-phone-pad"
          keyboardType="name-phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="decimal-pad"
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="twitter"
          keyboardType="twitter"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="web-search"
          keyboardType="web-search"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={data}
          placeholder="visible-password"
          keyboardType="visible-password"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  global: {
    paddingTop: 50,
  },
});

export default UselessTextInput;
