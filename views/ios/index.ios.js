// @flow
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  View
} from 'react-native';

import { rnImage } from './resources'


export class GidjitBasicExample extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <Image style={{width: 100, height: 100}} source={{uri: rnImage}} />

        <Text style={[styles.bigblack, styles.seperateInfo]}>
          Very basic Gidjit React Native Action
        </Text>
        <View style={{width: '90%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[styles.textInfo]}>
            This example just uses components 'Image', 'View', and 'Text', however most if not all React Native elements can
            be used. You can find the source along with all the instructions to create, add, and easily share your own React Native App
            by clicking the link below and following the README.
          </Text>
            <TouchableOpacity style={[{width: 130, height: 24, alignSelf:'center'}]} onPress={() => Linking.openURL('https://github.com/gidjituser/HelloReact')}>
              <Text style={styles.bigblue}>
                HelloReact
              </Text>
            </TouchableOpacity>
        </View>
        <View style={[{width: '90%'}]}>
          <Text style={[styles.textInfo]}>
            The functionality/features of React Native with Gidjit will improve during each release.
          </Text>
        </View>
        <View style={[{height: 50}]}></View>

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
