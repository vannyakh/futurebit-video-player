// src/VideoPlayer.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ source, shouldPlay = false, resizeMode = Video.RESIZE_MODE_CONTAIN }) => {
  return (
    <View style={styles.container}>
      <Video
        source={source}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={resizeMode}
        shouldPlay={shouldPlay}
        useNativeControls
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default VideoPlayer;
