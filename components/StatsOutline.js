import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const StatsOutline = (props) => {
  return (
    <View style={styles.imageView}>
      
      {props.dataSource.map((data, index) => {
        return (
          <View key={index}> 
            <Text style={styles.text}>{data.name}</Text>
            <Image 
              style={styles.image}
              source={data.image}
            />
            <Text style={styles.text}>{data.value}</Text>
          </View>
        )
      })}

    </View>
  );
}

const styles = StyleSheet.create({
    image: {
      height: 150,
      width: 100, 
      alignContent: 'center',
    },
    imageView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 10,
      paddingBottom: 10
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
    }
  })

export default StatsOutline;