import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import QuestionList from '../Screens/QuestionList';
import AskQuestion from '../Screens/AskQuestion';
import {Provider} from 'react-redux';
import {store} from '../Redux/store';
import {useSelector} from 'react-redux';

const stack = createNativeStackNavigator();

const AppNavigation = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <stack.Screen name="QuestionList" component={QuestionList} />
            <stack.Screen name="AskQuestion" component={AskQuestion} />
          </>
        ) : (
          <stack.Screen name="Login" component={Login} />
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
