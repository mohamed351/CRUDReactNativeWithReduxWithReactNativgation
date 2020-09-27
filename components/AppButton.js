import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons} from '@expo/vector-icons';
export default function AppButton(props) {
    return (
        <View style={{ ...styles.container ,backgroundColor:props.color}  }>
            {props.icon && <Ionicons name={props.icon} style={styles.iconContainer} ></Ionicons>}
            <Text style={styles.textContainer}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        margin:2
    },
    iconContainer: {
        paddingRight: 5,
        color:"#fff"
    },
    textContainer: {
        color:"#fff"
    }
})
