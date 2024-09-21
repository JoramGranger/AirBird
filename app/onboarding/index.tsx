import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  const navigateToOtherPage = () => {
    // Navigate to another screen (e.g., someOtherPage)
    router.push('/someOtherPage'); // Adjust the path as needed
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding</Text>
      <Button title="Go to Other Page" onPress={navigateToOtherPage} />
    </View>
  );
};

export default HomeScreen;