import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
