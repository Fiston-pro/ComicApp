import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native';
import RenderComic from '../components/renderComic';

type Comic = {
  num: number;
  title: string;
  img: string;
};


const HomeScreen: React.FC = () => {
  const numbersArray = Array.from({ length: 2778 }, (_, index) => (index + 1).toString());

  const renderItem = ( item: string ) => {
    return (
      <RenderComic number={item} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Comics</Text>
        <FlatList
          data={numbersArray}
          keyExtractor={(item) => item}
          renderItem={({ item }) => renderItem(item) }
          contentContainerStyle={styles.comicsList}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  comicsList: {
    flexGrow: 1,
  },
  comicItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  comicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  comicNum: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;
