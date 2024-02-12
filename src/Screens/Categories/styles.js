import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  renderContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 16,
  },
  heading: {alignSelf: 'center', marginTop: 10, fontSize: 18,color:colors.black},
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    alignContent: 'center',
  },
  name: {marginTop: 10, color: colors.black, fontWeight: '400'},
  innerRenderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price1: {
    color: colors.black,
    fontWeight: '300',
    marginRight: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  price2: {color: colors.primaryGreen, fontWeight: '800'},
});

export default styles
