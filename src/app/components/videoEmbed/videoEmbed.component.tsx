import React from 'react';
import styled from 'styled-components';

export type VideoEmbedProps = {
  src: string;
  title: string;
};

const VideoEmbed = ({ src, title }: VideoEmbedProps) => {
  return (
    <VideoEmbedStyled className="video-embed">
      <IFrameStyled
        title={title}
        src={src}
        allowFullScreen
        height={360}
        width={640}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="video-embed__iframe"
      ></IFrameStyled>
    </VideoEmbedStyled>
  );
};

export default VideoEmbed;

const VideoEmbedStyled = styled.div``;

const IFrameStyled = styled.iframe``;
