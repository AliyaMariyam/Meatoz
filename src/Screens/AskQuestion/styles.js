import { StyleSheet } from "react-native";
import colors from "../../Constants/colors";

const styles = StyleSheet.create({
   
    mainContainer:{
        flex:1,
        backgroundColor:'white',
     },
     headerStyle:{
        fontSize:20,
        color:colors.black,
        fontWeight:'300',
        marginBottom:40,
        marginTop:10,
    },
    subContainer:{
        flexShrink:1,
        padding:20,
    },
    subHead:{
        fontSize:15,
        fontWeight:'500',
        color:colors.lightBlack,
    },
    desc:{
        color:colors.lightBlack,
        fontSize:15,
        marginTop:2
    },
    forgotButton:{
      alignSelf:'center',
      marginTop:50
    },
    forgotText:{
      color:colors.primaryBlue,
      fontSize:18,
      fontWeight:'500',
    },
    
})

export default styles