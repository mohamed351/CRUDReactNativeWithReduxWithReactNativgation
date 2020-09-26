import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider} from 'react-redux';
import { store } from './redux/store'
import EmployeesList from './screens/EmployeesList';
import EmployeesForm from './screens/EmployeesForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen  name="Employees" component={EmployeesList} />
          <Stack.Screen  name="Create Employees" component={EmployeesForm}/>
      </Stack.Navigator>
        </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
