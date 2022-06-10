import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import Background from './Background';
export interface ContentViewProps {
  content?: string;
  type?: 'text' | 'html' | 'youtube' | 'image';
  title?: string;
}
const ContentView: React.FC<ContentViewProps> = ({ type, content, title }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  if (type === 'image') {
    return (
      <div className="content-view">
        <Background />
        <img src={content} />
      </div>
    );
  }
  if (type === 'youtube') {
    return (
      <div className="content-view">
        <Background />
        <div className="container">
          <h1>{title}</h1>
          <YouTube videoId={content} onReady={onPlayerReady} />
        </div>
      </div>
    );
  }
  return (
    <div className="content-view">
      <Background />
      <div className="container">
        <h1>{title}</h1>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default ContentView;
