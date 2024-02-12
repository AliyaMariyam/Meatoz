import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  newContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical:15,
  },
  search:{
    borderWidth:1,
    borderColor:colors.primaryGreen,
    backgroundColor:colors.white,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:15,
    paddingVertical:3,
    paddingHorizontal:8,
    flexGrow:1,
    alignSelf:'center'
  },
  searchIcon:{
    width:25,
    height:25,
    resizeMode:'contain'
  },
  voiceIcon:{
    width:25,
    height:25,
    resizeMode:'contain'
  },
  textInput:{
    flex:1,
    fontFamily:'Lato-Regular',
    fontSize:14,
    marginLeft:5,
    color:colors.primaryGreen
  },
  innerView:{
    flexDirection:'row',
    alignItems:'center'
  },
  filter:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    color:colors.primaryGreen
  }
});

export default styles;