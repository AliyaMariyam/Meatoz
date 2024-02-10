import { StyleSheet } from "react-native";
import colors from "../../Constants/colors";

 
const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:colors.lightestGrey
    },
    subContainer:{
        flexShrink:1,
        paddingHorizontal:30,
        paddingVertical:20
    },
    head:{
      fontSize:30,
      color:colors.black,
      fontWeight:'700',
      marginBottom:10
    },
    desc:{
        fontSize:18,
        color:colors.text,
        fontWeight:'400'
    },
    box:{
        flexShrink:1,
        paddingHorizontal:20,
        paddingVertical:5,
        backgroundColor:colors.white,
        margin:10

    },
    question:{
        fontSize:18,
        color:colors.lightBlack,
        fontWeight:'400',
        marginBottom:10,
    },
    de:{
        fontSize:16,
        color:colors.text,
        fontWeight:'300',
        marginBottom:10,
    },
    subBox:{
     flexDirection:'row',
     justifyContent:'space-between'
    },
    text:{
        fontSize:16,
        color:colors.text,
        fontWeight:'400',
        marginBottom:10,
    },
    

    

})


export default styles