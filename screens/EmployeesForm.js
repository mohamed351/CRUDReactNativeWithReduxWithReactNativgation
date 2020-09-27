import React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native'
import InputText from '../components/InputText';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as action from '../redux/actions/employeesActions';

 const  EmployeesForm =(props) => {
   return (
     <Formik initialValues={
       {
         name: "",
         salary: 0,
         departmentID: 2
       }
     } onSubmit={(values) => { console.log(values); props.CreateEmployee(values) }}>
      {({ handleSubmit, handleChange }) => (
        <>
    <View style={styles.formContainer}>
            <TextInput style={styles.textStyle} placeholder="Name"   onChangeText={handleChange("name")}></TextInput>
            <TextInput style={styles.textStyle} placeholder="Salary" onChangeText={handleChange("salary")}></TextInput>
      <TextInput style={styles.textStyle} placeholder="DepartmentID"onChangeText={handleChange("departmentID")} ></TextInput>
      <View style={{marginTop:10}}>
              <Button title="Submit" onPress={handleSubmit} ></Button>
      </View>
   </View>
        </>
      )}
     
    </Formik>
   
  );
}
const styles = StyleSheet.create({
  textStyle: {
    borderBottomColor: "#333",
    borderBottomWidth: 2,
    padding: 2,
    fontSize: 25,
    marginTop: 25
  },
  formContainer: {
    margin: 1,
    flex: 1
  }
});
const mapStateToProps = state => ({
  Employees: state.Employees.list
});
const mapActionToProps = {
  CreateEmployee:action.createEmployees
} 
export default connect(mapStateToProps,mapActionToProps)(EmployeesForm)