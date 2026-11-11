// Screens
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

// Modules
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { requestFormReset } from 'react-dom';

/* Copy & paste in your terminal to install these to your project folder:
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native @react-navigation/native-stack
- npx expo install expo-file-system
- npx expo install firebase
- npx expo install expo-camera
- npx expo install expo-font expo-splash-screen
*/

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'comfortaa': require('./assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf'),
    'calSans': require('./assets/fonts/Cal_Sans/CalSans-Regular.ttf'),
  });

  useEffect(() => {
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  
  if(!loaded && !error){
    return null;
  }

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false, gestureEnabled: true}}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

/*
###   Resources used
- For use font: https://docs.expo.dev/develop/user-interface/fonts/#with-usefonts-hook
*/