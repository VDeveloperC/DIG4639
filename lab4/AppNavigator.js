import { createStackNavigator, createAppContainer } from 'react-navigation';
import WeatherProject from './WeatherProject';
import Settings from './Settings';

export default createAppContainer(createStackNavigator({
  Home: WeatherProject,
  Settings: Settings,
}, {initialRouteName: "Home"}));