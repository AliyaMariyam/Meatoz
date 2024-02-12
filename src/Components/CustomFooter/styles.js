import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  maincontainer: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    padding: 10,
  },
  touchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: colors.text,
    fontSize: 10,
    marginTop: 2,
  },

  cartCount: {
    position: 'absolute',
    right: -8,
    top: -2,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 9,
  },
  count: {
    color: colors.white,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    left: '50%',
    transform: [{translateX: -10}], // Adjust this value to center the button correctl
  },
  button: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30, // half of the width and height to make it circular
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
