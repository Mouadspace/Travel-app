import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    borderRadius: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 18,
    marginHorizontal: 16,
    width: 42,
    height: 42,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 15,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  miniImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 4,
  },
  more: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    top: 4,
    left: 8,
  },
  moreContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 50,
    height: 50,
    top: 4,
    left: 4,
    borderRadius: 10,
  },
  title: {
    marginTop: 40,
    color: '#000',
  },
  subTitle: {
    marginTop: 8,
    color: '#000',
    fontWeight: '400',
    fontSize: 22,
  },
});

export default styles;
