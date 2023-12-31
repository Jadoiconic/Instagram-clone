import { SafeAreaView, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authorization from './src/Screens/Auth/Authorization ';
import LoginScreen from './src/Screens/Auth/Login';
import MainScreen from './src/Screens/MainScreen';
import SearchScreen from './src/Screens/SearchScreen';

const Tabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


// ! Stack Navigator
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
    }} >
      <Stack.Screen name="Authorization" component={Authorization} />
      <Stack.Screen name="MainApp" component={BottomTab} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

// !Bootm Tab Navigator
const BottomTab = () => {
  return (
    <Tabs.Navigator
      activeColor="green"
      barStyle={{ backgroundColor: 'transparent', height: 80 }}
      screenOptions={{
        tabBarLabel: '',
      }}>
      <Tabs.Screen name="Home" component={MainScreen} options={{
        tabBarIcon: ({ color }) => (<Fontisto name="home" size={32} color={color} />),
      }} />
      <Tabs.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({ color }) => (<Ionicons name="ios-search" size={32} color={color} />)
      }} />
      <Tabs.Screen name="Igtv" component={MainScreen} options={{
        tabBarIcon: ({ color }) => (<AntDesign name="plussquareo" size={32} color={color} />)
      }} />
      <Tabs.Screen name="Likes" component={MainScreen} options={{
        tabBarIcon: ({ color }) => (<Ionicons name="ios-heart-outline" size={32} color={color} />)
      }} />
      <Tabs.Screen name="Profile" component={MainScreen} options={{
        tabBarIcon: ({ color }) => (<Ionicons name="ios-person" size={32} color={color} />)
      }} />
    </Tabs.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

