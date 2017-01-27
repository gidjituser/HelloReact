import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          Example Gidjit Launch view
        </Text>
        <Text>
          This just uses components 'View' and 'Text',
          The functionality/features of React native with Gidjit will improve 
          dramatically over the next few months.
        </Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('WhyReactNativeIsSoGreat', () => WhyReactNativeIsSoGreat);


