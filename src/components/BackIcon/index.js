import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Image} from 'react-native';
import styles from './style';

const BackIcon = ({style}) => {
  const navigation = useNavigation();
  const onBack = () => navigation.goBack();

  return (
    <Pressable onPress={onBack}>
      <Image
        style={[styles.icon, style]}
        source={require('../../assets/icons/back.png')}
      />
    </Pressable>
  );
};

export default React.memo(BackIcon);
