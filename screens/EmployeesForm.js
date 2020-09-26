import React from 'react';
import { Text, View } from 'react-native'
import InputText from '../components/InputText';
import { Ionicons } from '@expo/vector-icons';

export default function EmployeesForm() {
  return (
      <View>
          <InputText placeholder="Name" icon="ios-person"></InputText>
         

   </View>
  );
}
