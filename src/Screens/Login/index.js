import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../../Constants/colors';
import styles from './styles';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton.js';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/action.js';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleButtonPress = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      axios
        .post('https://portal.learnabble.xyz/api/v2/accounts/login/', {
          email: email.trim(),
          password: password.trim(),
        })
        .then(response => {
          // Handle the response
          const accessToken = response.data.access_token.token;
          Snackbar.show({
            text: 'Logged In Successfully',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:colors.primaryBlue,
            textColor:colors.white
          });
          navigation.navigate('QuestionList')
          dispatch(login())
          
        })
      //  console.log(accessToken)
        .catch(error => {
          // Handle error
          console.error('Login Error:', error);
          Snackbar.show({
            text: 'Check your Log in credentials',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:'red',
            textColor:colors.white
          });
        });
    } else {
      Snackbar.show({
        text: 'Please fill Email and Password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:'red',
        textColor:colors.white
      });
    }  
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />

      <Text style={styles.headerStyle}>My Course App</Text>

      <View style={styles.subContainer}>
        <Text style={styles.subHead}>Your Email</Text>
        <CustomTextInput
          placeholder="Enter your email"
          handleText={text => setEmail(text)}
        />

        <Text style={styles.subHead}>Password</Text>
        <CustomTextInput
          type="password"
          placeholder="Enter your password"
          handleText={text => setPassword(text)}
        />

        <CustomButton
          buttonText="Login"
          handleButtonPress={handleButtonPress}
        />

        <Text style={styles.desc}>
          By Clicking the 'Login' button you agree to{'\n'}the terms and
          conditions
        </Text>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>FORGOT PASSWORD ? </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
