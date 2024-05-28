import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgTopRight = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.533 1.067h6.4v6.4h-1.067v-4.58l-11.89 11.89-.753-.754 11.89-11.89h-4.58V1.067Z"
    />
  </Svg>
);

export default SvgTopRight;
