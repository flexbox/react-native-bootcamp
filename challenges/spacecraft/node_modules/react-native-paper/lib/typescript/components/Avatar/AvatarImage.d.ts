import * as React from 'react';
import { ImageSourcePropType, ImageProps, View, ViewStyle, StyleProp } from 'react-native';
export declare type AvatarImageSource = ImageSourcePropType | ((props: {
    size: number;
}) => React.ReactNode);
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Image to display for the `Avatar`.
     * It accepts a standard React Native Image `source` prop
     * Or a function that returns an `Image`.
     */
    source: AvatarImageSource;
    /**
     * Size of the avatar.
     */
    size?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * Invoked on load error.
     */
    onError?: ImageProps['onError'];
    /**
     * Invoked on mount and on layout changes.
     */
    onLayout?: ImageProps['onLayout'];
    /**
     * Invoked when load completes successfully.
     */
    onLoad?: ImageProps['onLoad'];
    /**
     * Invoked when load either succeeds or fails.
     */
    onLoadEnd?: ImageProps['onLoadEnd'];
    /**
     * Invoked on load start.
     */
    onLoadStart?: ImageProps['onLoadStart'];
    /**
     * Invoked on download progress.
     */
    onProgress?: ImageProps['onProgress'];
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Image to display for the `Avatar`.
     * It accepts a standard React Native Image `source` prop
     * Or a function that returns an `Image`.
     */
    source: AvatarImageSource;
    /**
     * Size of the avatar.
     */
    size?: number | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * Invoked on load error.
     */
    onError?: ((error: import("react-native").NativeSyntheticEvent<import("react-native").ImageErrorEventData>) => void) | undefined;
    /**
     * Invoked on mount and on layout changes.
     */
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    /**
     * Invoked when load completes successfully.
     */
    onLoad?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").ImageLoadEventData>) => void) | undefined;
    /**
     * Invoked when load either succeeds or fails.
     */
    onLoadEnd?: (() => void) | undefined;
    /**
     * Invoked on load start.
     */
    onLoadStart?: (() => void) | undefined;
    /**
     * Invoked on download progress.
     */
    onProgress?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").ImageProgressEventDataIOS>) => void) | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "source" | "size" | keyof import("react-native").ViewProps | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "onProgress" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Image to display for the `Avatar`.
     * It accepts a standard React Native Image `source` prop
     * Or a function that returns an `Image`.
     */
    source: AvatarImageSource;
    /**
     * Size of the avatar.
     */
    size?: number | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * Invoked on load error.
     */
    onError?: ((error: import("react-native").NativeSyntheticEvent<import("react-native").ImageErrorEventData>) => void) | undefined;
    /**
     * Invoked on mount and on layout changes.
     */
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    /**
     * Invoked when load completes successfully.
     */
    onLoad?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").ImageLoadEventData>) => void) | undefined;
    /**
     * Invoked when load either succeeds or fails.
     */
    onLoadEnd?: (() => void) | undefined;
    /**
     * Invoked on load start.
     */
    onLoadStart?: (() => void) | undefined;
    /**
     * Invoked on download progress.
     */
    onProgress?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").ImageProgressEventDataIOS>) => void) | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ size, source, style, onError, onLayout, onLoad, onLoadEnd, onLoadStart, onProgress, theme, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
