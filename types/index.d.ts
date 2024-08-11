// types/index.d.ts

declare module 'futurebit-video-player' {
    import { FC } from 'react';
    import { ResizeMode } from 'expo-av';
  
    interface VideoPlayerProps {
      source: { uri: string };
      shouldPlay?: boolean;
      resizeMode?: ResizeMode;
    }
  
    const VideoPlayer: FC<VideoPlayerProps>;
  
    export default VideoPlayer;
  }