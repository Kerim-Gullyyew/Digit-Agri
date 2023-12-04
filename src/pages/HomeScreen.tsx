import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
interface HomeScreenProps {
  navigation: any
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigate = (route: any) => navigation.navigate(route)
  return (
    <View style={{ flex: 1 }}>
  
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({});