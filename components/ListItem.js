import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  const [itemColor, setItemColor] = useState(true);

  return (
    <TouchableOpacity 
      onPress={() => setItemColor(prevColor => !prevColor)}
      style={itemColor ? styles.listItemDefault : styles.listItemPressed}
      testID='listButton'
      accesibilityValue={itemColor ? 0 : 1}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{props.item}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItemDefault: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    listItemPressed: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderBottomWidth: 1,
      backgroundColor: `#7fff00`,
      borderColor: '#eee',
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    listItemText: {
      fontSize: 16
    },
  });

  export default ListItem;