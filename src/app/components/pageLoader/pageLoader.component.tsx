import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

/**
 * Renders a loading spinner during route transitions.
 */
const PageLoader = () => {
  const fill = '#000';
  return (
    <>
      <Helmet>
        <title>Loading</title>
      </Helmet>
      <PageLoaderStyled>
        <svg
          width="38"
          height="38"
          style={{ width: '40px', height: '40px' }}
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loading</title>
          <defs>
            <linearGradient
              x1="8.042%"
              y1="0%"
              x2="65.682%"
              y2="23.865%"
              id="a"
            >
              <stop stopColor={fill} stopOpacity="0" offset="0%" />
              <stop stopColor={fill} stopOpacity=".631" offset="63.146%" />
              <stop stopColor={fill} offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
              <path
                d="M36 18c0-9.94-8.06-18-18-18"
                id="Oval-2"
                stroke="url(#a)"
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </path>
              <circle fill={fill} cx="36" cy="18" r="1">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
      </PageLoaderStyled>
    </>
  );
};

const PageLoaderStyled = styled.main`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  inset: 0;
  z-index: 9999;
  height: 100%;
  max-height: 100vh;
  background-color: white;
`;

export default PageLoader;
