import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './style';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attraction.json';
import categories from '../../data/categories.json';

const ALL = 'All';

const Home = () => {
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
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subTitle} />
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[ALL, ...categories]}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.row}>
          {data?.map((item, index) => {
            return (
              <AttractionCard
                key={item.id}
                imgSrc={item.images ? item.images[0] : null}
                title={item.name}
                subTitle={item.city}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
