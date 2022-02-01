import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { HeroesList } from "./components/HeroesList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Colors } from "react-native-paper";

const client = new ApolloClient({
  uri: "https://react-native-heroes.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.text}>React Native Heroes</Text>

        <HeroesList />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.indigo700,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
