import * as React from 'react';
import { StyleProp, Animated, View, ViewStyle } from 'react-native';
import Surface from '../Surface';
declare type OutlinedCardProps = {
    mode: 'outlined';
    elevation?: never;
};
declare type ElevatedCardProps = {
    mode?: 'elevated';
    elevation?: number;
};
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: never | number;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: 'elevated' | 'outlined';
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};
declare const _default: React.ComponentType<(Pick<OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "onPress" | "onLongPress" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | keyof OutlinedCardProps> | Pick<OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "onPress" | "onLongPress" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | keyof OutlinedCardProps> | Pick<ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "onPress" | "onLongPress" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | keyof ElevatedCardProps> | Pick<ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "onPress" | "onLongPress" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | keyof ElevatedCardProps>) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<(OutlinedCardProps | ElevatedCardProps) & Props> & {
    ({ elevation: cardElevation, onLongPress, onPress, mode: cardMode, children, style, theme, testID, accessible, ...rest }: (OutlinedCardProps | ElevatedCardProps) & Props): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string; /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
    };
    Cover: React.ComponentType<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, keyof import("react-native").ImageProps | "index" | "total" | keyof React.RefAttributes<import("react-native").Image>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }, {}>;
    Title: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "title" | "left" | "right" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }, {}>;
}, {}>;
export default _default;
