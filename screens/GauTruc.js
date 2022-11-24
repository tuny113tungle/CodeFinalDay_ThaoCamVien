import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image } from 'react-native'

export default class GauTruc extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Image source={require('./images/gautruc.png')}
                    style={styles.imgTx}
                />
                <Text style={styles.txtgautruc}> Gấu trúc lớn: cũng được gọi một cách đơn giản là gấu trúc, là một loài gấu nguồn gốc tại Trung Quốc. Nó dễ dàng được nhận ra bởi các mảnh màu đen, lớn xung quanh mắt, trên tai, và tứ chi nó. Tuy thuộc về bộ Carnivora, chế độ ăn của gấu trúc gồm hơn 99% tre, trúc. Wikipedia
                </Text>

                <Text style={styles.txtgautruc}> Mức dinh dưỡng: Ăn cỏ Bách khoa toàn thư về Sự sống
                </Text>
                <Text style={styles.txtgautruc}>Thời gian mang thai: 95 – 160 ngày
                </Text>
                <Text style={styles.txtgautruc}>Tên khoa học: Ailuropoda melanoleuca

                </Text>
                <Text style={styles.txtgautruc}>Chiều cao: 60 – 90 cm (Trưởng thành, Chiều cao tính từ vai)

                </Text>
                <Text style={styles.txtgautruc}>Khối lượng: 70 – 120 kg (Cái, Trưởng thành)

                </Text>
                <Text style={styles.txtgautruc}>Các loại thấp hơn: Gấu trúc Tần Lĩnh, Ailuropoda melanoleuca melanoleuca

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
        height: 220,
        borderRadius: 20,
        marginLeft: 50,
    },
})

