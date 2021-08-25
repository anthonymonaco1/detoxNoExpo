import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import PlayerSelection from './components/PlayerSelection';
import PlayerStats from './components/PlayerStats';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}
          testID='playerShortlist'>
      <Header title="Your Euro 2020 Team of the Tournament!" />
      <PlayerSelection/>
      <Button
        title="View Tournament Statistics"
        onPress={() => navigation.navigate('Stats')}
        testID='statsButton'
      />
    </View>
  );
}

const StatsScreen = ({navigation}) => {
  return (
    <View style={styles.container}
          testID='statsScreen'>
      <Header title="Your Euro 2020 Team of the Tournament!" />
      <PlayerStats/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Player Shortlist' }}
        />
        <Stack.Screen 
          name="Stats"
          component={StatsScreen}
          options={{ title: 'Player Stats' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;