import React from 'react';
import { View, Text, Image, StyleSheet,} from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';
import Onboard from './onboard';
import hostessImage from '../../assets/hostess.png';

const Onboarding = () => {
  const router = useRouter(); // use expo-router's useRouter hook for navigation

  const OnBoardContet = [
    {
      'image': hostessImage,
      'title': 'Discover your dream flight easily',
      'subtitle': 'It is a long established fact that a reader will be distracted...',
      'buttontitle': 'Next',
    },
    {
      'image': hostessImage,
      'title': 'We are making travel easy',
      'subtitle': 'It is a long established fact that a reader will be distracted...',
      'buttontitle': 'Next',
    },
    {
      'image': hostessImage,
      'title': 'Let’s enjoy the beautiful world',
      'subtitle': 'It is a long established fact that a reader will be distracted...',
      'buttontitle': 'Next',
    },

  ]

  return (
    <Swiper showsButtons={false} loop={false} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      {
        OnBoardContet.map((item, index) => (
          <View style={styles.slide}>
            <Onboard 
              OnboardImage={item.image}
              OnboardTitle={item.title}
              OnboardSubTitle={item.subtitle}
              OnboardButtonTitle={item.buttontitle}
            />           
          </View>
        ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#6A0DAD',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Onboarding;