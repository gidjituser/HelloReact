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
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <Image  style={{width: 60, height: 60}} source={{ uri: 'http://is2.mzstatic.com/image/thumb/Purple91/v4/83/24/37/8324375c-eaa1-3306-ca66-d3a849133888/source/175x175bb.jpg' }} />
        <Text style={styles.bigblack}>
          Very basic Gidjit React Native view
        </Text>
        <Text style={{width: 250}}>
          This example just uses components 'View' and 'Text', however most if not all React Native elements can
          be used. You can find the source along with all the instructions to create and add your own React Native action
          <Text style={styles.bigblue}
            onPress={() => Linking.openURL('https://github.com/gidjituser/HelloReact')}
            style={{width: 150, height: 50}}>
            here.
          </Text>
        </Text>
        <Text style={{width: 250}}>
          This example just uses components 'View' and 'Text', however most if not all React Native elements can
          be used. You can find an example where an existing project was forked and bundled so
          that it would work with Gidjit. It was not written by ourselves.
        </Text>
        <Text style={styles.bigblue}
          onPress={() => Linking.openURL('https://github.com/gidjituser/FinanceReactNative')}
          style={{width: 150}}>
          FinanceReactNative
        </Text>
        <Text style={{width: 250}}>
          The functionality/features of React Native with Gidjit will improve
          dramatically over the next few months.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblack: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 26,
  },
});

AppRegistry.registerComponent('GidjitBasicExample', () => GidjitBasicExample);
