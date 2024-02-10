import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:colors.lightGrey,
    padding:2,
    borderRadius: 6,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.text,
  },
  textInput: {
    flex:1,
    color: colors.black,
    fontSize: 15,
    paddingLeft:12,
    
  },
  icon: {
    width: 20,
    height:20,
    resizeMode: 'contain',
    margin:10
  },
  checkText:{
   // fontFamily: 'Lato-Regular',
    color: colors.primaryBlue,
    fontSize: 15,
  }
});

export default styles;