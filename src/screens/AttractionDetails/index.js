import React, {useEffect, useState} from 'react';
import {Marker} from 'react-native-maps';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';

import styles from './style';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item.images?.length ? item.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const isLastVisibleImage = index => index === slicedImages.length - 1;
  const cords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  const [imageSrc, setImageSrc] = useState(mainImage);

  useEffect(() => {
    setImageSrc(mainImage);
  }, []);

  const onBack = () => navigation.goBack();
  const onGalleryNavigate = () =>
    navigation.navigate('Gallery', {images: item?.images});

  const imageWithoutParam = mainImage.split('?')[0];
  const imageParts = imageWithoutParam.split('.');
  const imageExtension = imageParts[imageParts.length - 1];

  const onShare = async () => {
    try {
      const base64Image = await ImgToBase64.getBase64String(mainImage);
      Share.open({
        message: `hey look at ${item?.name}
it's an amazing attraction`,
        title: item?.name,
        url: `data:image/png;base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (e) {
      console.log('sharing error =>', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Pressable onPress={onShare}>
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
        <View style={styles.mapContainer}>
          <MapView style={styles.map} initialRegion={cords}>
            <Marker coordinate={cords} title={item?.name} />
          </MapView>
        </View>
        <Text
          style={styles.showMap}
          onPress={() => navigation.navigate('Map', {item})}>
          Show full map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
