import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Onboard from "./onboarding/onboard";
import { FontProvider } from "../FontContext";
import Onboarding from "./onboarding";
const Start = () => {
  return(
    <FontProvider>
      <View style={styles.container}>
        <Onboarding />
      </View>
    </FontProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Start;