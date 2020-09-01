import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const EventCard = (props) => {
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text>{props.item.date}</Text>
            <Text>{props.item.location}</Text>
            <Text style={styles.description} >{props.item.description}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title : {
        fontSize: 20,
        color: '#000'
    },
    description: {
        fontSize: 12,
        
    }
  });

  export default EventCard;