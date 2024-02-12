import React from 'react';
import {View, Text,TextInput} from 'react-native';
import styles from './styles';
import colors from '../../Constants/colors';
import Feather from 'react-native-vector-icons/Feather'

const CustomSearchBar = props => {
  const {filter, onChangeText={}} = {...props};

  return (
    <View
      style={styles.container}>
      <View
        style={styles.search}>
        <View style={styles.innerView}>
          <TextInput
            placeholder={'Type product name to search items'}
            placeholderTextColor={colors.text}
            style={styles.textInput}
            selectionColor={colors.primaryGreen}
            onChangeText={text => onChangeText(text)}
          />
          <Feather name='search' size={30} color={colors.lightBlack}/>
        </View>
      </View>
      {filter ? <Text style={styles.filter}>Filter</Text> : null}
    </View>
  );
};

export default CustomSearchBar;