import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/images/icon.jpeg')}
            style={styles.img}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Meatoz</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
