import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image } from 'react-native'

export default class CayNapAm extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Image source={require('./images/napam.png')}
                    style={styles.imgTx}
                />
                <Text style={styles.txtgautruc}> Chi Nắp ấm: hay còn gọi chi nắp bình, chi bình nước là chi thực vật duy nhất trong họ đơn chi Wikipedia
                </Text>

                <Text style={styles.txtgautruc}> Mức dinh dưỡng: Chi này chứa khoảng 90 tới 130 loài, với vô số loại cây lai ghép tự nhiên hay từ gieo trồng.
                </Text>
                
                <Text style={styles.txtgautruc}>Tên khoa học: Nepenthes

                </Text>
                <Text style={styles.txtgautruc}>Chiều cao: 60 – 90 cm (Trưởng thành, Chiều cao tính từ vai)

                </Text>
                <Text style={styles.txtgautruc}>Khối lượng: 200gram-300gram

                </Text>
                <Text style={styles.txtgautruc}>Các loại thấp hơn: Nepenthes holdenii
Nepenthes holdenii
Nepenthes alata
Nepenthes alata,
Cây bình rượu,
Cây bình rượu,
Nắp ấm hoa đôi,
Nắp ấm hoa đôi.

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

