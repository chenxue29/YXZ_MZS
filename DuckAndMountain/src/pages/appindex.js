import React,{ Component, useState } from 'react';
import {
    View,
    Text,
    Button,
    SafeAreaView,
    ScrollView,
    TextInput,
    Switch,
    Pressable,
    Alert,
    FlatList,
    Image
} from 'react-native';
import styles from '../css/appindex';
import SearchHeader from '../components/search_header';
import FootBar from '../components/foot_bar';

const Item = ({title, userName, date}) => {
    return(
            <Pressable style={styles.item} onPress={()=>{Alert.alert('跳转到展示页面', title)}}>
                <Image source={{ uri: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg' }} style={styles.image} />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
                <View style={styles.user}>
                    <Image source={{ uri: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg' }} style={styles.user_img} />
                    <Text style={styles.user_name} numberOfLines={1} ellipsizeMode={'tail'}>{userName}</Text>
                </View>
                <View>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </Pressable>
    )
};

function AppIndex(props){
    const {navigation}=props;
    const image = [
        {id: 1, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 150},
        {id: 2, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 180},
        {id: 3, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 4, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 100},
        {id: 5, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 200},
        {id: 6, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 230},
        {id: 7, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 120},
        {id: 8, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 250},
        {id: 9, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 180},
        {id: 10, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 230},
        {id: 11, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 170},
        {id: 12, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 13, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 100},
        {id: 14, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 15, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 16, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 17, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 18, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 19, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 20, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 21, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 22, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 23, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 24, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
        {id: 25, url: 'https://p1.ssl.qhmsg.com/t01d40f0b5316c5f58d.jpg', height: 220},
    ];
    const travels = [
        {
            id: 1,
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: 1,
            open: 0,
            delete: 0,
            userName: '周佳佳',
            date: '20240331'
        },
        {
            id: 2,
            title: '2024.4.5日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: 1,
            open: 0,
            delete: 0,
            userName: '陈雪',
            date: '20240331'
        }
    ]
    const waterfallItem = ({ item }) => {
        return (  
            <View style={styles.item}>
                <Image source={{ uri: item.url }} style={[styles.image, {height: item.height}]} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safe_area_view}>
            <SearchHeader />
            {/* <ScrollView style={styles.scrollView}>
                <View style={styles.main}>
                <FlatList
                    data={image}
                    renderItem={waterfallItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                />
                </View>
            </ScrollView> */}
            {/* 使用flatlist实现瀑布流： */}
            <FlatList
                    data={travels}
                    initialNumToRender={4}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    style={styles.body}
                />
            <FootBar />
        </SafeAreaView>
        
    );
};

export default AppIndex;