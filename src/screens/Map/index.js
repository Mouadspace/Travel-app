import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {Text, View} from 'react-native';
import styles from './style';
import BackIcon from '../../components/BackIcon';

const Map = ({route}) => {
  const {item} = route?.params || {};
  const cords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackIcon style={{marginLeft: 10}} />
        <Text style={styles.title}>
          {item?.name}, {item?.city}
        </Text>
      </View>
      <MapView style={styles.map} initialRegion={cords}>
        <Marker coordinate={cords} title={item?.name} />
      </MapView>
    </View>
  );
};

export default React.memo(Map);
