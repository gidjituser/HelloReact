import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Linking,
  View
} from 'react-native';

import { rnImage } from './resources'


class GidjitBasicExample extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {/*
        <Image  style={{width: 60, height: 60}} source={require('../../img/appIcon.png')} />
        */}
        <Image style={{height: 100}} source={{uri: rnImage}} />

        <Text style={[styles.bigblack, styles.seperateInfo]}>
          Very basic Gidjit React Native view
        </Text>
        <Text style={[styles.textInfo, {width: 250}]}>
          This example just uses components 'View' and 'Text', however most if not all React Native elements can
          be used. You can find the source along with all the instructions to create, add, and easily share your own React Native App   
          <Text style={styles.bigblue}
            onPress={() => Linking.openURL('https://github.com/gidjituser/HelloReact')} >
             here.
          </Text>
        </Text>
        {/*
        <Text style={{width: 250}}>
          You can find an example where an existing RN project was forked from github and bundled so
          that it would work with Gidjit (It was not written by ourselves).
        </Text>
        <Text style={[styles.bigblue, styles.seperateInfo]}
          onPress={() => Linking.openURL('https://github.com/gidjituser/FinanceReactNative')}>
          FinanceReactNative
        </Text>
        */}
        <Text style={[styles.textInfo, {width: 250}]}>
          The functionality/features of React Native with Gidjit will improve during each release.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  seperateInfo: {
    width:280,
    textAlign: 'center',
  },
  bigblack: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  textInfo: {
    fontSize: 20,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

AppRegistry.registerComponent('GidjitBasicExample', () => GidjitBasicExample);
