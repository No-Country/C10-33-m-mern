import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Edit = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#2E4A21"
      d="m14.083 5.438-3.541-3.5L11.708.77a1.6 1.6 0 0 1 1.178-.48c.465 0 .858.16 1.177.48l1.166 1.167c.32.319.486.705.5 1.156.014.452-.139.837-.458 1.156l-1.188 1.188Zm-1.208 1.229L4.042 15.5H.5v-3.542l8.833-8.833 3.542 3.542Z"
    />
  </Svg>
);

export default Edit;
