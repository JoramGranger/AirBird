import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/airbird.svg';
import colors from "../../theme/colors";
import { useFonts } from "expo-font";
import { Montserrat_400Regular, Montserrat_700Bold_Italic } from "@expo-google-fonts/montserrat";

const SplashScreen = () => {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold_Italic,
  });

  if (!fontsLoaded) {return <Text>App Loading</Text>}
  return(
    <View style={styles.container}>
        <Logo width={200} height={200} />
      <Text style={styles.text}>Air-Bird</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    logo: {
        width: 200,
        height: 200,
    },
    text: {
      fontSize: 60,
      color: colors.secondary,
      fontFamily: 'Montserrat_700Bold_Italic',
    }
});

export default SplashScreen;