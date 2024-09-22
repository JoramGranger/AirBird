// FontContext.tsx
import React, { createContext, useContext } from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_300Light } from '@expo-google-fonts/montserrat';

const FontContext = createContext(null);

export const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (<Text>Loading...</Text>);
  }

  return (
    <FontContext.Provider value={{ fontFamily: 'Montserrat_300Light' }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);