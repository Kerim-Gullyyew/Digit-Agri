import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { StyleSheet } from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import { pagesName } from '../constants/titles';
import StoreScreen from '../pages/StoreScreen';
import RecordScreen from '../pages/RecordScreen';
interface BottomTabsProps {

}
const Tab = createBottomTabNavigator();
const BottomTabs: React.FC<BottomTabsProps> = ({ }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={pagesName.Home} component={HomeScreen} />
      <Tab.Screen name={pagesName.Store} component={StoreScreen} />
      <Tab.Screen name={pagesName.Record} component={RecordScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs
const styles = StyleSheet.create({});