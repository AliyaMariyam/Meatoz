import React, {useState} from 'react';
import {TextInput, View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import colors from '../../Constants/colors';

const CustomTextInput = props => {
  const [show, setShow] = useState(false);

  const {type, handleText, placeholder, value, multiline = false} = props;

  const keyBoardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : 'default';

  const icon =
    type === 'password'
      ? show
        ? require('../../assets/images/view.png')
        : require('../../assets/images/hide.png')
      : null;

  const secureTextEntry = type === 'password' ? (show ? false : true) : false;

  const handlePassword = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyBoardType}
        secureTextEntry={secureTextEntry}
        selectionColor={colors.primaryBlue}
        placeholderTextColor={colors.text}
        onChangeText={handleText}
        value={value}
        multiline={multiline}
      />
     

      {!icon ? null : (
        <TouchableOpacity
          onPress={handlePassword}
          disabled={type !== 'password' ? true : false}>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
