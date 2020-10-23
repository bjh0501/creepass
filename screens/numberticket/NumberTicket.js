/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';
import {
  GLOBAL_MAIN_COLOR,
  GLOBAL_MAIN_BACKGROUND_COLOR,
} from '../../common/common';

const NumberTicket = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 32, color: GLOBAL_MAIN_COLOR}}>서초칼국수</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 16,
          borderWidth: 1,
          borderColor: '#aaaaaa',
          width: '100%',
          flex: 3,
        }}>
        <Text style={{fontSize: 22, marginTop: 16, marginBottom: 16}}>
          대기번호
        </Text>
        <Text style={{fontSize: 32, color: GLOBAL_MAIN_COLOR}}>223</Text>
        <Text style={{fontSize: 16, marginTop: 16}}>동반자 3명</Text>
        <Divider />
        <Text style={{fontSize: 16, color: 'gray'}}>현재 210번입니다.</Text>
      </View>
      <View style={{flex: 1, marginTop: 16, width: '100%'}}>
        <Text>발행시간</Text>
        <Text>2020년 10월 5일 12시 4분 22초</Text>
      </View>
      <Button
        title="메뉴보기"
        containerStyle={{width: '100%'}}
        titleStyle={{textAlign: 'center'}}
        buttonStyle={{backgroundColor: GLOBAL_MAIN_COLOR}}
      />
      <Button
        title="예약 취소"
        type={'clear'}
        containerStyle={{width: '100%', marginTop: 16}}
        titleStyle={{color: 'gray'}}
      />
    </View>
  );
};
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default NumberTicket;
