/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Animated, ViewProps } from 'react-native';
import { Animation, AnimationConfig } from './animation';
declare type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;
export interface ShakeAnimationConfig extends AnimationConfig, TimingAnimationConfig {
    start?: number;
    offset?: number;
}
export declare class ShakeAnimation extends Animation<ShakeAnimationConfig, ViewProps> {
    private value;
    constructor(config?: ShakeAnimationConfig);
    protected get animation(): Animated.CompositeAnimation;
    toProps(): ViewProps;
}
export {};
