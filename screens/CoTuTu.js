import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image,ScrollView } from 'react-native'


export default class CoTuTu extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Image source={require('./images/CoTuTu.png')}
                    style={styles.imgTx}
                />
                <ScrollView>

                    <View style={styles.thucvat}>


                        <Text style={styles.txtgautruc}> Cọ Tự Tử: Được biết đó chính là loài Tahina spectabilis J. Dransf. & Rakotoarinivo; dân dã hay gọi là cọ Tahina, cọ tử tự; một loài thực vật có hoa thuộc họ Cau Arecaceae; một loài cọ khổng lồ chỉ được tìm thấy ở quận Analalava phía tây bắc Madagascar.
                        </Text>

                        <Text style={styles.txtgautruc}>Cỏ tự tử: có thể cao tới 18 m và có lá dài hơn 5 m. Một cây mọc đơn độc được phát hiện khi đang ra hoa vào năm 2007;
                        </Text>

                        <Text style={styles.txtgautruc}>Tên khoa học: Nepenthes

                        </Text>
                        <Text style={styles.txtgautruc}>Cọ tự tử: được cho là sống đến năm mươi năm trước khi cho ra một cụm hoa khổng lồ và chết đi ngay sau đó, về mặt nào đó thì khá giống với chuối cô đơn Ensete glaucum (Roxb.) Cheesman.

                        </Text>
                        <Text style={styles.txtgautruc}>Mô tả cây cọ tự tử:
                            T.spectabilis là loài cọ lớn nhất trong số 170 loài cọ có nguồn gốc từ Madagascar và cũng hay xuất hiện nhiều giống như đa phần các cây cọ khác.

                        </Text>
                        <Text style={styles.txtgautruc}>Phân loại:
                            Ra hoa điên cuồng và chết ( sau khi đậu quả ), cộng thêm việc chưa có một loài cọ nào khác được biết tới là có khả năng này đã dẫn tới sự biện hộ cho việc tạo ra chi đơn loài ( chỉ có một đại diện ) Tahina, cùng với ba chi khác trong tông Chuniophoeniceae; các thành viên khác được tìm thấy ở bán đảo Ả Rập, Thái Lan và Trung Quốc . Hiện có ít hơn một trăm cá thể của loài này được cho là đang tồn tại.
                        </Text>
                    </View>
                </ScrollView>
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
        marginTop: 20,
    },
    imgTx: {
        width: 250,
        height: 220,
        borderRadius: 20,
        marginLeft: 50,
    },
    thucvat:{
        flex:1,
    },
})

