import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image } from 'react-native'

export default class HoDongDuong extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Image source={require('./images/hodongduong.png')}
                    style={styles.imgTx}
                />
                <Text style={styles.txtgautruc}> Hổ Đông Dương: hay hổ Corbett là một phân loài hổ sống chủ yếu ở bán đảo Đông Dương, được tìm thấy tại Campuchia, Lào, Myanma, Thái Lan và Việt Nam.
                </Text>

                <Text style={styles.txtgautruc}> Trạng thái bảo tồn: Nguy cấp (Giảm sút) Bách khoa toàn thư về Sự sống
                </Text>
                <Text style={styles.txtgautruc}>Tên khoa học: Panthera tigris corbetti
                </Text>
                <Text style={styles.txtgautruc}>Cấp độ: Phân loài

                </Text>
                <Text style={styles.txtgautruc}>Bộ (ordo): Carnivora

                </Text>
                <Text style={styles.txtgautruc}>Chi (genus): Panthera

                </Text>
                <Text style={styles.txtgautruc}>Giới (regnum): Animalia

                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    txtgautruc: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000',
        marginHorizontal: 8,
        marginTop:20,
    },
    imgTx: {
        width: 250,
        height: 120,
        borderRadius: 20,
        marginLeft: 50,
    },
})

