import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';

const Gallery = ({route}) => {
  const {item} = route?.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black'}}>{item}</Text>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
