import React, {useState, useEffect} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import colors from '../../Constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import styles from './styles';

const Categories = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://apihcart.hawkssolutions.com/public/v1/products/getAll',
        {
          table: 'products',
          pageLimit: 10,
          offset: 0,
        },
      );
      setData(response.data.pagination.pageData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [5000]);

  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.renderContainer}>
        <View style={{margin:5,flex:1}}>
          <Image
            source={{
              uri: 'https://apihcart.hawkssolutions.com/public/' + item.image,
            }}
            style={styles.image}
          />
          <View style={{padding: 10}}>
            <Text style={styles.name}>{item.combinationName}</Text>
            <View style={styles.innerRenderView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.price1}>₹400</Text>
                <Text style={styles.price2}>₹{item.combinationPrice}</Text>
              </View>

              <Fontisto name="heart-alt" size={20} color={colors.black} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.lightGrey}}>
      <StatusBar backgroundColor={colors.primaryGreen} />
      <CustomHeader />

      <Text style={styles.heading}>Today's Featured</Text>

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </View>
  );
};

export default Categories;
