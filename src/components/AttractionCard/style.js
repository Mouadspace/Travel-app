import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    width: (width - 80) / 2,
    padding: 6,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginRight: 16,
  },
  img: {
    width: (width - 104) / 2,
    aspectRatio: 1.5,
    borderRadius: 15,
  },
  icon: {
    width: 8,
    aspectRatio: 1,
    marginRight: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    marginTop: 12,
    marginRight: 8,
  },
  subTitle: {
    fontSize: 10,
    color: 'rgba(0,0,0,.5)',
    marginbottom: 12,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
