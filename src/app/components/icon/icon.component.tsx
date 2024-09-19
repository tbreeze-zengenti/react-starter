import React from 'react';

import { icons } from './icon.dictionary';

export type IconProps = React.SVGAttributes<SVGElement> & {
  hidden?: boolean;
  icon: keyof typeof icons;
  size?: number;
};

const Icon = ({ hidden = true, icon, size }: IconProps) => {
  if (!icon) return null;
  const IconComponent = icons[icon];
  return (
    <IconComponent
      aria-hidden={hidden}
      className={`icon ${icon ? `icon--${icon}` : ''} `}
      focusable={!hidden}
      height={size ? size : 24}
      role={!hidden ? 'img' : undefined}
      width={size ? size : 24}
    />
  );
};

export default Icon;
