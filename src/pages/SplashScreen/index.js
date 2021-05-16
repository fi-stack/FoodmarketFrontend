import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffc700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo style={{width: 100, height: 100}} />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
