import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface  Comic {
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

const ComicDetailScreen = ({ route }) => {

  const { comic } = route.params;

  return (
    <View style={styles.container}>
      { comic.num && <Text style={styles.comicNum}>{comic.num}</Text> }
      { comic.safe_title && <Text style={styles.comicTitle}>{comic.safe_title}</Text> }
      <Image source={{ uri: comic?.img }} alt= {comic.alt} style={styles.comicImage} />
      { comic.day && comic.month && comic.year && <Text style={styles.comicAlt}> {comic.day} / {comic.month} / {comic.year} </Text> }
      { comic.transcript && <Text style={styles.comicTranscript}> Transcript: </Text>}
      { comic.transcript && <Text style={styles.comicTranscript}> {comic.transcript} </Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  comicNum: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#888',
  },
  comicImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  comicTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  comicAlt: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#888',
  },
  comicTranscript: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default ComicDetailScreen;
