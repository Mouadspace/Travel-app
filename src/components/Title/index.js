import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from './style';

const Title = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

export default React.memo(Title);
