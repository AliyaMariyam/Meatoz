import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from '../Screens/Categories';
import Profile from '../Screens/Profile';
import MyCart from '../Screens/MyCart';
import CustomFooter from '../Components/CustomFooter';

const stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomFooter {...props} />}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: 'Lato-Bold', 
        fontSize: 24,
        },
        headerStyle: {
          height: 60,
        },
        headerShown:false,
      }}>
      <Tab.Screen name="MEATOZ" component={Home} />
      <Tab.Screen name="CATEGORIES" component={Categories} />
      <Tab.Screen name="PROFILE" component={Profile} />
      <Tab.Screen name="MYCART" component={MyCart} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}} >
        <stack.Screen name="MyTabs" component={MyTabs} />
      </stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
