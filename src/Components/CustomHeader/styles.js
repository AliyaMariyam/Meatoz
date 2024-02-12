import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: colors.primaryGreen,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 9,
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
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text1: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '600',
  },
  button: {
    flexShrink: 1,
    paddingHorizontal: 18,
    paddingVertical: 6,
    backgroundColor: colors.text,
  },
  buttonText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '800',
    alignSelf: 'center',
  },
});

export default styles;
