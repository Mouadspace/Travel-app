import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './style';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attraction.json';
import categories from '../../data/categories.json';

const ALL = 'All';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Title
              text="Where do"
              style={{fontWeight: 'normal', paddingTop: 32}}
            />
            <Title text="you want to go?" />
            <Title text="Explore Attractions" style={styles.subTitle} />
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        numColumns={2}
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => {
          return (
            <AttractionCard
              key={item.id}
              onPress={() => navigation.navigate('AttractionDetails', {item})}
              imgSrc={item.images ? item.images[0] : null}
              title={item.name}
              subTitle={item.city}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
