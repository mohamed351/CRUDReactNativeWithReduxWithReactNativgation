import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from './AppButton';


export default function EmployeeItemCompoent(props) {
    return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text>{props.info.name}</Text>
          </View>
        
          <View style={styles.containerButtons}>
         
        
          <AppButton title="Delete"  color="#e84118" > </AppButton>
     
          <AppButton title="Details"  color="#44bd32" > </AppButton>
          <AppButton title="Edit"  color="#487eb0" > </AppButton>
          </View>
           
          </View>
      );
  
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
       padding:10
        
      },
      containerButtons: {
        flex: 1,
        flexDirection: "row-reverse",
        width: "50%",
        justifyContent: "flex-start",
      
        
      }, 
      textContainer: {
        width: "50%",
        paddingTop:10
        
      }
})
