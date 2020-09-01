import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenHeader from '../components/ScreenHeader.js'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import EventList from '../components/EventList.js';


const TabIcon = (props) => (
  <Ionicons
    name={'md-home'}
    size={35}
    color={props.focused ? '#e91e63' : 'grey'}
  />
)

const APIURL = 'http://192.168.10.57:8000/events';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: null
    };
  }

  static navigationOptions = {
    tabBarIcon: TabIcon,
    tabBarLabel: 'Search'
  };

  //Initial fetching of events
  componentDidMount = () => {
    console.log("YOOO")
    fetch(APIURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((events => {
        console.log("Events received")
        this.setState( {eventList: events}, () => {
          //Do something after setting eventlist
         
        })
      }))
      .catch(res => {
        //In case fetching fails
        console.log("Promise rejected")
      });
  }

  logList = () => {
    console.log(this.state.eventList)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScreenHeader name={'Event App'} />
        <View style={styles.contentView}>
        <Button onPress={this.logList} title="Check list" />
          <EventList events={this.state.eventList} />
          
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

