import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageLabelingScreen } from './src/components/ImageLabeling';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme/theme';


export default function App() {
  return (
<ThemeProvider theme={theme}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageLabelingScreen />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
