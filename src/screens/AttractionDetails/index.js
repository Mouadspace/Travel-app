import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
} from 'react-native';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';

import styles from './style';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item.images?.length ? item.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const isLastVisibleImage = index => index === slicedImages.length - 1;
  const [imageSrc, setImageSrc] = useState(mainImage);

  useEffect(() => {
    setImageSrc(mainImage);
  }, []);

  const onBack = () => navigation.goBack();
  const onGalleryNavigate = () =>
    navigation.navigate('Gallery', {images: item?.images});

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={styles.border}
        source={{uri: imageSrc}}>
        <View style={styles.header}>
          <Pressable onPress={onBack}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/back.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/share.png')}
            />
          </Pressable>
        </View>
        <View style={styles.footer}>
          {slicedImages?.map((image, index) => {
            return (
              <Pressable
                key={image}
                onPress={() =>
                  !isLastVisibleImage(index)
                    ? setImageSrc(image)
                    : onGalleryNavigate()
                }>
                <Image style={styles.miniImage} source={{uri: image}} />
                {diffImages > 0 && isLastVisibleImage(index) ? (
                  <View style={styles.moreContainer}>
                    <Text style={styles.more}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </Pressable>
            );
          })}
        </View>
      </ImageBackground>
      <View style={styles.row}>
        <Title style={[styles.title, {flex: 1}]} text={item?.name} />

        <Title style={styles.title} text={item?.entry_price} />
      </View>
      <Text style={styles.subTitle}>{item?.city}</Text>
      <InfoCard
        icon={require('../../assets/icons/location.png')}
        text={item?.address}
      />
      <InfoCard
        icon={require('../../assets/icons/schedule.png')}
        text={`OPEN\n${item?.opening_time}`}
        style={{width: 50, height: 50, margin: 0}}
      />
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
