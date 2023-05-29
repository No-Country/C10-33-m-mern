import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SwapIconOutlined = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}>
    <Path
      stroke="#2E4A21"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M35 14.219v7.656m0-7.656a7.656 7.656 0 1 1 7.656 7.656H35m0-7.656a7.656 7.656 0 1 0-7.656 7.656H35"
    />
    <Path
      stroke="#2E4A21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M56.875 21.875h-43.75A4.375 4.375 0 0 0 8.75 26.25v6.563a4.375 4.375 0 0 0 4.375 4.374h43.75a4.375 4.375 0 0 0 4.375-4.374V26.25a4.375 4.375 0 0 0-4.375-4.375Z"
    />
    <Path
      stroke="#2E4A21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M56.875 37.188v19.687a6.563 6.563 0 0 1-6.563 6.563H19.689a6.563 6.563 0 0 1-6.563-6.563V37.187M35 21.876v41.563"
    />
  </Svg>
);

export default SwapIconOutlined;
