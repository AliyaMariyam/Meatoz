import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';


const styles = StyleSheet.create({
  button:{
   // flex:1,
    padding:15,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    flexDirection:'row',
    backgroundColor:colors.primaryBlue
  },
 text:{
    color:colors.white,
    fontSize:18,
    fontWeight:'700'
 }

});

export default styles;