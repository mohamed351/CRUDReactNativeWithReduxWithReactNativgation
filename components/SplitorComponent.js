import React from 'react';
import {View,StyleSheet } from 'react-native';

export default function SplitorComponent() {
      return (
          <View style={styles.splitorStyle}></View>
      )
}
const styles = StyleSheet.create({
    splitorStyle: {
        backgroundColor: "#333",
        width: "100%",
        height: 1,
   
       
    }
})
