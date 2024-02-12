import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  container: {
    flexShrink: 1,
    backgroundColor: colors.primaryGreen,
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.lightGrey,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '500',
    marginLeft: 15,
  },
  informationContainer: {
    flexShrink: 1,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.primaryGreen,
    margin: 10,
    borderRadius: 10,
  },
  innerInformationView: {
    marginLeft: 20,
  },
  image: {
    width: 55,
    height: 55,
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.white,
    marginBottom: 5,
  },
  email: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.white,
  },
  menuContainer: {
    flexShrink: 1,
    padding: 25,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuContainer1: {
    flexShrink: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 15,
  },
});

export default styles;
