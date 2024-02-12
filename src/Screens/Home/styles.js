import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.lightestGrey,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    flexShrink: 1,
    padding: 20,
    marginTop: -1,
  },
  subContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 18,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 13,
  },
  text1: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '500',
    color:colors.text
  },
  categoryView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexShrink: 1,
    marginTop: -1,
    borderRadius: 8,
  },
  innerView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexShrink: 1,
    marginTop: -1,
    borderRadius: 8,
  },
  image1: {
    width: 85,
    height: 80,
    borderRadius: 50,
  },
  name:{
     color:colors.black,
     marginTop:5,
     fontSize:13
  },
  imageduck: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 15,
  },
  imageView: {
    flex:1,
     margin: 10,
     alignItems: 'center',
    padding:5
  },
});

export default styles;
