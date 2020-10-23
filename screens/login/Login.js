/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
  AsyncStorage,
} from 'react-native';
import {Button, CheckBox, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {commonAlert, LoadingOverlay} from '../../common/common';
import * as RootNavigation from '../../navigation/RootNavigation';

const Login = () => {
  const [phoneNumberText, setPhoneNumberText] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginInit, setLoginInit] = useState(false);

  useEffect(() => {
    const init = async () => {
      const memberNo = await AsyncStorage.getItem('MemberNo');

      if (memberNo === null) {
        setLoginInit(true);
      } else {
        RootNavigation.navigate('MainTabs', null);
      }
    };

    init();
  }, []);

  const authPhoneNumber = async () => {
    setLoading(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        '+82' + phoneNumberText,
      );
      console.log(confirmation);
      setConfirm(confirmation);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  const confirmCode = async () => {
    try {
      setLoading(true);
      const checkCode = await confirm.confirm(code);

      if (checkCode !== null) {
        // 다음페이지로
        await AsyncStorage.setItem('MemberNo', '100000001');
        RootNavigation.navigate('MainTabs', null);
        console.log('넘어감');
      }
    } catch (error) {
      commonAlert('코드가 맞지 않습니다.');
      console.warn('Invalid code', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'always'}>
      <LoadingOverlay visible={loading} />
      <View style={{flex: 1}}>
        <Text style={{fontSize: 16}}>휴대폰번호</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Input
            placeholder="01012345678"
            containerStyle={{flex: 2}}
            onChangeText={(input) => setPhoneNumberText(input)}
            disabled={confirm ? true : false}
          />
          <Button
            title="인증하기"
            containerStyle={{flex: 1}}
            buttonStyle={{backgroundColor: 'red'}}
            onPress={authPhoneNumber}
            disabled={confirm ? true : false}
          />
        </View>
      </View>
      {confirm ? (
        <View style={{flex: 1}}>
          <Input
            placeholder="인증번호를 입력해주세요."
            containerStyle={{flex: 2}}
            onChangeText={(input) => setCode(input)}
          />
          <CheckBox
            title="(선택) 서비스 제공 및 마케팅 활용에 동의합니다"
            checked={true}
          />
          <Button
            title="인증완료"
            containerStyle={{flex: 1}}
            buttonStyle={{backgroundColor: 'red'}}
            onPress={confirmCode}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 8,
    height: 400,
  },
});

export default Login;
