
import React, { useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const scaleValue = new Animated.Value(1);
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    startAnimation();
    navigateToDashboard();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const navigateToDashboard = () => {
    setTimeout(() => {
      SplashScreen.hideAsync();
      navigation.navigate("HomeScreen");
    }, 3000);
  };

  return (
      <LinearGradient
        colors={['#FFC371', '#F9AC6E']}
        style={styles.gradient}
      >
        <Animated.Image
          source={require('../assets/comics-logo.png')}
          style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
        />
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;
