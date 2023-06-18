import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './style';

const AttractionCard = props => {
  return (
    <View style={styles.card}>
      <Image source={{uri: props.imgSrc}} style={styles.img} />
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/location.png')}
        />
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
};

export default React.memo(AttractionCard);
