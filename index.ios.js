/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Video from 'react-native-video';

export default class myApplication extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
          Welcome to React Native!
      </Text>

       <Video
            source={require('./broadchurch.mp4')}
            style={styles.nativeVideoControls}
            rate={1.0}
            paused={false}
            volume={1.0}
            muted={false}
            ignoreSilentSwitch={"ignore"}
            resizeMode={"cover"}
            repeat={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nativeVideoControls: {
    top: 100,
    height: 300,
    width : 300
  },
});

AppRegistry.registerComponent('myApplication', () => myApplication);
