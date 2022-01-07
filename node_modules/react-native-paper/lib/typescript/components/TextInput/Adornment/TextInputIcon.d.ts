import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import IconButton from '../../IconButton';
import type { $Omit } from '../../../../src/types';
import type { IconSource } from '../../Icon';
declare type Props = $Omit<React.ComponentProps<typeof IconButton>, 'icon' | 'theme' | 'color'> & {
    /**
     * Icon to show.
     */
    name: IconSource;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Whether the TextInput will focus after onPress.
     */
    forceTextInputFocus?: boolean;
    /**
     * Color of the icon or a function receiving a boolean indicating whether the TextInput is focused and returning the color.
     */
    color?: ((isTextInputFocused: boolean) => string | undefined) | string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ReactNativePaper.Theme;
};
export declare const ICON_SIZE = 24;
declare type StyleContextType = {
    style: StyleProp<ViewStyle>;
    isTextInputFocused: boolean;
    forceFocus: () => void;
};
declare const IconAdornment: React.FunctionComponent<{
    testID: string;
    icon: React.ReactNode;
    topPosition: number;
    side: 'left' | 'right';
} & Omit<StyleContextType, 'style'>>;
/**
 * A component to render a leading / trailing icon in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon name="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const TextInputIcon: {
    ({ name, onPress, forceTextInputFocus, color, ...rest }: Props): JSX.Element;
    displayName: string;
    defaultProps: {
        forceTextInputFocus: boolean;
    };
};
export default TextInputIcon;
export { IconAdornment };
