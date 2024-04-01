// import React,{ Component, useState } from 'react';
// import {
//     View,
//     Text,
//     Button,
//     SafeAreaView,
//     ScrollView,
//     TextInput,
//     Switch,
//     Pressable,
//     Alert
// } from 'react-native';
// import styles from '../css/login';

// export default class Login extends Component{
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             switchValue: false,
//             userName: '用户名',
//             passWord: '密码'
//           };
//     };
//     toggleSwitch = (value) => {
//         this.setState({ switchValue: value });
//       };
//     setUserName = (value) => {
//         // this.setState({ userName: value });
//         Alert.alert(value);
//     };
//     setPassWord = (value) => {
//         this.setState({ passWord: value });
//     };
//     render(){
//         return (
//             <SafeAreaView style={styles.safe_area_view}>
//                 <ScrollView style={styles.scrollView}>
//                     <View style={styles.main}>
//                         <Text style={styles.title}>鸭先知 & 明知山</Text>
//                         <TextInput style={styles.user_name} value={this.state.userName} onChange={this.setUserName} />
//                         <TextInput style={styles.user_name} value={this.state.passWord} onChange={this.setPassWord} />
//                         <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
//                         <Pressable onPress={() => Alert.alert(this.state.userName, ':', this.state.passWord)} style={styles.login_button}>
//                             <Text style={styles.login_text}>登录</Text>
//                         </Pressable>
//                     </View>
//                 </ScrollView>
//             </SafeAreaView>
            
//         )
//     }
// };


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
    Alert
} from 'react-native';
import styles from '../css/login';

const users = [
    {
        id: '00000',
        username: 'zjj',
        password: '123456zjj',
        profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
    },
    {
        id: '00001',
        username: 'cx',
        password: '123456cx',
        profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
    },
    {
        id: '00002',
        username: 'wxt',
        password: '123456wxt',
        profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
    },
    {
        id: '00003',
        username: 'yhm',
        password: '123456yhm',
        profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
    },
    {
        id: '00004',
        username: 'ljy',
        password: '123456ljy',
        profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
    },
    {
        id: '00005',
        username: 'zqx',
        password: '123456zqx',
        profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
    },
];

function Login(props){
    const [userName, setUserName] = useState('用户名');
    const [passWord, setPassWord] = useState('密码');
    const [userAgree, setUserAgree] = useState(false);
    const [agreeTrue, setAgreeTrue] = useState('');
    const {navigation}=props;
    // 判断用户名与密码
    const checkLogin = () => {
        var checkUser = false;
        if(userName=='' || passWord==''){
            Alert.alert('请填写完整的用户名或密码！')
        }else if(userAgree===false){
            Alert.alert('请勾选用户协议！') // 判断有问题
        }else{
            for(var i = 0; i < users.length; i++) {
                if(users[i].username===userName && users[i].password===passWord){
                    Alert.alert('用户名和密码正确！');
                    checkUser = true;
                    navigation.navigate('首页');
                    break;
                };
              };
            if(checkUser === false){
                Alert.alert('用户名或密码错误！');
            };
        };
    };
    // 勾选用户协议
    const press = () => {
        setUserAgree(!userAgree);
        if(userAgree){
            setAgreeTrue('√');
        }else{
            setAgreeTrue('');
        }
    };

    return (
        <SafeAreaView style={styles.safe_area_view}>
            <View style={styles.main}>
                    <Text style={styles.title}>鸭先知 & 明知山</Text>
                    <TextInput style={styles.user} value={userName} onChangeText={text=>setUserName(text)} />
                    <TextInput style={styles.user} value={passWord} onChangeText={text=>setPassWord(text)} />
                    <Pressable style={styles.switch_container} onPress={press}>
                        <Text style={styles.switch} >{agreeTrue}</Text>
                        <Text style={styles.switch_text}>同意用户协议</Text>
                    </Pressable>
                    {/* <Pressable onPress={() => {navigation.navigate('首页')}} style={styles.login_button}>
                        <Text style={styles.login_text}>登录</Text>
                    </Pressable> */}
                    <Pressable onPress={checkLogin} style={styles.login_button}>
                        <Text style={styles.login_text}>登录</Text>
                    </Pressable>
                </View>
        </SafeAreaView>
        
    );
};

export default Login;