import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../../theme/colors';
import ReButton from '../../components/ReButton';

interface OnBoardProps {
  OnboardImage: any,
  OnboardTitle: string,
  OnboardSubTitle: string,
  OnboardButtonTitle: string,
}

const Onboard = ({OnboardImage, OnboardTitle, OnboardSubTitle, OnboardButtonTitle }) => {
  const router = useRouter();

  return (
    <View>
      {/* Image section */}
      <Image
        source={OnboardImage}
        style={styles.image}
      />

      {/* Text section */}
      <View style={styles.textContainer}>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
        </View>
        <Text style={styles.title}>{OnboardTitle}</Text>
        <Text style={styles.subtitle}>{OnboardSubTitle}</Text>

        {/* Button */}
        {/* <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> */}
        <ReButton variant='secondary' title={OnboardButtonTitle} onPress={() => {}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '50%', // Adjust this to fit the image
    resizeMode: 'contain',
    marginBottom: -4,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.secondary,
  },
  indicatorContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 5,
  },
  indicator: {
    backgroundColor: colors.white,
    height: 5,
    width: '15%',
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboard;
