import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = props => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.7 19.75a2.087 2.087 0 0 1-1.53-.637 2.082 2.082 0 0 1-.637-1.53v-9.75c0-.343.077-.668.231-.975.154-.307.366-.56.636-.758l6.5-4.875c.199-.144.406-.253.623-.325.217-.072.442-.108.677-.108.235 0 .46.036.677.108.217.072.424.18.623.325L17 6.1c.27.199.483.451.637.758.154.307.23.632.23.975v9.75c0 .596-.213 1.106-.637 1.531a2.083 2.083 0 0 1-1.53.636h-4.333v-7.583H7.033v7.583H2.7Z"
      fill={props.color ? props.color : '#FFF'}
    />
  </Svg>
);

export default HomeIcon;
