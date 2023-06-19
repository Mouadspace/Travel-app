import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import styles from './style';

const AttractionCard = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.card}>
      <Image source={{uri: props.imgSrc}} style={styles.img} />
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/location.png')}
        />
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </Pressable>
  );
};

export default React.memo(AttractionCard);
