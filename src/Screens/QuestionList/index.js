import React, {useCallback, useEffect,useState} from 'react';
import {ScrollView, StatusBar, View, Text, FlatList} from 'react-native';
import styles from './styles';
import colors from '../../Constants/colors';
import CustomHeader from '../../Components/CustomHeader';
import CustomButton from '../../Components/CustomButton.js';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const QuestionList = () => {
  const navigation = useNavigation();
  const [dataList, setDataList] = useState([]);

  const token = useSelector(state => state.token);

  const questionList = () => {
    axios
      .get('https://portal.learnabble.xyz/api/v2/accounts/me/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        // Handle the response
       // console.log("response : ",response.data.results)
        setDataList(response.data.results)
        console.log("dataList : ",dataList)
      })
      .catch(error => {
        // Handle error
        console.log('Questions Error:', error);
      });
      

  };

  useFocusEffect(
    useCallback(() => {
      questionList();
      
    }, [])
  );

 console.log("dataList : ",dataList);

  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.box}>
        <Text style={styles.question}>{item.title}</Text>
        <Text style={styles.de}>{item.description}</Text>
        <View style={styles.subBox}>
          <Text style={styles.text}>{item.answers_count} answer</Text>
          <Text style={styles.text}>comments</Text>
        </View>
      </View>
    );
  };

  const handleButtonPress = () => {
    navigation.navigate('AskQuestion');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />

      <CustomHeader head="Question List" type="list" />

      <View style={styles.subContainer}>
        <Text style={styles.head}>Your Questions</Text>
        <Text style={styles.desc}>
          Here are the list of questions you{'\n'} have asked over time
        </Text>
        <CustomButton
          buttonText="Ask a Question"
          type="secondary"
          handleButtonPress={handleButtonPress}
        />
      </View>


      <FlatList
        data={dataList}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </ScrollView>
  );
};

export default QuestionList;
