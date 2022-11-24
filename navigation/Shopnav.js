import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Alagoas from '../screens/Alagoas';
import CapNhap from '../screens/CapNhap';

import CayNapAm from '../screens/CayNapAm';
import CoTuTu from '../screens/CoTuTu';
import DongVatBaoTon from '../screens/DongVatBaoTon';
import DongVatKhac from '../screens/DongVatKhac';
import GauTruc from '../screens/GauTruc';
import HoDongDuong from '../screens/HoDongDuong';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from '../screens/LoginScreen';

import ProductScreen from "../screens/ProductScreen";
import SiginScreen from "../screens/SiginScreen";
import SigupScreen from "../screens/SigupScreen";
import TaiKhoan from '../screens/TaiKhoan';
import ThucVat from '../screens/ThucVat';
import VeCong from '../screens/VeCong';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bảo tồn-Cứu hộ" component={DongVatBaoTon} />
      <Stack.Screen name="Thực Vật" component={ThucVat} />
      <Stack.Screen name="Động Vật Khác" component={DongVatKhac} />
      
      
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Gấu Trúc" component={GauTruc} />
      <Stack.Screen name="Hổ Đông Dương" component={HoDongDuong} />
      <Stack.Screen name="Alagoas Cuasows" component={Alagoas} />
      <Stack.Screen name="Cây Nắp Ấm" component={CayNapAm} />
      <Stack.Screen name="Cọ Tự Tử" component={CoTuTu} />
      <Stack.Screen name="Vé Cổng (Cao từ 1.3m trở lên)" component={VeCong} />
      <Stack.Screen name="Sig In" component={SiginScreen} />
      <Stack.Screen name="Sig Up" component={SigupScreen} />
      <Stack.Screen name="Tài Khoản" component={TaiKhoan} />
      <Stack.Screen name="Cập Nhập Tài Khoản" component={CapNhap} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator>

      </StackNavigator>
    </NavigationContainer>
  )

};

export default MainNavigator;
