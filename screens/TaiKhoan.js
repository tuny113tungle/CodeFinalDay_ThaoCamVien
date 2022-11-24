import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class TaiKhoan extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>

                    <View style={styles.baGach}>
                        <EvilIcons name="cart" size={24} color="black" />

                        <Text style={styles.txtRakib}>
                            Hãy đăng ký để nhận được các ưu đãi lớn!
                        </Text>



                        <Image source={require('./images/iconsothu.png')}
                            style={styles.imgXanh}
                        />
                    </View>

                    <View style={styles.chitiet1}>
                        <Image source={require('./images/Tung.png')}
                            style={styles.imgTx}
                        />

                        <Text style={styles.txtUser}>
                            Tung Le
                        </Text>

                        <Text style={styles.txtEmail}>
                            tuny113tungle@gmail.com
                        </Text>
                        <Text style={styles.txtEmail}>
                            0348355498
                        </Text>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Cập Nhập Tài Khoản') }}

                        >
                            <View style={styles.btnAdd}
                                onPress={() => { navigation.navigate('Product') }}>
                                <Text style={styles.txtct2}>Cập nhâp tài khoản của bạn</Text>
                            </View>




                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Login') }}

                    >
                        <View style={styles.btnAdd4}
                            onPress={() => { navigation.navigate('Product') }}>
                            <Text style={styles.txtct4}>Đăng Xuất</Text>
                        </View>




                    </TouchableOpacity>



















                    <View style={styles.MayBe2}>



                        <View style={styles.chitiet2}>
                            <TouchableOpacity>
                                <Foundation name="home" size={24} color="black"
                                    onPress={() => { navigation.navigate('Home') }} />
                            </TouchableOpacity>

                            <Text style={styles.txtct1}>Trang chủ</Text>

                        </View>




                        <View style={styles.chitiet2}>
                            <AntDesign name="search1" size={24} color="black" />


                            <Text style={styles.txtct1}>Tìm Kiếm</Text>

                        </View>


                        <View style={styles.chitiet2}>

                            <MaterialIcons name="category" size={24} color="black"

                            />


                            <Text style={styles.txtct1}>Danh mục</Text>

                        </View>


                        <View style={styles.chitiet2}>

                            <TouchableOpacity>


                                <AntDesign name="user" size={24} color="black"
                                    onPress={() => { navigation.navigate('Tài Khoản') }}
                                />

                            </TouchableOpacity>
                            <Text style={styles.txtct1}>Tài khoản</Text>

                        </View>


                    </View>





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
        marginBottom: 29,
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    txtRakib: {
        fontWeight: '600',
        fontSize: 15,
    },
    txtct2: {
        fontWeight: '500',
        fontSize: 15,
        color: '#ff7f50',

    },
    txtct4: {
        fontWeight: '600',
        fontSize: 19,
        color: 'black',


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
    txtUser: {
        fontSize: 22,
        fontWeight: '600',
    },
    txtEmail: {
        fontSize: 18,
        fontWeight: '400',

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
        height: 200,
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
        marginTop: 19,

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
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 18,
    },
    imgMon2: {
        width: 150,
        height: 120,
        borderRadius: 20,
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
        borderColor: '#000000',
        borderRadius: 29,
        backgroundColor: '#e0ffff',
        justifyContent: 'center',
        alignItems: 'center'

    },
    chitiet2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnAdd: {

        width: '70%',
        height: 45,
        backgroundColor: '#e6e6fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 1,
        marginRight: 60,
        marginLeft: 40,
        marginBottom: 15


    },
    btnAdd4: {

        width: '70%',
        height: 45,
        backgroundColor: '#e6e6fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 300,
        marginRight: 60,
        marginLeft: 50,
        marginBottom: 15


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
        marginTop: 20,

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
