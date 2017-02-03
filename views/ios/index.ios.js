import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Linking,
  View
} from 'react-native';


class GidjitBasicExample extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image  style={{width: 60, height: 60}} source={require('../../icon.png')} />
        <Text style={{width: 250, height: 20}}>
          Very basic Gidjit React Native view
        </Text>
        <Text style={{width: 250, height: 50}}>
          This example just uses components 'View' and 'Text', however most if not all React Native elements can
          be used. You can find the source allowing with all the instructions to create and add your own
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://github.com/gidjituser/HelloReact')}
            style={{width: 50, height: 50}}>
            here.
          </Text>
        </Text>
        <Text style={{width: 250, height: 50}}>
          This example just uses components 'View' and 'Text', however most if not all React Native elements can
          be used. You can find an example where an existing project was forked and bundled so
          that it would work with Gidjit. It was not written by ourselves.
        </Text>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://github.com/gidjituser/FinanceReactNative')}
          style={{width: 50, height: 50}}>
          FinanceReactNative
        </Text>
        <Text style={{width: 250, height: 50}}>
          The functionality/features of React Native with Gidjit will improve
          dramatically over the next few months.
        </Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('GidjitBasicExample', () => GidjitBasicExample);
