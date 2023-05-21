import React from 'react';
import { render } from 'react-native-testing-library';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeScreen from '../screens/Home';

describe('HomeScreen', () => {
  test('renders correctly', () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </QueryClientProvider>
    );

    const headerText = getByText('Comics');
    expect(headerText).toBeDefined();
  });

});
