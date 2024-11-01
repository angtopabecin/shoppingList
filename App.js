import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity,TextInput ,ScrollView, Pressable} from 'react-native';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomePage from './src/homePage';
import AddPage from './src/addPage';


export default function App() {

  const [iconBool,setIconBool] = useState('Ana Sayfa');

  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ size }) => {
            let icon;

            if (route.name === 'Ana Sayfa') {
              icon =
                iconBool === 'Ana Sayfa'
                  ? require('../shoppingListApp /assets/homePageHomeIcon.png') //aktif
                  : require('../shoppingListApp /assets/addPageHomeIcon.png'); 
            } else if (route.name === 'Ekle') {
              icon =
                iconBool === 'Ekle'
                  ? require('../shoppingListApp /assets/addPageAddIcon.png') //aktif
                  : require('../shoppingListApp /assets/homePageAddIcon.png'); 
            }

            return <Image source={icon} style={{ width: size, height: size }} />;
          },
          tabBarActiveTintColor:'#4A90E2',
          tabBarInactiveTintColor:'grey',
          tabBarLabelStyle:{
            fontWeight:'bold'

          },
          
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                props.onPress();
                setIconBool(route.name);
              }}
            />
          ),
        })} > 
        
        <Tab.Screen name="Ana Sayfa" component={HomePage} options={{headerTitle:'Ana Sayfa',headerTitleAlign:'center',headerTintColor:'#4A90E2'}}/>
        <Tab.Screen name="Ekle" component={AddPage} options={{headerTitle:'Ekle',headerTitleAlign:'center',headerTintColor:'#4A90E2'}}/>

      </Tab.Navigator>
    </NavigationContainer>

  );
}


