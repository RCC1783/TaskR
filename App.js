import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './src/styles';

/* Copy & paste in your terminal to install these to your project folder:
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native @react-navigation/native-stack
- npx expo install expo-file-system
- npx expo install firebase
- npx expo install expo-camera
*/

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.h1}>TaskR</Text>
        <StatusBar style="auto" />
      </View>
  );
}