import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { EmployeesList} from '../screens/EmployeesList';
const AppNaigation = createStackNavigator({
   EmployeesList:EmployeesList,
});

export default createAppContainer(AppNaigation);