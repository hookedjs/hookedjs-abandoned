import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const StarIcon = (svgProps: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...svgProps}>
    <Path d="m0 0h24v24h-24z" opacity="0" transform="matrix(0 1 -1 0 24 0)" />
    <Path d="m17.56 21a1 1 0 0 1 -.46-.11l-5.1-2.67-5.1 2.67a1 1 0 0 1 -1.45-1.06l1-5.63-4.12-4a1 1 0 0 1 -.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1 -.25 1l-4.12 4 1 5.63a1 1 0 0 1 -.4 1 1 1 0 0 1 -.62.18z" />
  </Svg>
);
