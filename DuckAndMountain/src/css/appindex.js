import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#f0ffff',
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: 'red',
        marginLeft: 5,
        marginRight: 5,
    },
    item: {
        width: (windowWidth - 32) / 2,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        height: 200,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 8,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
    },
    user: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
    },
    user_img: {
        flex: 1,
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    user_name: {
        flex: 4,
        height: 30,
        lineHeight: 30,
        marginLeft: 5,
    },
    date: {
        textAlign: 'right',
        marginLeft: 8,
        marginRight: 8,
        color: 'gray',
    },
});

 
module.exports = styles; 