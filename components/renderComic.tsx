import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Comic = {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  };

const fetchComics = async (number: string): Promise<Comic> => {
  const response = await axios.get(`https://xkcd.com/${number}/info.0.json`);
  return response.data;
};

const RenderComic = ({ number }: { number: string }) => {
  const navigation = useNavigation();
  const { data, isLoading, isError } = useQuery<Comic>(`comic-${number}`, () => fetchComics(number));

  const handleComicPress = () => {
    if (data) {
      navigation.navigate('ComicDetailScreen', { comic: data });
    }
  };

  if (isLoading) {
    return <Text>Loading comic #{number}...</Text>;
  }

  if (isError) {
    return <Text>Error loading comic #{number}</Text>;
  }

  return (
    <TouchableOpacity style={styles.comicItem} onPress={handleComicPress}>
      <Text style={styles.comicTitle}>{data?.title}</Text>
      <Text style={styles.comicNum}>#{data?.num}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default RenderComic;
