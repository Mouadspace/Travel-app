import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const isSelected = item === selectedCategory;

        return (
          <Pressable
            onPress={() => onCategoryPress(item)}
            style={[
              styles.container,
              isSelected ? styles.containerSelected : {},
            ]}>
            <Text style={[styles.item, isSelected ? styles.itemSelected : {}]}>
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

export default React.memo(Categories);
