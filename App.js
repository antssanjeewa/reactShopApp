import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import Navigation from './components/Navigation';
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
