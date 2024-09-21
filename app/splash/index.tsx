import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/airbird.svg';

const SplashScreen = () => {
  return(
    <View style={styles.container}>
        <Logo width={200} height={200} />
      <Text>AirBird</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;