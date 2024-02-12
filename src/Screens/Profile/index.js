import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../Constants/colors';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  const navigation = useNavigation();

  const iconMap = [
    {
      name: 'building-o',
      package: FontAwesome,
      title: 'Add Adress',
    },
    {
      name: 'settings',
      package: Feather,
      title: 'Settings',
    },
    {
      name: 'exclamation',
      package: Evilicons,
      title: 'Help & Support',
    },
    {
      name: 'privacy-tip',
      package: Materialicons,
      title: 'Privacy info & Terms',
    },
    {
      name: 'person-outline',
      package: Ionicons,
      title: 'Invite a friend',
    },
  ];

  const iconMap2 = [
    {
      name: 'prescription',
      package: Fontisto,
      title: 'My Orders',
    },
    {
      name: 'checklist',
      package: Octicons,
      title: 'Wishlist',
    },
    {
      name: 'wallet-outline',
      package: Ionicons,
      title: 'Wallet',
    },
    {
      name: 'person-outline',
      package: Ionicons,
      title: 'Subscription',
    },
  ];

  const RenderItem = ({item, index}) => {
    const IconComponent = item.package;
    return (
      <TouchableOpacity style={styles.menuContainer}>
        <IconComponent name={item.name} size={24} color="black" />
        <Text style={{marginLeft: 10,color:colors.black}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const RenderFourItem = ({item, index}) => {
    const IconComponent = item.package;
    return (
      <TouchableOpacity style={styles.menuContainer1}>
        <IconComponent name={item.name} size={24} color="black" />
        <Text style={{marginLeft: 10,color:colors.black}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.view}>
          <AntDesign
            name="arrowleft"
            size={25}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text1}>Account</Text>
        </View>
      </View>

      {/* Information Container */}
      <View>
        {/* Content inside the gradient background */}
        <LinearGradient
          start={{x: 0, y: 1}} // Left side of the screen
          end={{x: 1, y: 0}} // Right side of the screen
          colors={['#0c694c', '#d1dcd1']}
          style={styles.informationContainer}>
          <Image
            source={require('../../assets/images/whiteCircle.png')}
            style={styles.image}
          />
          <View style={styles.innerInformationView}>
            <Text style={styles.name}>Nighil</Text>
            <Text style={styles.email}>nighil05@gmail.com</Text>
          </View>
        </LinearGradient>
      </View>

      {/* Four options */}
      <View style={styles.menuContainer1}>
        <FlatList
          data={iconMap2}
          numColumns={2}
          renderItem={({item, index}) => (
            <RenderFourItem item={item} index={index} />
          )}
        />
      </View>

      {/* menus */}

      <FlatList
        data={iconMap}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </ScrollView>
  );
};

export default Profile;
