import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tabs = createMaterialBottomTabNavigator();
function HomeScreen(){
  return (
    <></>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
      activeColor="green"
      screenOptions={{
        tabBarLabel:false,
        
      }}>
        <Tabs.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon:({color})=>(<Fontisto name="home" size={32} color={color} />)
        }}/>
        <Tabs.Screen name="Search" component={HomeScreen} options={{
          tabBarIcon:({color})=>(<Ionicons name="ios-search" size={32} color={color} />)
        }}/>
        <Tabs.Screen name="Igtv" component={HomeScreen} options={{
          tabBarIcon:({color})=>(<AntDesign name="plussquareo" size={32} color={color} />)
        }}/>
        <Tabs.Screen name="Likes" component={HomeScreen} options={{
          tabBarIcon:({color})=>(<Ionicons name="ios-heart-outline" size={32} color={color} />)
        }}/>
        <Tabs.Screen name="Profile" component={HomeScreen} options={{
          tabBarIcon:({color})=>(<Ionicons name="ios-person" size={32} color={color} />)
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
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
