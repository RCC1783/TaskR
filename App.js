// Screens
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateNewTask from './src/screens/CreateNewTask';

// Modules
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Reminders } from './src/modules/Reminders';
import AgendaScreen from './src/screens/AgendaScreen';


/* Copy & paste in your terminal to install these to your project folder:
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native @react-navigation/native-stack
- npx expo install @react-native-async-storage/async-storage
- npx expo install firebase
- npx expo install expo-camera
- npx expo install expo-font expo-splash-screen
- npx expo install expo-notifications
*/

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

// Main function & screen manager
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
        <Reminders />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false, gestureEnabled: true}}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="agenda" component={AgendaScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="newTask" component={CreateNewTask} options={{presentation: "modal"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

/*
###   Resources used
- For use font loading: https://docs.expo.dev/develop/user-interface/fonts/#with-usefonts-hook
- For local notifications: https://docs.expo.dev/versions/v58.0.0/sdk/notifications/
*/
