import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        flexDirection: 'row',
        fontSize: 20
    },
});

export default ScreenHeader;