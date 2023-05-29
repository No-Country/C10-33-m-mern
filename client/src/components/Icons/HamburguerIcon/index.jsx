import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HamburguerIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M3.8 8V6h18v2h-18Zm0 5h18v-2h-18v2Zm0 5h18v-2h-18v2Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default HamburguerIcon;
