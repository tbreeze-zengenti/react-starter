import React from 'react';
import { Helmet } from 'react-helmet';
import type { RouteComponentProps } from '@zengenti/contensis-react-base';

import MainLayout from '~/templates/main/main.template';

import WelcomePageStyled from './welcome.styled';

import Link from '~/components/link/link.component';
import type { MetaProps } from '~/components/meta/meta.component';

export type WelcomeTemplateProps = {
  meta: MetaProps;
  title: string;
};

const Welcome = ({
  mappedEntry,
}: RouteComponentProps<WelcomeTemplateProps>) => {
  const { meta } = mappedEntry || ({} as WelcomeTemplateProps);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <MainLayout meta={meta}>
        <WelcomePageStyled>
          <div className="wrapper">
            <div className="logo">
              <h1 className="sr-only">React Starter</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 58 65"
                className="logo__icon"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M57.9734 20.2287c-.1997-1.476-.7214-2.89-1.5283-4.1422-.8069-1.2521-1.8793-2.3116-3.1412-3.1036l-2.7397-1.5892-1.3899-.7995-11.1986-6.4563-4.2495-2.45858C32.2719.90499 30.6495.5 29.0017.5c-1.6477 0-3.2701.40499-4.7244 1.17932L7.4692 11.4037l-2.73967 1.5792c-1.26191.792-2.33422 1.8515-3.14112 3.1036C.781509 17.3387.259687 18.7527.0600233 20.2287c-.0415967.3315-.06157298.6653-.05992961.9994v22.5971C.0498876 45.4754.507898 47.0875 1.33319 48.5176c.8253 1.4301 1.99215 2.6336 3.39634 3.5029l7.37917 4.2675 4.8394 2.7984 7.3292 4.2276c1.4529.7786 3.0759 1.186 4.7244 1.186 1.6486 0 3.2716-.4074 4.7245-1.186L53.274 52.0205c1.4023-.8705 2.5672-2.0745 3.3907-3.5045.8235-1.43 1.28-3.0416 1.3287-4.6908V21.1881c.0133-.3199.0066-.6403-.02-.9594Zm-33.1162 34.74-1.9998-1.1393-9.189-5.3169-5.19931-2.9983c-.53117-.4326-.88661-1.0437-.99989-1.7191V29.1536c.00563-.0064.0125-.0115.02026-.015.00776-.0035.01627-.0053.02478-.0053s.0169.0018.02465.0053c.00776.0035.01464.0086.02027.015l4.54954 2.6384 4.8394 2.7885 7.3292 4.2475c.2976.1678.6047.318.9198.4498.0196.0089.0364.0228.0487.0404.0123.0175.0197.0381.0214.0595v15.3912c-.0076.0472-.0268.0918-.0558.1298-.029.038-.067.0683-.1106.0881-.0435.0198-.0912.0285-.139.0254-.0477-.0032-.094-.0181-.1346-.0435h.03Zm4.1696-22.4871c-.3424.0133-.6836-.048-.9999-.1799l-5.1494-2.9982-9.189-5.317-5.1994-2.9983c-.17322-.1173-.32259-.2666-.44001-.4397-.07305-.0983-.11241-.2174-.11241-.3398 0-.1224.03936-.2416.11241-.3398.12027-.168.26926-.3135.44001-.4298L27.9768 8.15561c.6446-.24237 1.3553-.24237 1.9998 0l2.0797 1.20927 15.4982 8.99482 1.9998 1.1394c.1708.1163.3197.2618.44.4297.0688.1.1056.2185.1056.3399 0 .1213-.0368.2398-.1056.3397-.1174.1732-.2668.3224-.44.4398L29.9766 32.3017c-.3168.1301-.6576.1914-.9999.1799h.0501Zm21.5374 11.3035c-.1133.6754-.4687 1.2865-.9999 1.7191l-16.3681 9.4645c-.0441.0267-.0946.0411-.1461.0418-.0515.0007-.1023-.0124-.1471-.0378-.0448-.0255-.0821-.0624-.1079-.107-.0258-.0446-.0391-.0953-.0388-.1468V39.3377c-.0002-.0231.0063-.0458.0187-.0653.0124-.0195.0302-.035.0513-.0446.3193-.1298.63-.28.9299-.4497l16.718-9.6745c.0057-.0064.0125-.0115.0203-.015.0078-.0035.0163-.0053.0248-.0053s.0169.0018.0246.0053c.0078.0035.0147.0086.0203.015v14.6815Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="bento-boxes">
              <article className="bento-box bento-box--wide">
                <div className="bento-box__icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 15.5C11.0717 15.5 10.1815 15.1313 9.52509 14.4749C8.86871 13.8185 8.49996 12.9283 8.49996 12C8.49996 11.0717 8.86871 10.1815 9.52509 9.52513C10.1815 8.86875 11.0717 8.5 12 8.5C12.9282 8.5 13.8185 8.86875 14.4748 9.52513C15.1312 10.1815 15.5 11.0717 15.5 12C15.5 12.9283 15.1312 13.8185 14.4748 14.4749C13.8185 15.1313 12.9282 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.4796 2.30222 14.4183 2.19543 14.3268 2.11855C14.2353 2.04168 14.1195 1.99968 14 2H9.99996C9.74996 2 9.53996 2.18 9.49996 2.42L9.12996 5.07C8.49996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.72996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.65 4.56996 12.97L2.45996 14.63C2.26996 14.78 2.20996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.94C7.95996 18.34 8.49996 18.68 9.12996 18.93L9.49996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" />
                  </svg>
                </div>

                <h2 className="bento-box__title">Get started</h2>
                <p className="bento-box__description">
                  Get started with our React JS project in just a few simple
                  steps. Clone the repository, install dependencies, and
                  you&#39;re ready to go.
                </p>
              </article>
              <article className="bento-box">
                <div className="bento-box__icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5ZM5 5H19V19H5V5ZM7 7V9H17V7H7ZM7 11V13H17V11H7ZM7 15V17H14V15H7Z" />
                  </svg>
                </div>

                <h2 className="bento-box__title">Documentation</h2>
                <p className="bento-box__description">
                  React Starter is a starter project built upon Zengenti&#39;s
                  Contensis React Base framework. It&#39;s intended purpose is
                  to help kickstart development with Contensis & React.
                </p>
                <Link
                  path="https://react-starter.com/"
                  className="bento-box__link"
                >
                  Read docs
                </Link>
              </article>
              <article className="bento-box">
                <div className="bento-box__icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3H7V5H5V10C5 10.5304 4.78929 11.0391 4.41421 11.4142C4.03914 11.7893 3.53043 12 3 12C3.53043 12 4.03914 12.2107 4.41421 12.5858C4.78929 12.9609 5 13.4696 5 14V19H7V21H5C3.93 20.73 3 20.1 3 19V15C3 14.4696 2.78929 13.9609 2.41421 13.5858C2.03914 13.2107 1.53043 13 1 13H0V11H1C1.53043 11 2.03914 10.7893 2.41421 10.4142C2.78929 10.0391 3 9.53043 3 9V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9C21 9.53043 21.2107 10.0391 21.5858 10.4142C21.9609 10.7893 22.4696 11 23 11H24V13H23C22.4696 13 21.9609 13.2107 21.5858 13.5858C21.2107 13.9609 21 14.4696 21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17V19H19V14C19 13.4696 19.2107 12.9609 19.5858 12.5858C19.9609 12.2107 20.4696 12 21 12C20.4696 12 19.9609 11.7893 19.5858 11.4142C19.2107 11.0391 19 10.5304 19 10V5H17V3H19ZM12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15ZM8 15C8.26522 15 8.51957 15.1054 8.70711 15.2929C8.89464 15.4804 9 15.7348 9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15ZM16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15Z" />
                  </svg>
                </div>

                <h2 className="bento-box__title">Developer resources</h2>
                <p className="bento-box__description">
                  Begin developing with the Contensis APIs. Build your first app
                  using your favourite framework, start importing content, or
                  check out the API documentation.
                </p>
                <Link
                  path="https://www.contensis.com/help-and-docs/developers"
                  className="bento-box__link"
                >
                  View resources
                </Link>
              </article>
            </div>
            <section className="env" aria-labelledby="env">
              <p className="env__title" id="env">
                Currently connected to:
              </p>
              <Link
                path={`https://cms-${ALIAS}.cloud.contensis.com/app/projects/${PROJECT}/dashboard`}
                className="env__access"
              >
                https://cms-{ALIAS}.cloud.contensis.com/
              </Link>
            </section>
          </div>
        </WelcomePageStyled>
      </MainLayout>
    </>
  );
};

export default Welcome;
