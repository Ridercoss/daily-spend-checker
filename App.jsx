import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Touchable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHightlight}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHightlight: {
    "fontSize": 42,
    "color": "#c1c1c1"
  }
});
