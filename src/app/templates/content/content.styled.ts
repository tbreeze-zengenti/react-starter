import styled from 'styled-components';

const ContentPageStyled = styled.div`
  /* @link https://utopia.fyi/type/calculator?c=320,16,1.25,1400,16,1.333,3,0,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

  --step-0: clamp(1rem, 1rem + 0vi, 1rem);
  --step-1: clamp(1.25rem, 1.2254rem + 0.123vi, 1.333rem);
  --step-2: clamp(1.5625rem, 1.499rem + 0.3176vi, 1.7769rem);
  --step-3: clamp(1.9531rem, 1.83rem + 0.6155vi, 2.3686rem);

  /* @link https://utopia.fyi/clamp/calculator?a=320,1400,16—48|20—28|24—40|24—32|40—64 */

  --fluid-16-48: clamp(1rem, 0.4074rem + 2.963vi, 3rem);
  --fluid-20-28: clamp(1.25rem, 1.1019rem + 0.7407vi, 1.75rem);
  --fluid-24-40: clamp(1.5rem, 1.2037rem + 1.4815vi, 2.5rem);
  --fluid-24-32: clamp(1.5rem, 1.3519rem + 0.7407vi, 2rem);
  --fluid-40-64: clamp(2.5rem, 2.0556rem + 2.2222vi, 4rem);

  --grid-max-width: 90rem;
  --grid-gutter: var(--fluid-20-28);

  --bg-color: #001723;
  --logo-fill: 153, 248, 232;
  --bento-bg-color: #001d2c;
  --bento-border-color: #1a3441;
  --bento-icon-bg: rgba(var(--logo-fill), 0.25);
  --text-color: #fff;
  --link-color: #99f8e8;

  @media (prefers-color-scheme: light) {
    --bg-color: #fdf0ed;
    --logo-fill: 232, 100, 75;
    --bento-bg-color: #ffffff;
    --bento-border-color: #fae0db;
    --bento-icon-bg: rgba(var(--logo-fill), 0.05);
    --text-color: #000;
    --link-color: #e8644b;
  }

  padding: var(--fluid-40-64, 4rem) 0;
  min-height: inherit;
  background-color: var(--bg-color);

  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0;

  .wrapper {
    max-width: var(--grid-max-width);
    padding-inline: var(--grid-gutter);
    margin-inline-start: auto;
    margin-inline-end: auto;
  }

  .logo {
    display: flex;
    justify-content: center;

    .logo__icon {
      height: 100%;
      width: 64px;
      fill: rgb(var(--logo-fill));
    }
  }

  .bento-boxes {
    margin-block-start: var(--fluid-40-64, 2.5rem);
    display: grid;
    gap: var(--fluid-20-28, 1.5rem);
    grid-template-columns: 1fr;

    @media ${p => p.theme.mq.min.laptop} {
      grid-template-columns: repeat(2, 1fr);

      & .bento-box:first-child {
        grid-area: 1 / 1 / 1 / 3;
      }
    }
  }

  .bento-box {
    padding: var(--fluid-24-40, ${p => p.theme.spacing.s})
      var(--fluid-24-32, ${p => p.theme.spacing.xs});
    border: 1px solid var(--bento-border-color);
    border-radius: 4px;

    color: var(--text-color);
    background: var(--bento-bg-color);

    .bento-box__icon {
      padding: 12px;
      border-radius: 40px;
      max-width: max-content;
      background-color: var(--bento-icon-bg);

      & > svg {
        width: 40px;
        height: auto;
        fill: rgb(var(--logo-fill));
      }
    }

    .bento-box__title {
      margin-block-start: 0.875em;

      font-size: var(--step-2);
      font-weight: 500;
      color: inherit;
    }

    .bento-box__description {
      margin-block-start: 0.625em;
      max-width: 65ch;

      font-size: var(--step-0);
      font-weight: normal;
      color: inherit;
    }

    a.bento-box__link {
      display: inline-block;
      margin-block-start: 1em;
      color: var(--link-color);
    }
  }

  .env {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 0.5em;

    margin-block-start: var(--fluid-40-64, 2.5rem);
    color: var(--text-color);
    text-align: center;

    @media ${p => p.theme.mq.min.tablet} {
      flex-flow: row;
    }

    .env__title {
      color: inherit;
    }

    .env__access {
      color: var(--link-color);
    }
  }
`;

export default ContentPageStyled;
