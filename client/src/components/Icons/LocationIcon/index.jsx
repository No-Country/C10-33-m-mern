import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LocationIcon = props => (
  <Svg
    width={16}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.4.167A7.578 7.578 0 0 0 .817 7.75c0 5.688 7.583 14.083 7.583 14.083s7.583-8.395 7.583-14.083A7.578 7.578 0 0 0 8.4.167Zm0 10.291a2.708 2.708 0 1 1 0-5.416 2.708 2.708 0 0 1 0 5.416Z"
      fill={props.color ? props.color : '#FFF'}
    />
  </Svg>
);

export default LocationIcon;
