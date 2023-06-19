import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';

const InfoCard = ({icon, text, style}) => {
  return (
    <View style={styles.row}>
      <View style={styles.container}>
        <Image style={[styles.icon, style]} source={icon} />
      </View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default React.memo(InfoCard);
