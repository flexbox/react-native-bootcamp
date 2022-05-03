import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Title from '../Typography/Title';
declare type Props = React.ComponentPropsWithRef<typeof Title> & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * A component to show a title in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-title.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Title>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Paragraph>This is simple dialog</Paragraph>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const DialogTitle: {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").TextProps & {
    children: React.ReactNode;
} & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TextProps & {
    children: React.ReactNode;
} & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { DialogTitle };
