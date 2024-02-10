import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomButton = props => {
  const {buttonText, handleButtonPress,type} = props;

  return (
    <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
      <Text
        style={styles.text}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
