import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Drawers from './src/navigations/Drawers';
import Routes from './src/navigations/Routes';

const App: React.FC = ({ }) => {
  return (
    <Provider>
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>

    </Provider>
  )
}

export default App
const styles = StyleSheet.create({

});