import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import EventCard from './EventCard';


function EventList(props) {
    const [eventList, setEventList] = useState(props.events)

    return (
        <View style={styles.list}>
            <FlatList 
            style={styles.list}
            data={props.events}
            keyExtractor={(item, index) => item._id}
            renderItem= {({item})=>(
                <EventCard item={item}/>
                )}
            
            ></FlatList>
        </View>
    )



}

const styles = StyleSheet.create({
    list: {
       flex:1,
        alignSelf: 'stretch'
    }
});

export default EventList;