import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/login/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {isReadyRef, navigationRef} from './RootNavigation';
import NumberTicket from '../screens/numberticket/NumberTicket';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name="Home" component={Home} options={{title: '체크인'}} />
      <Tab.Screen
        name="NumberTicket"
        component={NumberTicket}
        options={{title: '번호표'}}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title: '인증'}} />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{title: '크리패스', headerLeft: null}}
      />
    </Stack.Navigator>
  );
}

const NavigationIndex = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <MainStack />
    </NavigationContainer>
  );
};

export default NavigationIndex;
