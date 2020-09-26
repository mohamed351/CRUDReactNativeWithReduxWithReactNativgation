import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppText({icon ,...otherProperies}) {
  return (
      <View style={styles.container}>
          { icon && <Ionicons style={styles.IconTextItem} name={icon} size={24} color="black" />}
          <TextInput style={styles.TextInputStyle} {...otherProperies}></TextInput>
    </View>
  );
}
//<ion-icon name="person-outline"></ion-icon>
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#ccc",
        padding: 10,
        marginVertical: 10,
        borderRadius:25
            
    },
    TextInputStyle: {
        marginLeft:12
    },
    IconTextItem: {
        marginLeft:6
    }
  

})

