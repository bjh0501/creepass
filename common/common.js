import React from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import {Overlay, Text} from 'react-native-elements';

const GLOBAL_MAIN_COLOR = '#b71c1c';
const GLOBAL_MAIN_BACKGROUND_COLOR = '#3FA3EB';
const GLOBAL_HOST_URI = 'http://125.131.188.99:34000/';

const commonAlert = (contents) => {
  Alert.alert(
    '크리패스',
    contents,
    [{text: '확인', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};

const LoadingOverlay = (props) => {
  const {visible} = props;

  return (
    // <Text>sdffs</Text>
    <Overlay
      isVisible={visible}
      width="auto"
      height="auto"
      fullScreen={true}
      overlayBackgroundColor="transparent">
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text h4>Loading</Text>
        <ActivityIndicator size="large" color={GLOBAL_MAIN_COLOR} />
      </View>
    </Overlay>
  );
};

export {
  commonAlert,
  LoadingOverlay,
  GLOBAL_MAIN_COLOR,
  GLOBAL_MAIN_BACKGROUND_COLOR,
  GLOBAL_HOST_URI,
};
