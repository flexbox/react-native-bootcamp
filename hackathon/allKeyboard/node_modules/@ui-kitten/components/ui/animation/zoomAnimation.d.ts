/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Animated, ViewProps } from 'react-native';
import { Animation, AnimationConfig } from './animation';
declare type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;
export interface ZoomAnimationConfig extends AnimationConfig, TimingAnimationConfig {
    start?: number;
    end?: number;
}
export declare class ZoomAnimation extends Animation<ZoomAnimationConfig, ViewProps> {
    private value;
    constructor(config?: ZoomAnimationConfig);
    protected get animation(): Animated.CompositeAnimation;
    toProps(): ViewProps;
}
export {};
