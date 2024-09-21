import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Splash from "./splash";

const Start = () => {
  return(
    <View style={styles.container}>
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Start;