import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signout } from '../../Redux/action';

const CustomHeader = props => {
  const navigation = useNavigation();
  const {head, type} = props;
  const dispatch=useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {type === 'back' ? (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../assets/images/left-arrow.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <Text style={styles.text1}>{head}</Text>
          </>
        ) : (
          <Text style={styles.text1}>{head}</Text>
        )}
      </View>

      {type === 'list' ? (
        <TouchableOpacity style={styles.button} onPress={()=>{dispatch(signout())}}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomHeader;
