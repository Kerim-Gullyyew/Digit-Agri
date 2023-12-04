import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet } from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import { pagesName } from '../constants/titles';

interface DrawersProps {

}
const Drawer = createDrawerNavigator();
const Drawers: React.FC<DrawersProps> = ({ }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={pagesName.Home} component={HomeScreen} />
      <Drawer.Screen name={pagesName.Store} component={HomeScreen} />
      <Drawer.Screen name={pagesName.Record} component={HomeScreen} />

    </Drawer.Navigator>
  )
}

export default Drawers
const styles = StyleSheet.create({});