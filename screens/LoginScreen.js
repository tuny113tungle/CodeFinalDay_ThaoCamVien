import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>

                    <View style={styles.baGach}>
                        <AntDesign name="question" size={24} color="black" />




                        <Image source={require('./images/iconsothu.png')}
                            style={styles.imgXanh}
                        />
                    </View>

                    <Text style={styles.welcom}>
                        Welcom
                    </Text>
                    <Text style={styles.welcom1}>
                        Thảo cầm viên
                    </Text>


                    <View style={styles.addTask}>


                        <TouchableOpacity
                        >
                            <MaterialIcons name="email" size={24} color="black"
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Vui lòng nhập email ...'
                            style={styles.input}

                        />
                    </View>

                    <View style={styles.addTask1}>


                        <TouchableOpacity
                        >
                            <MaterialCommunityIcons name="onepassword" size={24} color="black" />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Vui lòng nhập mật khẩu ...'
                            style={styles.input}
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Home') }}

                    >
                        <View style={styles.btnAdd}
                        >
                            <Text style={styles.txtct1}>Login</Text>
                        </View>




                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Thực Vật') }}

                    >
                        <View style={styles.btnAdd4}
                        >
                            <Text style={styles.txtct1}>Get Started</Text>
                        </View>




                    </TouchableOpacity>



                    <Text style={styles.forgot}>
                        Forget your password ?
                    </Text>






                </View>





            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeSc: {
        flex: 1,
        backgroundColor: '#ffff',
    },

    topsc1: {
        flex: 1,
    },

    baGach: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 1,
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    txtRakib: {
        fontWeight: '600',
        fontSize: 19,
    },
    txtct1: {
        fontWeight: '500',
        fontSize: 15,
    },


    btnQR: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 2,
        marginRight: 120,

    },

    txtThemBan: {

        fontSize: 35,
        fontWeight: '600',
        marginLeft: 70,
        marginTop: 2,
    },

    iconSearch: {
        marginTop: 10,
    },

    imgXanh: {
        height: 50,
        width: 50,
        marginLeft: 50,
    },
    imgad04: {
        height: 120,
        width: 380,
        marginLeft: 4,

    },

    imgad02: {
        width: 50,
        height: 50,
        borderRadius: 20,

    },
    imgad: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },

    btnSDT: {

    },

    addTask: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70,

    },

    addTask1: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    input: {
        height: 44,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 1,

    },
    scview: {

    },
    imgTx: {
        width: 150,
        height: 120,
        borderRadius: 20,
    },
    imgMon2: {
        width: 150,
        height: 120,
        borderRadius: 20,
    },
    welcom: {
        fontSize: 30,
        color: '#87ceeb',
        fontWeight: '350',
        marginLeft: 30,
        marginTop: 120,

    },
    welcom1: {
        fontSize: 30,
        color: '#87ceeb',
        fontWeight: '350',
        marginLeft: 30,


    },
    imgTxLV: {
        width: 180,
        height: 200,
    },
    tim: {
        width: 50,
        height: 45,
        backgroundColor: '#7fffd4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 15,

    },

    chitiet1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chitiet2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgot: {
        marginLeft: 130,
        marginTop: 35,
        fontWeight: '340',
        color: '#87ceeb',
    },

    btnAdd: {

        width: '60%',
        height: 40,
        backgroundColor: '#87ceeb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        marginTop: 19,
        marginRight: 60,
        marginLeft: 70,


    },

    btnAdd4: {

        width: '60%',
        height: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        marginTop: 3,
        marginRight: 60,
        marginLeft: 70,


    },




    MayBe: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

    },

    MayBe2: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,

    },

    iconMaybe: {

        height: 44,
        width: '190%',
        backgroundColor: '#ffe4e1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 15,

    },

    btnMayBe: {

        width: '100%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 1,
        marginRight: 60,

    },

    DaGui: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },



    btndaGui: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 200,

    },
    GioiThieu: {

        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    MayBe02: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,

    },



    btngioiThieu: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 180,

    },



    // bottomBuy: {
    //     flex: 1,
    // },

    // btnBuy: {
    //     marginTop: 100,
    //     marginHorizontal: 30,
    //     borderRadius: 20,
    // },
});
