import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BookIcon = props => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.8 8.04V23m0-14.96c0-2.464 0-3.696.4-4.638.351-.827.912-1.5 1.602-1.922.784-.48 1.81-.48 3.864-.48h3.178c.685 0 1.027 0 1.288.16.23.14.418.365.535.64.133.315.133.725.133 1.547v12.906c0 .822 0 1.232-.133 1.546a1.37 1.37 0 0 1-.535.641c-.261.16-.603.16-1.288.16h-3.46c-1.148 0-1.722 0-2.243.19-.46.168-.89.444-1.262.81-.42.416-.74.989-1.376 2.135L12.8 23m0-14.96c0-2.464 0-3.696-.4-4.638-.351-.827-.912-1.5-1.602-1.922C10.014 1 8.987 1 6.933 1H3.756c-.685 0-1.027 0-1.289.16a1.37 1.37 0 0 0-.534.64c-.133.315-.133.725-.133 1.547v12.906c0 .822 0 1.232.133 1.546.117.276.304.5.534.641.262.16.604.16 1.289.16h3.46c1.148 0 1.722 0 2.243.19.46.168.89.444 1.262.81.421.416.74.989 1.376 2.135L12.8 23"
      stroke="#FBFDF9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BookIcon;