import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { state$ } from './src/legend-state';
import { observer } from "@legendapp/state/react";

const App = observer(() => {

  const addExpense = () => {
    const newExpense = {
      id: Math.random().toString(),
      title: `Expense ${expenses.length + 1}`,
      amount: Math.floor(Math.random()),
    };
    state$.expenses.set((currentExpenses) => [...currentExpenses, newExpense]);
  };
  const expenses = state$.expenses.get();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.title}: ${item.amount}
            </Text>
          </View>
        )}
      />
      <Button title="Add Expense" onPress={addExpense} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
// export { default } from "./.storybook";