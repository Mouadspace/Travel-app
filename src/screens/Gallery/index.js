import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const Gallery = ({navigation, route}) => {
  const {images} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <FlatList
          data={images}
          style={styles.list}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.img} />
          )}
        />
        <Pressable onPress={onBack} style={styles.iconContainer}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.icon}
          />
        </Pressable>
      </>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
