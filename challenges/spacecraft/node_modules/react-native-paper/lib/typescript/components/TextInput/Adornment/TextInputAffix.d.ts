import React from 'react';
import { StyleProp, TextStyle, LayoutChangeEvent, Animated } from 'react-native';
import { AdornmentSide } from './enums';
export declare type Props = {
    /**
     * Text to show.
     */
    text: string;
    onLayout?: (event: LayoutChangeEvent) => void;
    /**
     * Style that is passed to the Text element.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare type ContextState = {
    topPosition: number | null;
    onLayout?: (event: LayoutChangeEvent) => void;
    visible?: Animated.Value;
    textStyle?: StyleProp<TextStyle>;
    side: AdornmentSide;
    paddingHorizontal?: number | string;
    maxFontSizeMultiplier?: number | undefined | null;
};
declare const AffixAdornment: React.FunctionComponent<{
    affix: React.ReactNode;
    testID: string;
} & ContextState>;
/**
 * A component to render a leading / trailing text in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outline.affix.png" />
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
 *       mode="outlined"
 *       label="Outlined input"
 *       placeholder="Type something"
 *       right={<TextInput.Affix text="/100" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const TextInputAffix: {
    ({ text, textStyle: labelStyle, theme }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<Props, "text" | "onLayout" | "textStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ text, textStyle: labelStyle, theme }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { TextInputAffix, AffixAdornment };
