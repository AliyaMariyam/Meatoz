import React from 'react';
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

const AskQuestion = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />

      <CustomHeader type="back" head="Ask Question" />

      <View style={styles.subContainer}>

        <Text style={styles.headerStyle}>Ask a question about the course.</Text>

        <Text style={styles.subHead}>Question</Text>
        <CustomTextInput placeholder="Hello" />

        <Text style={styles.subHead}>Describe your question</Text>
        <CustomTextInput multiline={true} placeholder="" />

        <CustomButton
          buttonText="Submit"
          // handleButtonPress={handleButtonPress}
        />

      </View>
    </ScrollView>
  );
};

export default AskQuestion;
