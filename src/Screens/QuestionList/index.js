import React from "react";
import { ScrollView, StatusBar,View,Text, FlatList } from "react-native";
import styles from "./styles";
import colors from "../../Constants/colors";
import CustomHeader from "../../Components/CustomHeader";
import CustomButton from "../../Components/CustomButton.js";
import { useNavigation } from "@react-navigation/native";

const QuestionList = () =>{

    const navigation = useNavigation()

    const data = [
      {
        question:'Where is this institute situated ?',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when too',
        answerNo:0
      },

      {
        question:'Is this institute good ?',
        desc:'I would like to know if this institute is good for python course',
        answerNo:1
      }

    ]

    const RenderItem = ({item,index}) =>{
        return(
            <View style={styles.box}>

            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.de}>{item.desc}</Text>
            <View style={styles.subBox}>
                <Text style={styles.text}>{item.answerNo} answer</Text>
                <Text style={styles.text}>comments</Text>
            </View>
    
           </View>
        )  
    }

    const handleButtonPress = () =>{
    navigation.navigate('AskQuestion')
    }

    return(
        <ScrollView style={styles.mainContainer}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'}/>

           <CustomHeader 
           head='Question List'
           type='list'
           />
           
           <View style={styles.subContainer}>
             <Text style={styles.head}>Your Questions</Text>
             <Text style={styles.desc}>Here are the list of questions you{'\n'} have asked over time</Text>
             <CustomButton
             buttonText='Ask a Question'
             type='secondary'
             handleButtonPress={handleButtonPress}
             />
           </View>

           <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
           
          
        
        </ScrollView>
    )
}

export default QuestionList