import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Rule = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={168}
    fill="none"
    {...props}>
    <Path fill="#FBFFF7" d="M1 167V1h10v166z" />
    <Path
      stroke="#2E4A21"
      strokeWidth={2}
      d="M1 12h4M1 5h4M1 19h4M1 26h4M1 33h4M1 40h4M1 47h4M1 54h4M1 61h4M1 68h4M1 75h4M1 82h4M1 89h4M1 96h4M1 103h4M1 110h4M1 117h4M1 124h4M1 131h4M1 138h4M1 145h4M1 152h4M1 159h4"
    />

    <Path stroke="#2E4A21" d="M.5 167.5V.5h11v167z" />
  </Svg>
);

export default Rule;
