import { TouchableOpacity, View } from "react-native";
import type {
  SpacingProps,
  SpacingShorthandProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";
import {
  spacingShorthand,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  composeRestyleFunctions,
} from "@shopify/restyle";

import type { Theme } from "../theme";

import { Text } from "./Text";

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  border,
  backgroundColor,
]);

type Props = RestyleProps & {
  label: string;
  onPress: () => void;
};

export const Button = ({ onPress, label, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text variant="buttonLabel">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
