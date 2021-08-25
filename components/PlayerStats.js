import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import StatsOutline from './StatsOutline';

const goalscorersData = [
  {
    'name': 'Cristiano Ronaldo',
    'image': require('../images/Cristiano_Ronaldo_Portugal.jpg'),
    'value': 5
  },
  {
    'name': 'Patrick Schick',
    'image': require('../images/Patrick_Schick_CR.jpg'),
    'value': 5
  },
  {
    'name': 'Romelu Lukaku',
    'image': require('../images/Romelu_Lukaku_Belgium.png'),
    'value': 4
  },
]

const assistsData = [
  {
    'name': 'Steven Zuber',
    'image': require('../images/Steven_Zuber.jpg'),
    'value': 4
  },
  {
    'name': 'Luke Shaw',
    'image': require('../images/Luke_Shaw.jpg'),
    'value': 3
  },
  {
    'name': 'Dani Olmo',
    'image': require('../images/Dani_Olmo.jpg'),
    'value': 3
  },
]

const cleanSheetsData = [
  {
    'name': 'Jordan Pickford',
    'image': require('../images/Jordan_Pickford.jpg'),
    'value': 5
  },
  {
    'name': 'Thibaut Courtois',
    'image': require('../images/Thibaut_Courtois.jpg'),
    'value': 3
  },
  {
    'name': 'Donnarumma',
    'image': require('../images/Donnarumma.jpg'),
    'value': 3
  },
]

const distanceRunData = [
  {
    'name': 'Jorginho',
    'image': require('../images/Jorginho.jpg'),
    'value': 86.6
  },
  {
    'name': 'Kalvin Phillips',
    'image': require('../images/Kalvin_Phillips.jpg'),
    'value': 83.0
  },
  {
    'name': 'Pedri',
    'image': require('../images/Pedri.jpg'),
    'value': 76.1
  },
]

const PlayerStats = () => {
  return (
    <ScrollView>
      <Text style={styles.categoryText}>Goals</Text>
        <StatsOutline dataSource={goalscorersData}/>
      <Text style={styles.categoryText}>Assists</Text>
        <StatsOutline dataSource={assistsData}/>
      <Text style={styles.categoryText}>Clean Sheets</Text>
        <StatsOutline dataSource={cleanSheetsData}/>
      <Text style={styles.categoryText}>Distance Run (km)</Text>
        <StatsOutline dataSource={distanceRunData}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    categoryText: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: '#708090'
    },
  })

  export default PlayerStats;