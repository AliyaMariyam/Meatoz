import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../Constants/colors';

const CustomFooter = ({state, navigation}) => {
  const cartCount = 0;

  const iconMap = {
    MEATOZ: {name: 'home', package: Feather},
    CATEGORIES: {name: 'box', package: Feather},
    PROFILE: {name: 'person', package: Ionicons},
    MYCART: {name: 'shopping-bag', package: FontAwesome},
  };

  return (
    <View style={styles.maincontainer}>
      {state.routes.map((route, index) => {
        const {name, package: IconPackage} = iconMap[route.name];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.touchContainer}>
            {route.name === 'MYCART' ? (
              <View style={styles.cartCount}>
                <Text style={styles.count}>{cartCount}</Text>
              </View>
            ) : null}
            <IconPackage
              name={name}
              size={24} // Adjust the size as needed
              color={isFocused ? colors.primaryGreen : 'black'} // Adjust the color as needed
              style={styles.iconStyle}
            />
            <Text style={styles.nameText}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/images/icon.jpeg')}
            style={{width: 35, height: 35,borderRadius:30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomFooter;
