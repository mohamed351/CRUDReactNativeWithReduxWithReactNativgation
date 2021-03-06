import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeesActions';
import {  FlatList, StyleSheet, View, Platform, StatusBar } from 'react-native';

import SplitorComponent from '../components/SplitorComponent';
import EmployeeItemCompoent from '../components/EmployeeItemCompoent'; 



const EmployeesList = (props) => {
  //console.log();
 // props.navigation.navigate("")

  useEffect(() => {
    props.fetchAllEmployees();  
  }, [])
  
  return (

    <View>
      
      <View>
      <FlatList  data={props.Employees}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <EmployeeItemCompoent info={item} />}
          ItemSeparatorComponent={() => <SplitorComponent />}></FlatList>
      </View>
     
      </View>
   
         
   
  )
}
const mapStateToProps = state => ({
  Employees: state.Employees.list
});
const mapActionToProps = {
  fetchAllEmployees:fetchEmployees
}
const styles = StyleSheet.create({
  
})



export default connect(mapStateToProps,mapActionToProps)(EmployeesList);



