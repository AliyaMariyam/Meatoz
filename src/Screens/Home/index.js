import React, {useEffect, useState} from 'react';
import {StatusBar, View, Image, Text, ScrollView, FlatList} from 'react-native';
import colors from '../../Constants/colors';
import CustomHeader from '../../Components/CustomHeader';
import axios from 'axios';
import styles from './styles';
import CustomSearchBar from '../../Components/CustomSearchBar';

const Home = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://apihcart.hawkssolutions.com/public/v1/categories',
        {},
      );
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const RenderItem = ({item, index}) => {
    return (
      <View style={{flex:1}}>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: 'https://apihcart.hawkssolutions.com/public/' + item.image,
            }}
            style={styles.image1}
          />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryGreen} />
      <CustomHeader />

      <View style={styles.view}>
        <CustomSearchBar />
      </View>

      {/* Banner */}
      <View style={styles.subContainer}>
        <Image
          source={require('../../assets/images/banner.jpg')}
          style={styles.image}
        />

        {/* Recent Orders */}
        <Text style={styles.text1}>Recent Orders</Text>
        <View style={styles.categoryView}>
          <Image
            source={require('../../assets/images/duck.jpg')}
            style={styles.imageduck}
          />
          <View>
            <Text style={{color: colors.black, marginBottom: 5}}>
              Order Placed
            </Text>
            <Text style={{color: colors.black}}>
              {' '}
              Duck With Skin Curry cut 1 nos
            </Text>
          </View>
        </View>

        {/* Category */}
        <Text style={styles.text1}>Category</Text>
          <FlatList
          data={data}
          numColumns={3}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
         
        />
       
        
      </View>
    </ScrollView>
  );
};

export default Home;
