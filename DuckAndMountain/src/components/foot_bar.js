import React,{ Component, useState, useEffect } from 'react';
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
import styles from '../css/foot_bar';

import {connect} from 'react-redux';
import userLogin from '../store/actions/action';

function FootBar(props){
    const clickMine = () => {
        if(props.login === 'offlogin'){
            props.navi('登录');
        }else{
            Alert.alert(`用户${props.name}`);
        }
    };
    return (
        <View style={styles.foot_container}>
            <Pressable onPress={()=>{Alert.alert('跳转到首页')}}>
                <Text style={styles.foot_index}>首页</Text>
            </Pressable>
            <Pressable onPress={()=>{Alert.alert('跳转到编辑页面')}}>
                <Text style={styles.foot_add}>+</Text>
            </Pressable>
            <Pressable onPress={clickMine}>
                <Text style={styles.foot_mine}>我的</Text>
            </Pressable>
        </View>
        
    );
};

// 将状态存入props中
const mapStateToProps = (state) => {
    return{
      login: state.login,
      name: state.name,
    }
  };
  // 将dispatch存入props中
  const mapDispatchToProps = (dispatch) => {
    return{
        UserLogin: (manager) => dispatch(userLogin(
          {login: manager.login, name: manager.name}
        ))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(FootBar);