import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  row: {
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  map: {
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  title: {
    width: '70%',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default styles;
