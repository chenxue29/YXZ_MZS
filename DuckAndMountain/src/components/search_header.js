import React,{  useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';
import styles from '../css/search_header';

function SearchHeader(props){
    const [searchName, setSearchName] = useState('');

    return (
        <View style={styles.header}>
            <TextInput style={styles.search_input} value={searchName} onChangeText={text=>setSearchName(text)} />
            <Pressable style={styles.search_button}>
                <Text>登录</Text>
            </Pressable>
        </View>
        
    );
};

export default SearchHeader;