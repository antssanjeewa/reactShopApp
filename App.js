import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import Navigation from './components/Navigation';

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
