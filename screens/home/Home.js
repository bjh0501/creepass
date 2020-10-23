/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useFocusEffect} from '@react-navigation/native';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
  AppState,
  ToastAndroid,
} from 'react-native';
import {Image} from 'react-native-elements';
import ImageModal from 'react-native-image-modal';

const Home = () => {
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState(null);

  const handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000, // 2초
      );
    } else {
      clearTimeout(this.timeout);

      BackHandler.exitApp(); // 앱 종료
    }
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      // 뒤로가기 누르면
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackButton,
      );
      return () => {
        backHandler.remove();
      };
    }, []),
  );

  const createMyQrCode = async () => {
    const now = new Date().getTime();

    console.log();
    let param = '';
    param += 'name=com.creeder.creepass;';
    param += 'id=100000001;';
    param += `time=${now};`;

    const qrCodeGeneratorUrl =
      'https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=' + param;

    // const getQrCode = await Axios.get(qrCodeGeneratorUrl);
    console.log('hash', param);
    setQrCodeImageUrl(qrCodeGeneratorUrl);
  };

  useEffect(() => {
    createMyQrCode();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: qrCodeImageUrl,
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="center"
          containerStyle={{alignItems: 'center', justifyContent: 'center'}}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>

      {/* <ImageModal
        resizeMode="contain"
        imageBackgroundColor="#000000"
        style={{
          width: 250,
          height: 250,
        }}
        source={{
          uri: qrCodeImageUrl,
        }}
      /> */}
    </View>
  );
};
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Home;
