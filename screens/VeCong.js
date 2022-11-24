import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class VeCong extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>





                    <Image source={require('./images/vecong.png')}
                        style={styles.imgad04}
                    />
                    <View style={styles.giaveto}>
                        <View >
                            <Text style={styles.giave}>
                                60.000đ
                            </Text>

                        </View>
                        <Text style={styles.conhang}>
                            Còn Hàng
                        </Text>
                    </View>

                    <Text style={styles.giave1}>
                        Vé cổng cao (từ 1m3 trở lên)
                    </Text>

                    <View style={styles.giaveto1}>
                        <View >
                            <AntDesign name="star" size={24} color="black" />

                        </View>
                        <AntDesign name="star" size={24} color="black" />
                        <AntDesign name="star" size={24} color="black" />
                        <AntDesign name="star" size={24} color="black" />
                        <AntDesign name="star" size={24} color="black" />

                        <Text style={styles.giave2}>
                            1 đánh giá và một nhận xét
                        </Text>
                    </View>

                    <View style={styles.MayBe1}>

                        <TouchableOpacity
                        >
                            <View>
                                <Text style={styles.dautru}>-</Text>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity
                        >
                            <View>
                                <Text style={styles.dautru}>1</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <View>
                                <Text style={styles.dautru}>+</Text>
                            </View>

                        </TouchableOpacity>


                    </View>

                    <View style={styles.baGach}>
                    <Ionicons name="menu" size={24} color="black" />

                        <Text style={styles.txtRakib}>
                            Mô tả sản phẩm
                        </Text>



                        <Image source={require('./images/iconsothu.png')}
                            style={styles.imgXanh}
                        />
                    </View>

                    <Text style={styles.giave1}>
                        Vé cổng cao (áp dụng cho quý khách cao từ 1m3 trở lên)
                    </Text>
                    <Text style={styles.giave1}>
                        Được tham quan toàn bộ thảo cầm viên Sài Gòn.
                    </Text>
                    <Text style={styles.giave1}>
                        Vé cổng khi mua online được thanh toán trước( qua chuyển khoản hoặc thanh thanh online)
                    </Text>

                    <Text style={styles.giave4}>
                        Vé có giá trị sử dụng 30 ngày kể từ ngày xuất vé.
                    </Text>




                   

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
    giaveto: {
        flexDirection: 'row',
    },

    giaveto1: {
        flexDirection: 'row',
        marginLeft: 16,
    },
    baGach: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 1,
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    dautru: {
        fontSize: 30,
        fontWeight: '900',
        marginLeft: 15,

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
        height: 250,
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
        marginTop: 0,

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
    imgTxLV: {
        width: 180,
        height: 200,
    },
    giave: {
        fontSize: 29,
        fontWeight: '700',
        marginLeft: 19,
        marginTop: 20,
    },
    giave1: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 19,
        marginTop: 5,
    },
    giave2: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 19,
        marginTop: 5,
        color: '#87cefa',
    },
    giave4: {
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 19,
        marginTop: 5,
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

    btnAdd: {

        width: '70%',
        height: 45,
        backgroundColor: '#e6e6fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 3,
        marginRight: 60,
        marginLeft: 40,


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
    MayBe1: {
        paddingHorizontal: 2,

        flexDirection: 'row',
        marginBottom: 13,

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
        marginTop: 25,

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

    conhang: {
        marginTop: 28,
        marginLeft: 210,
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
