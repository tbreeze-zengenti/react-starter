import React from 'react';
import styled from 'styled-components';

type VideoEmbedProps = {
  src: string;
  title: string;
  caption?: string;
  height?: number;
  width?: number;
};

const VideoEmbed = ({
  src,
  title,
  caption,
  height,
  width,
}: VideoEmbedProps) => {
  return (
    <VideoEmbedStyled className="video-embed">
      <IFrameStyled
        title={title}
        src={src}
        allowFullScreen
        height={height ? height : 360}
        width={width ? width : 640}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="video-embed__iframe"
      ></IFrameStyled>
      {caption && (
        <CaptionStyled className="video-embed__caption">
          {caption}
        </CaptionStyled>
      )}
    </VideoEmbedStyled>
  );
};

export default VideoEmbed;

const VideoEmbedStyled = styled.div``;

const IFrameStyled = styled.iframe``;

const CaptionStyled = styled.figcaption``;
