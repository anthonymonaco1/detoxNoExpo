import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const PlayerShortlist = [
  {
    title: 'Goalkeepers',
    data: ['Jordan Pickford', 'Gianluigi Donnarumma', 'Jann Sommer', 'Pau Lopez', 'Kasper Schmeichel']
  },
  {
    title: 'Defenders',
    data: ['Kyle Walker', 'Leonardo Spinazzola', 'Giorgio Chiellini', 'Leonardo Bonucci', 'Harry Maguire', 'John Stones', 'Luke Shaw', 'Aymeric Laporte', 'Simon Kjaer']
  },
  {
    title: 'Midfielders',
    data: ['Jorginho', 'Marco Veratti', 'Declan Rice', 'Kalvin Phillips', 'Pedri', 'Dani Olmo', 'Pierre-Emile Højbjerg', 'Paul Pogba']
  },
  {
    title: 'Forwards',
    data: ['Harry Kane', 'Raheem Sterling', 'Lorenzo Insigne', 'Federico Chiesa', 'Patrick Schick', 'Romelu Lukaku', 'Cristiano Ronaldo']
  }
]

const PlayerSelection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Your Team by clicking on 11 players!</Text>
      <SectionList
        sections={PlayerShortlist}
        renderItem={({item}) => 
          <ListItem item={item} />}
        renderSectionHeader={({section}) => 
          <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={index => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: '#708090',
    },
    text: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: '#708090'
    }
  })

export default PlayerSelection;