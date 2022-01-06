/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { Animated, ViewProps } from 'react-native';
import { IconAnimationRegistry } from './iconAnimation';
import { AnimationConfig } from '../animation';
declare type WrappedElementProps = any;
export declare type IconProps<T = WrappedElementProps> = T & {
    name: string;
    pack?: string;
    animation?: keyof IconAnimationRegistry | null;
    animationConfig?: AnimationConfig;
};
export declare type IconElement<T = WrappedElementProps> = React.ReactElement<IconProps<T>>;
/**
 * Animated Icon component.
 *
 * @extends React.Component
 *
 * @method {(callback?: Animated.EndCallback) => void} startAnimation - Toggle animation to start.
 *
 * @method {() => void} stopAnimation - Toggle animation to stop.
 *
 * @property {string} name - A name of icon registered in a specific pack.
 *
 * @property {string} pack - A name of icon pack registered in IconRegistry that is able to provide
 * an icon for a given name.
 *
 * @property {string} animation - Animation name. Can be `zoom`, `pulse`, `shake` or null.
 * Defaults to *zoom*.
 *
 * @property {AnimationConfig} animationConfig - Animation config.
 *
 * @property {any} ...props - Accepts any props
 * depending on the component registered in IconRegistry for a given `name` property.
 * In case of using `@ui-kitten/eva-icons` package, Icon accepts any props for react-native-svg component.
 *
 * @overview-example IconSimpleUsage
 * Icon component provides a simple way to render image by requesting it from an icon set.
 * Icons come with [additional packages](guides/icon-packages),
 * that should be configured before using component.
 * We recommend using [Eva Icons](https://akveo.github.io/eva-icons),
 * to provide a full consistency with Eva Design System.
 *
 * @overview-example IconWithinComponents
 * All UI Kitten components that may contain inner views have support for Eva Icons.
 * When using icons as nested components, icon styles are handled by Eva.
 *
 * @overview-example IconAnimation
 * Icons have 3 types of animations: `zoom`, `pulse` and `shake`.
 *
 * @overview-example IconTheming
 * In particular cases, Icon should be styled in a different way.
 * In case of using Eva Icons it renders [svg images](https://github.com/react-native-community/react-native-svg).
 *
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
export declare class Icon<T> extends React.Component<IconProps<T>> {
    static defaultProps: Partial<IconProps>;
    private readonly animation;
    constructor(props: IconProps<T>);
    componentWillUnmount(): void;
    startAnimation: (callback?: Animated.EndCallback) => void;
    stopAnimation: () => void;
    render(): React.ReactElement<ViewProps>;
}
export {};
