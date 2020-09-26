import React from 'react';
import { StyleSheet,Text,View,Button } from 'react-native';

export default function EmployeeItemCompoent(props) {
    return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text>{props.info.name}</Text>
          </View>
        
          <View style={styles.containerButtons}>
        
                <Button color="red" title="Delete"></Button>
                <Button color="green" title="Details"></Button>
                <Button title="Edit"></Button>
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
