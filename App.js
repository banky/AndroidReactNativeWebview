/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
      <WebView
        style={{height: 3000}}
        source={{uri: 'https://google.com'}}
        androidLayerType="software"
      />
    </ScrollView>
  );
};

export default App;
