import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 60+50,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#f0ffff',
    },
    search_input: {
        width: 270,
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
    },
    search_button: {
        width: 50,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
});

 
module.exports = styles; 