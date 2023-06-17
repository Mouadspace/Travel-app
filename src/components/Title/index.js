import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from './style';

const Title = ({monText}) => {
  const [count, setCount] = useState(0);
  const textPressed = () => {
    setCount(count * 1 + 1);
  };

  return (
    <Text onPress={textPressed} style={styles.title}>
      {count}
    </Text>
  );
};

export default React.memo(Title);
