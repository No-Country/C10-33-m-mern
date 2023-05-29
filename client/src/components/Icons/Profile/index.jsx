import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Profile = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}>
    <Path
      fill="#1C1B1F"
      fillRule="evenodd"
      d="M19 .667C8.88.667.667 8.88.667 19S8.88 37.333 19 37.333 37.333 29.12 37.333 19 29.12.667 19 .667Zm11.66 27.188c-2.622-3.19-8.983-4.272-11.66-4.272-2.677 0-9.038 1.082-11.66 4.272C5.47 25.398 4.333 22.337 4.333 19c0-8.085 6.582-14.667 14.667-14.667S33.667 10.915 33.667 19c0 3.337-1.137 6.398-3.007 8.855ZM12.583 14.416A6.4 6.4 0 0 1 19 8a6.4 6.4 0 0 1 6.417 6.416A6.4 6.4 0 0 1 19 20.834a6.4 6.4 0 0 1-6.417-6.416Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Profile;
