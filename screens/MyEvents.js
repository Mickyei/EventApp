import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ScreenHeader from '../components/ScreenHeader.js'
import { Ionicons } from '@expo/vector-icons';


const TabIcon = (props) => (
  <Ionicons
    name={'md-apps'}
    size={35}
    color={props.focused ? '#e91e63' : 'grey'}
  />
)

export default class MyEvents extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon,
    tabBarLabel: 'My Events'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScreenHeader name={'My Events'} />
        <View style={styles.contentView}>
          <Text>Hello</Text>
        </View>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});