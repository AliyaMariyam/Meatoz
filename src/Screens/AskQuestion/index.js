import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import colors from '../../Constants/colors';
import CustomHeader from '../../Components/CustomHeader';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton.js';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const access_token = useSelector(state => state.token);

  const handleButtonPress = async () => {
    try {
      const id = 2;
      const token = access_token;

      const postData = {
        question_title: title,
        question_description: description,
      };

      const response = await axios.post(
        `https://portal.learnabble.xyz/api/v2/core/questions/add/`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            id: id,
          },
        },
      );
      Snackbar.show({
        text: 'Question Added Successfully',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:colors.primaryBlue,
        textColor:colors.white
      });
      setTitle('');
      setDescription('');
      navigation.goBack();
    } catch (error) {
      console.error('Error:', error);
      Snackbar.show({
        text: 'Error Occurred',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:'red',
        textColor:colors.white
      });
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />

      <CustomHeader type="back" head="Ask Question" />

      <View style={styles.subContainer}>
        <Text style={styles.headerStyle}>Ask a question about the course.</Text>

        <Text style={styles.subHead}>Question</Text>
        <CustomTextInput
          placeholder="Hello"
          value={title}
          handleText={text => setTitle(text)}
        />

        <Text style={styles.subHead}>Describe your question</Text>
        <CustomTextInput
          multiline={true}
          placeholder=""
          value={description}
          handleText={text => setDescription(text)}
        />

        <CustomButton
          buttonText="Submit"
          handleButtonPress={handleButtonPress}
        />
      </View>
    </ScrollView>
  );
};

export default AskQuestion;
