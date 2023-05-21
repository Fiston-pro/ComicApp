import React from 'react';
import { render } from 'react-native-testing-library';
import ComicDetailScreen from '../screens/ComicDetail';

const mockComic = {
  month: '1',
  num: 2,
  link: '',
  year: '2006',
  news: '',
  safe_title: 'Petit Trees (sketch)',
  transcript: "[[Two trees are growing on opposite sides of a sphere.]]\n{{Alt-title: 'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch}}",
  alt: "'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch",
  img: 'https://imgs.xkcd.com/comics/tree_cropped_(1).jpg',
  title: 'Petit Trees (sketch)',
  day: '1',
};

describe('ComicDetailScreen', () => {
  test('renders comic details correctly', () => {
    const { getByText, getByTestId } = render(<ComicDetailScreen route={{ params: { comic: mockComic } }} />);

    const comicNum = getByText(mockComic.num.toString());
    expect(comicNum).toBeDefined();

    const comicTitle = getByText(mockComic.safe_title);
    expect(comicTitle).toBeDefined();

    const comicTranscript = getByText('Transcript:');
    expect(comicTranscript).toBeDefined();

  });
});
