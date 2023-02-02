import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import HomeScreen from '../screens/Dashboard/Home/HomeScreen';
import DetailScreen from '../screens/Dashboard/Details/DetailScreen';
import Update from '../screens/Update/Update';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
        name="firstScreen"
        component={FirstScreen}
      />
      <Stack.Screen name="Dashboard" component={DashboardNavigation} />
      <Stack.Screen name="update" component={Update} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
